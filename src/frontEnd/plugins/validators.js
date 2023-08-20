const Validators = {
  isPatternValide(value, name) {
    const Object = Validators.target.get(name);
    const Error = Validators.ErrorMessage.get(name);
    return Object.regx.test(value) ? true : Error.msg;
  },
  isPassWordValide(value, name) {
    const Error = Validators.ErrorMessage.get(name);
    if (value.length > 8) {
      let pattern = /[A-Z]/;
      if (pattern.test(value)) {
        pattern = /[!@#$%^&*(),.?":{}|<>]/;
        if (pattern.test(value)) {
          return true;
        }
        return Error.SpecialChar;
      }
      return Error.UpperCase;
    }
    return Error.lessThan8;
  },
  isInputValid(value, checkInput, name) {
    return value === "" ? "Empty Input" : checkInput(value, name);
  },
  target: new Map([
    [
      "email",
      {
        regx: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        check(value) {
          return Validators.isInputValid(
            value,
            Validators.isPatternValide,
            "email"
          );
        },
      },
    ],
    [
      "phone",
      {
        regx: /^[0][5|6|7]\d{8}$/,
        check(value) {
          return Validators.isInputValid(
            value,
            Validators.isPatternValide,
            "phone"
          );
        },
      },
    ],
    [
      "password",
      {
        counter: 8,
        check(value) {
          return Validators.isInputValid(
            value,
            Validators.isPassWordValide,
            "password"
          );
        },
      },
    ],
  ]),
  ErrorMessage: new Map([
    ["email", { msg: "Email Invalide" }],
    ["phone", { msg: "Phone Invalide" }],
    [
      "password",
      {
        lessThan8: "password less than 8 Letter",
        UpperCase: "password must Contains Upper Case",
        SpecialChar: "password must Contains Special Letter @+$*...",
      },
    ],
  ]),
};

export default Validators;
