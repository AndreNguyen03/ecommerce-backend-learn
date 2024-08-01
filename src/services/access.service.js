`use strict`;

import shopModel from "../models/shop.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import KeyTokenService from "./keyToken.service.js";
import { createTokenPair } from "../auth/authUtils.js";
import { format } from "path";
import { getInfoData } from "../utils/index.js";
import { BadRequestError } from "../core/error.response.js";

const RoleShop = {
  SHOP: `SHOP`,
  WRITER: `WRITER`,
  EDITOR: `EDITOR`,
  ADMIN: `ADMIN`,
};

class AccessService {
  signUp = async ({ name, email, password }) => {
    try {
      //step 1 check email exists ?
      const holderShop = await shopModel.findOne({ email }).lean();
      if (holderShop) {
        throw new BadRequestError(`Error: Shop already registered!`);
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const newShop = await shopModel.create({
        name: name,
        email: email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      });

      if (newShop) {
        // create privateKey, publicKey
        const privateKey = crypto.randomBytes(64).toString(`hex`);
        const publicKey = crypto.randomBytes(64).toString(`hex`);

        const keyStore = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
          privateKey,
        });

        if (!keyStore) {
          throw new BadRequestError(`Error: Shop already registered!`);
        }

        //create token pair
        const tokens = await createTokenPair(
          { userId: newShop._id, email },
          publicKey,
          privateKey
        );

        console.log(`created token success ::`, tokens);

        return {
          code: 201,
          metadata: {
            shop: getInfoData({
              fields: [`_id`, `name`, `email`],
              object: newShop,
            }),
            tokens,
          },
        };
      }
      return {
        code: 200,
        metadata: null,
      };
    } catch (error) {
      return {
        message: error.message,
        code: `xxx`,
        status: `error`,
      };
    }
  };
}

export default new AccessService();
