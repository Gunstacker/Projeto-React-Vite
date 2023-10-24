import React from 'react';
import styles from './GameUpdates.module.css';

function GameUpdates({ title, patchNumber, updates, imageUrl }) {
  return (
    <div className={`accordion mt-3 ${styles.section}`}>
      <div className={`card ${styles.card}`}>
        <div className={`card-header ${styles.cardHeader}`}>
          <h2 className={`mb-0 text-center ${styles.title}`}>{title}</h2>
        </div>
        <div className={`collapse show ${styles.infoSection}`}>
          <div className={`card-body row ${styles.cardBody}`}>
          <h4 className={`text-center ${styles.patchTitle}`}>Patch Notes {patchNumber}</h4>
            <div className="col-md-4">
              
              <ul className={`mb-3 ${styles.updateList}`}>
                {updates.map((update, index) => (
                  <li key={index} className={styles.updateItem}>
                    {update}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <img src={imageUrl} className={styles.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameUpdates;
