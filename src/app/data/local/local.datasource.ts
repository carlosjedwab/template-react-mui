const safeSaveInAsyncStorage = async <T>(key: string, value: T): Promise<T> => {
  if (key === undefined || value === undefined) {
    throw new Error('undefined key or value');
  }
  await localStorage.setItem(key, JSON.stringify(value));
  return value;
};

export const LocalDataSource = {
  set: <T>(key: string, value: T): Promise<T> => {
    return safeSaveInAsyncStorage(key, value);
  },

  get: async <T>(key: string): Promise<T> => {
    const value = await localStorage.getItem(key);
    return JSON.parse(value as string);
  },

  remove: (key: string) => {
    return localStorage.removeItem(key);
  },
};
