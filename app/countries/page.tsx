import { fetchCountries } from '@/shared/api/countries';
import { CountryListWidget } from '@/widgets/countries';

import styles from './page.module.css';

export default async function CountriesPage() {
    const countries = await fetchCountries();

    return (
        <main>
            <h1 className={styles.heading}>Список стран</h1>
            <CountryListWidget initialCountries={countries} />
        </main>
    )
}