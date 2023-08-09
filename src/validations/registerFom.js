import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, sameAs, minLength } from "@vuelidate/validators";

const state = reactive({
  EmailPhone: "",
  Password: "",
  ConformationPassword: "",
});

const rules = {
  EmailPhone: { required },
  Password: {
    required,
    minLengthValue: minLength(6),
  },
  ConformationPassword: {
    sameAsPassword: sameAs(state.Password),
  },
};

const v = useVuelidate(rules, state);

export default { v };
