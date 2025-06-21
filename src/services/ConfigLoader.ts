class ConfigLoader {
  API_BASE_URL = import.meta.env.API_BASE_URL;

  constructor() {
    if (!this.API_BASE_URL) {
      throw new Error('No API URL provided!');
    }
  }
}
export const AppConfig = new ConfigLoader();
