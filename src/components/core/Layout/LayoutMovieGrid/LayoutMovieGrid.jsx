import React from 'react';
import styles from './LayoutMovieGrid.module.css';

export default function LayoutMovieGrid({ children }) {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}