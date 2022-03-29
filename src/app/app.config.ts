import Container from 'typedi';
import { StoresMap, STORES_TOKEN } from './data/local/global-store.service';
import { globalStores } from 'app/data/local';

export const configApp = () => {
  configGlobalStore();
};

const configGlobalStore = () => {
  const storesMap = new Map();
  Container.set(StoresMap, storesMap);
  Container.set(STORES_TOKEN, globalStores);
};
