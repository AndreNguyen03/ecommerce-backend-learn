"use strict";

import AccessService from "../services/access.service.js";

import { OK, CREATED } from "../core/success.response.js";

class AccessController {
  signUp = async (req, res, next) => {
    new CREATED({
      message: `Registered OK!`,
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };
}

export default new AccessController();
