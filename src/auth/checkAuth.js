`use strict`;

import { findById } from "../services/apikey.service";

const HEADER = {
  API_KEY: `x-api-key`,
  AUTHORIZATION: `authorization`,
};

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();

    if (!key) {
      return res.status(403).json({
        message: `Forbidden Error`,
      });
    }

    //check objKey
    const objKey = await findById(key);

    if (!objKey) {
      return res.status(403).json({
        message: `Forbidden Error`,
      });
    }
    req.objKey = objKey;
  } catch (error) {}
};

const permission = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      return res.status(403).json({
        message: `permission denied`,
      });
    }

    console.log(`permissions::`, req.objKey.permissions);
    const validPermission = req.objKey.permissions.includes(permission);
    if (!validPermission) {
      return res.status(403).json({
        message: `permission denied`,
      });
    }
  };
};

const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export { apiKey, permission, asyncHandler };
