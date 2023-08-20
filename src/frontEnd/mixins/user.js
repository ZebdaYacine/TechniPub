import { mapGetters, mapActions } from "vuex";
import validators from "../plugins/validators";

const userMixins = {
  data() {
    return {};
  },
  methods: {
    ...mapActions("userMod", { setUser: "setUserAction" }),
    ...mapActions("formMod", { setPhoneStatus: "phoneStatuesAction" }),
    ...mapActions("formMod", { setPasswordStatus: "passwordStatuesAction" }),
    ...mapActions("formMod", { setPasswordCStatus: "passwordCStatuesAction" }),
    ...mapActions("userMod", { setLoginStatus: "changeLoginStatusAction" }),
  },
  computed: {
    ...mapGetters("userMod", { userInfo: "getUser" }),
    ...mapGetters("formMod", { formstatus: "getForm" }),
    ...mapGetters("formMod", { phoneStatus: "getPhoneStatus" }),
    ...mapGetters("formMod", { passworsStatus: "getPasswordStatus" }),
    ...mapGetters("formMod", { passworsCstatus: "getPasswordCStatus" }),
    ...mapGetters("formMod", { formLoginStatus: "getFormLoginStatus" }),
  },
  mounted() {
    this.setUser({
      name: "",
      id: "",
      isLogged: false,
      privilage: "",
    });
    //console.log(this.userInfo);
  },
  watch: {
    "userForm.phone": function (newValue) {
      const result = validators.target.get("phone").check(newValue);
      this.setPhoneStatus(result);
      this.initClass = "fnkfdgn";
      console.log(this.initClass);
    },
    "userForm.password": function (newValue) {
      const result = validators.target.get("password").check(newValue);
      this.setPasswordStatus(result);
    },
    "userForm.passwordC": function (newValue) {
      this.setPasswordCStatus(
        newValue === this.userForm.Initialpassword
          ? true
          : "password don't matche"
      );
    },
  },
};

export default userMixins;
