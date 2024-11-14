// BottomSheetModal.tsx
import React from 'react';
import { BoosterPlanItem } from './BoosterPlan';
import { colors } from '@mui/material';

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BoosterPlanItem | null; // Allow data to be null
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null; // Only render when isOpen and data are available

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <button onClick={onClose} style={styles.closeButton}>X</button>
        </div>
        <div style={styles.content} >
          <h2>Plan Details</h2>
          <p className="text-sm font-bold">Booster Price: {data.boostPrice}</p>
         <p className="mt-1 text-sm font-medium">Total Claim: {data.totalClaim}</p>
         <p className="mt-1 text-sm font-medium">Daily Claim Limit: {data.dailyClaimLimit}</p>
         <p className="mt-1 text-sm font-medium">Points: {data.points}</p>
         <p className="mt-1 text-sm font-medium">Days: {data.days}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '500px',
    padding: '16px',
    boxSizing: 'border-box' as 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color:'black'
  },
  content: {
    padding: '16px 0',
    color: "black"
  },
};

export default BottomSheetModal;
