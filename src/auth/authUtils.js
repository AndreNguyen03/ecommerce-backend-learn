`use strict`;

import JWT from "jsonwebtoken";

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    //access token
    const accessToken = JWT.sign(payload, publicKey, {
      algorithm: `RS256`,
      expiresIn: `2 days`,
    });

    const refreshToken = JWT.sign(payload, privateKey, {
      algorithm: `RS256`,
      expiresIn: `7 days`,
    });

    //

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.log(`error verify::`, err);
      } else {
        console.log(`decode verify::`, decode);
      }
    });
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

export { createTokenPair };
