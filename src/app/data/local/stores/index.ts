import { Store } from 'app/data/local/global-store.service';

import { UserStore } from './user.store';

export * from './user.store';

export const globalStores: Store[] = [UserStore];
