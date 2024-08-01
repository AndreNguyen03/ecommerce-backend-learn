`use strict`;

import mongoose from "mongoose";
import os from "os";
import process from "process";
const _SECONDS = 5000;

// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections:: ${numConnection}`);
};

// check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memUsage = process.memoryUsage().rss;
    //Example maximum number of connectios base on number of cores
    const maxConnections = numCores * 5;

    console.log(`Active connection:: ${numConnection}`);
    console.log(`Mem usage:: ${memUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log(`Connection overload detected!`);
    }
  }, _SECONDS);
};

export default { countConnect, checkOverLoad };
