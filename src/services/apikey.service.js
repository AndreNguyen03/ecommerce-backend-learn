`use strict`;

import apikeyModel from "../models/apikey.model";
import crypto from "crypto";

const findById = async (key) => {
  const newKey = await apikeyModel.create({
    key: crypto.randomBytes(64).toString(`hex`),
    permissions: [`0000`],
  });

  const objKey = await apikeyModel.findOne({ key, status: true }).lean();
  return objKey;
};

export { findById };
