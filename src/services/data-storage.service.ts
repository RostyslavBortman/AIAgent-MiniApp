class DataStorage {
  public constructor() {}

  public async getItem<T>(key: string): Promise<T | null> {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }

  public async setItem<T>(key: string, data: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public async removeItem(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

export const dataStorage = new DataStorage();
