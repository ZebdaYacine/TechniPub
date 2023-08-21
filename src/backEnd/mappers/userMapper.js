const bcrypt = require("bcrypt");
const localConfig = require("../utils/config");

async function registerReqToData(req) {
  return (data = {
    phone: req.phone,
    name: "",
    password: await bcrypt.hash(req.password, localConfig.SALT),
    token: "",
    privilage: "",
  });
}

async function loginReqToData(req) {
  return (data = {
    phone: req.phone,
    password: await bcrypt.hash(req.password, localConfig.SALT),
  });
}

function dbObjectTologinResponse(object) {
  return (data = {
    phone: object.phone,
    token: object.token,
    id: object.id,
    privilage: object.privilage,
  });
}

function dbObjectToRegisterResponse(object) {
  const data = {
    phone: object.phone,
    token: object.token,
    id: object.id,
    privilage: object.privilage,
  };
  return data;
}

module.exports = {
  registerMapping: registerReqToData,
  loginMapping: loginReqToData,
  registerResponse: dbObjectToRegisterResponse,
  loginResponse: dbObjectTologinResponse,
};
