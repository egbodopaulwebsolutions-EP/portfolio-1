import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

countries.registerLocale(en);

export type Country = {
  name: string;
  iso: string;
  code: string;
};

// Get all ISO country codes (official source)
const ISO_CODES = getCountries();

export const COUNTRIES: Country[] = ISO_CODES.map((iso) => {
  const name = countries.getName(iso, "en");
  let code = "";

  try {
    code = `+${getCountryCallingCode(iso)}`;
  } catch {
    // Some territories don’t have calling codes
    code = "";
  }

  return {
    name: name || iso,
    iso,
    code,
  };
})
  // remove entries without dial codes
  .filter((c) => c.code)
  // alphabetical order
  .sort((a, b) => a.name.localeCompare(b.name));
