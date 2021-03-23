import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie, watchList, actionProps = {} }) {
    const [isMetaRevealed, setIsMetaRevealed] = useState(false);
    const date = new Date(movie.release_date);

    const onMouseEnter = useCallback(() => {
        setIsMetaRevealed(true);
    },[isMetaRevealed]);

    const onMouseLeave = useCallback(() => {
        setIsMetaRevealed(false);
    },[isMetaRevealed]);

    // 🤦‍♂️ DOH! I forgot to hook up the onClick 😭😭😭😭😭
    const onClick = useCallback((movie = {}) => {
        if(typeof actionProps.onClick === 'function') {
            actionProps.onClick(movie);
        }
    })
    const movieCardMetaClassNames = cx(styles.movieCardMeta, {[styles.movieCardMetaReveal]: isMetaRevealed});

    return (
        <div className={styles.movieCard} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img className={styles.movieCardPoster} src={`/images/starwars_episode_0${movie.episode_id}.jpg`} />
            <div className={movieCardMetaClassNames}>
                <div>
                    <h3 className={styles.movieCardMetaTitle}>{movie.title}</h3>
                    <p className={styles.movieCardMetaYear}>({date.getFullYear()})</p>
                </div>
                <div className={styles.movieCardMetaActions}>
                    <button className={cx(styles.movieCardMetaAction, styles.movieCardMetaActionButton)} onClick={onClick.bind(null, movie)}>
                        <div className={styles.movieCardMetaActionButtonIcon}>{actionProps.icon}</div>
                        {actionProps.label}
                    </button>
                </div>
            </div>
        </div>
    )
}