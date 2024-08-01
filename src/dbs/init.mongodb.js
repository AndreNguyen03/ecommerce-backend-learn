`use strict`;

import mongoose from "mongoose";
import check from "../helpers/check.connect.js";
import { app, db } from "../configs/config.mongodb.js";

const { host, port, name } = db;
const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = `mongodb`) {
    if (1 === 1) {
      mongoose.set(`debug`, true);
      mongoose.set(`debug`, { color: true });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) =>
        console.log(`Connected Mongodb Success PRO`, check.countConnect())
      )
      .catch((err) => console.log(`Error Connect!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

export default instanceMongodb;
