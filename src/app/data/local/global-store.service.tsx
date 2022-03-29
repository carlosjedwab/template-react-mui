import * as React from 'react';
import { Container as TypeDIContainer, Token } from 'typedi';

export const StoresMap = new Token<Map<Store, GetStoreInstance>>();
export const STORES_TOKEN = new Token<Store[]>();

interface StoreState<S extends {} = any> {
  state: Partial<S>;
  setState: (params: Partial<S>) => void;
}

interface StoreAction<S = unknown, A extends {} = any> {
  actions: A;
  listeners: { run: React.Dispatch<Partial<S>> }[];
}
type GetStoreInstance<S = unknown, A = unknown> = () => [Partial<S>, A];
export type Store<S = unknown, A = unknown> = (store: StoreState<S>) => A;

function setState<S = unknown, A = unknown>(store: StoreState<S>, action: StoreAction<S, A>, newState: Partial<S>) {
  /**
   * Keep the same state instance,
   * so whoever uses this state won't have to wait the next render
   */
  Object.assign(store.state, newState);
  action.listeners.forEach((listener) => {
    listener.run(store.state);
  });
}

function useAddListener<S, A>(storeState: StoreState<S>, action: StoreAction<S, A>): [Partial<S>, A] {
  const [, originalHook] = React.useState(Object.create(null));

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newListener = { run: (stateUpdated: S) => {} };

    // Create a new instance to trigger an render

    newListener.run = (stateUpdated: S) => originalHook({ ...stateUpdated });

    action.listeners.push(newListener as any);
    return () => {
      action.listeners = action.listeners.filter((listener) => listener !== newListener);
    };
  }, []);
  return [storeState.state, action.actions];
}

function createStore<S = unknown, A = unknown>(store: Store<S, A>): GetStoreInstance {
  const action = { actions: undefined, listeners: [] };
  const storeState: StoreState<S> = {
    state: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setState: (newState: Partial<S>) => {},
  };
  storeState.setState = setState.bind(null, storeState, action);
  action.actions = store(storeState) as any;

  return useAddListener.bind(null, storeState, action);
}

const ContextMap = new Map();

const StoreProvider: React.FC<{ store: Store }> = ({ store, children }) => {
  const storesMap = TypeDIContainer.get(StoresMap);
  let getStoreInstance = storesMap.get(store);
  if (!getStoreInstance) {
    getStoreInstance = createStore(store);
    storesMap.set(store, getStoreInstance);
  }

  // get context for specific provider
  let Context = ContextMap.get(store);
  if (!Context) {
    Context = React.createContext<typeof getStoreInstance>({} as any);
    ContextMap.set(store, Context);
  }

  return <Context.Provider value={getStoreInstance}>{children}</Context.Provider>;
};

export const GlobalStoreProvider: React.FC<{ stores: Store[] }> = ({ stores, children }) => {
  // complain if no instances provided for initialization
  if (!stores?.length) {
    throw new Error('You must provide a list of stores to <GlobalStoreProvider> for initialization!');
  }

  return stores.reduce((reponse, store) => <StoreProvider store={store}>{reponse}</StoreProvider>, <>{children}</>);
};

export function useStore<S, A>(store: Store<S, A>): [Partial<S>, A] {
  // use store specific context
  const getStoreInstance = React.useContext<GetStoreInstance<S, A>>(ContextMap.get(store));

  // complain if no getStoreInstance is given
  if (!getStoreInstance) {
    throw new Error('You must wrap your components with a <GlobalStoreProvider>!');
  }

  return getStoreInstance();
}
