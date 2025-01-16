export type TCountry = {
    flag_url : string,
    name_ru : string,
    iso_code2 : string,
    iso_code3 : string
}

export type TCountryKey = TCountry['iso_code3'];

const API_URL = 'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json';

export const fetchCountries = async (): Promise<TCountry[]> => {
    const res = await fetch(API_URL);

    return res.json();
}
