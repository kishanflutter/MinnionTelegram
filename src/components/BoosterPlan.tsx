// DataCard.tsx
import React from 'react';

// Data types definition
export interface BoosterPlanItem {
  icon:string
  boostPrice: string;
  totalClaim: string;
  dailyClaimLimit: string;
  points: string;
  days: string;
}

// Functional component to render the data
const DataCard: React.FC<BoosterPlanItem> = ({ boostPrice, totalClaim, dailyClaimLimit, points, days }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        <div style={styles.cardItem}>
          <strong>Boost Price: </strong>{boostPrice}
        </div>
        <div style={styles.cardItem}>
          <strong>Total Claim: </strong>{totalClaim}
        </div>
        <div style={styles.cardItem}>
          <strong>Daily Claim Limit: </strong>{dailyClaimLimit}
        </div>
        <div style={styles.cardItem}>
          <strong>Points: </strong>{points}
        </div>
        <div style={styles.cardItem}>
          <strong>Days: </strong>{days}
        </div>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  card: {
    backgroundColor: '#000',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    margin: '10px',
    padding: '20px',
    transition: 'all 0.3s ease-in-out',
  },
  cardContent: {
   // display: 'flex',
   // flexDirection: 'column',
    gap: '10px',
  },
  cardItem: {
    fontSize: '14px',
    fontWeight: 'normal',
  },
};

export default DataCard;
