import { ConnectOptions, connect } from 'mongoose';

export class Database {
  private static url = 'mongodb://localhost:27017/freshfood-dev';

  public static async init(): Promise<void> {
    try {
      await connect(this.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions);
    } catch (error) {
      console.log('ERROR', error);
    }
  }
}
