'use client'

import { CountryCard } from '@/entities/countries/ui/country-card';

import type { RefObject } from 'react';
import type { TCountry, TCountryKey } from '@/shared/api/countries';
import type { TCountriesRefs } from '@/features/countries';

import styles from './country-list.module.css';

type Props = {
    countries: TCountry[];
    countriesRefs: RefObject<TCountriesRefs>;
    onRemove: (code: TCountryKey) => void;
}

export const CountryList = ({ countries, countriesRefs, onRemove }: Props) => {
    return (
        <ul className={styles.list}>
            {countries.map(({ name_ru, flag_url, iso_code3 }) => (
                <CountryCard
                    key={iso_code3}
                    ref={(el) => {
                        countriesRefs.current[iso_code3] = el
                    }}
                    name={name_ru}
                    flagURL={flag_url}
                    onRemove={() => onRemove(iso_code3)}
                />
            ))}
        </ul>
    )
}
