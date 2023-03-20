import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import as from "../locales/as/common.json";
import bn from "../locales/bn/common.json";
import bo from "../locales/bo/common.json";
import doi from "../locales/doi/common.json";
import en from "../locales/en/common.json";
import gu from "../locales/gu/common.json";
import hi from "../locales/hi/common.json";
import kas from "../locales/kas/common.json";
import kn from "../locales/kn/common.json";
import kok from "../locales/kok/common.json";
import mai from "../locales/mai/common.json";
import ml from "../locales/ml/common.json";
import mni from "../locales/mni/common.json";
import mr from "../locales/mr/common.json";
import ne from "../locales/ne/common.json";
import od from "../locales/od/common.json";
import pa from "../locales/pa/common.json";
import sa from "../locales/sa/common.json";
import sat from "../locales/sat/common.json";
import sd from "../locales/sd/common.json";
import ta from "../locales/ta/common.json";
import te from "../locales/te/common.json";
import ur from "../locales/ur/common.json";

const resources = {
  en,
  bn,
  hi,
  as,
  bo,
  doi,
  gu,
  kas,
  kn,
  kok,
  mai,
  ml,
  mni,
  mr,
  ne,
  od,
  pa,
  sa,
  sat,
  sd,
  ta,
  te,
  ur,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
