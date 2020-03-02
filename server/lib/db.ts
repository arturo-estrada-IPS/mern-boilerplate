import mongoose from 'mongoose';
import chalk from 'chalk';

export class DataBase {
  dbName: string;

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  async connect() {
    try {
      const urlConn = `${process.env.DATABASE_URL}/${this.dbName}` || ''; // you could include the url directly as well
      const conn = await mongoose.connect(urlConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log(chalk.green('Database successfully connected'));
      return conn;
    } catch (err) {
      console.error(chalk.red('Unable to connect to database'));
      console.error(err);
      throw err;
    }
  }
}
