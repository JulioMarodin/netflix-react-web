import { Store } from 'store/store/store.types';

export const authenticated = (state: Store) => !!state.user.data.email;
