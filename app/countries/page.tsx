import { fetchCountries } from '@/shared/api/countries';
import { CountryListWidget } from '@/widgets/countries';

import type { Metadata } from 'next';

import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Countries",
    description: "Countries page"
};

export const revalidate = 3600 // ревалидация раз в час

export default async function CountriesPage() {
    const countries = await fetchCountries();

    return (
        <main>
            <h1 className={styles.heading}>Список стран</h1>
            <CountryListWidget initialCountries={countries} />
        </main>
    )
}