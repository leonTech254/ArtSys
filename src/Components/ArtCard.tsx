import React from 'react';
import styles from '../Assets/css/Artcard.module.css';

interface ArtCardProps {
  artName: string;
  artId: number;
  artPrice: number;
  imageUrl: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ artName, artId, artPrice, imageUrl }) => {
  return (
    <div className={styles.art_card}>
      <div className={styles.art_image_container}>
        <img className={styles.art_image} src={imageUrl} alt={artName} />
      </div>
      <div className={styles.art_details}>
        <h2 className={styles.art_name}>{artName}</h2>
        {/* <p className={styles.art_info}>Art ID: {artId}</p> */}
        <p className={styles.art_info}>Price: ${artPrice}</p>
      </div>
    </div>
  );
};

export default ArtCard;
