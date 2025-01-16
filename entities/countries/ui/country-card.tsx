import Image from 'next/image';
import { forwardRef } from 'react';

import styles from './country-card.module.css';

const IMAGE_WIDTH = 22;
const IMAGE_HEIGHT = 15;

type Props = {
    name: string;
    flagURL: string;
    onRemove: () => void;
}

export const CountryCard = forwardRef<HTMLLIElement, Props>(({ name, flagURL, onRemove }, ref) => {
    return (
        <li ref={ref} className={styles.card}>
            <div className={styles.image}><Image src={`https:${flagURL}`} alt={name} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} /></div>
            <div className={styles.name}>{name}</div>
            <button className={styles.removeButton} onClick={onRemove}>удалить</button>
        </li>
    )
})