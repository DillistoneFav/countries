'use client';

import { useCountries } from '@/features/countries';
import { TCountry } from '@/shared/api/countries';

import { CountryList } from './ui/country-list';

type Props = {
    initialCountries: TCountry[];
}

export const CountryListWidget = ({ initialCountries }: Props) => {
    const { countries, countriesRefs, removeCountry } = useCountries(initialCountries);

    return (
        <CountryList countries={countries} countriesRefs={countriesRefs} onRemove={removeCountry} />
    )
}