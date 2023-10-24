import styles from './GameUpdates.module.css';

function GameUpdates({ title, patchNumber, updates, imageUrl }) {
  return (
    <div className="accordion mt-3 section">
      <div className={`card ${styles.card}`}>
        <div className="card-header">
          <h2 className="mb-0 text-center">{title}</h2>
        </div>
        <div className="collapse show infoSecao">
          <div className="card-body row">
            <h4 className="text-center">Patch Notes {patchNumber}</h4>
            <ul>
              {updates.map((update, index) => (
                <li key={index}>{update}</li>
              ))}
            </ul>
            <img src={imageUrl} height="300" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameUpdates;