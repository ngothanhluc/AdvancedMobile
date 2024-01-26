import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, vn } from "./translations";

export const languagesResources = {
    en: {
        translation: en,
    },
    vn: {
        translation: vn,
    },
};

i18next.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: "en",
    fallbackLng: "en",
    resources: languagesResources,
});
export default i18next;
