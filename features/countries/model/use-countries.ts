'use client'

import { useRef, useState } from 'react';

import { animate } from '@/features/countries';

import type { TCountry, TCountryKey } from '@/shared/api/countries';

export type TCountriesRefs = Record<TCountryKey, HTMLLIElement | null>;

export const useCountries = (initialCountries: TCountry[]) => {
    const [countries, setCountries] = useState(initialCountries);
    const countriesRefs = useRef<TCountriesRefs>({});

    const removeCountry = (code: TCountryKey) => {
        const item = countriesRefs.current[code];

        if (!item) return;

        animate({
            from: 0,
            to: 5000,
            duration: 750,
            onUpdate: (value) => {
                item.style.transform = `translateX(${value}px)`;
                item.style.opacity = String(1 - value / 2500);
            },
            onComplete: () => {
                const initialHeight = item.clientHeight;

                animate({
                    from: initialHeight,
                    to: -15,
                    duration: 300,
                    onUpdate: (value) => {
                      item.style.marginBottom = `${value - initialHeight}px`;
                    },
                    onComplete: () => {
                      setCountries((prev) => prev.filter((country) => country.iso_code3 !== code));
                    }
                });
            }
        })
    }

    return { countries, countriesRefs, removeCountry }
}