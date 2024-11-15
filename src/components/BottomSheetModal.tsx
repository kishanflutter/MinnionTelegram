// BottomSheetModal.tsx
import React from 'react';
import { BoosterPlanItem } from './BoosterPlan';
import { colors } from '@mui/material';
import { FaCross, FaDoorClosed, FaWindowClose } from 'react-icons/fa';

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
        <FaWindowClose  onClick={onClose}  style={{ color: "white", fontSize: "32px" }} />
        </div>

        
      {/* Image aur Text */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1px", color: 'white' ,}}>

      <div style={styles.centerdata}>
      <div className="card p-2" style={{ color: "white" }}>
          <img
            src={data.icon}
            alt="user-avatar"
            height={"100px"}
            width={"100px"}
          />
        </div>


        
       
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "1px", color: 'white' , fontSize:'13px',marginLeft:"10px"}}>
         <p >Booster Price: {data.boostPrice}</p>
         <p >Total Claim: {data.totalClaim}</p>
         <p >Daily Claim Limit: {data.dailyClaimLimit}</p>
         <p >Points: {data.points}</p>
         <p >Days: {data.days}</p>
         </div>

         
</div>

<button type="button" onClick={onClose} style={buttonStyles}>Purchase</button>

      {/* Right Arrow Icon */}
    
   
        {/* <div style={styles.content} >
          <h2>Booster Details</h2>
          <div className="flex mt-2 items-center gap-2 px-3 py-2 justify-between">
          <img
            src={data.icon}
            alt="user-avatar"
            className="object-cover w-8 h-8 rounded-full"
          />
        </div>
         <p className="text-sm font-bold">Booster Price: {data.boostPrice}</p>
         <p className="mt-1 text-sm font-medium">Total Claim: {data.totalClaim}</p>
         <p className="mt-1 text-sm font-medium">Daily Claim Limit: {data.dailyClaimLimit}</p>
         <p className="mt-1 text-sm font-medium">Points: {data.points}</p>
         <p className="mt-1 text-sm font-medium">Days: {data.days}</p>
        </div> */}
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
    bottom: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
  },
  modal: {
    backgroundColor: '#f39f1b',
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

  centerdata: {
    display: 'flex',
    justifyContent: 'center',
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
    color: "black",
    justifyContent: 'center',

  },
};

const buttonStyles: React.CSSProperties = {
  padding: "8px 16px",
  margin: "5px",
  borderRadius: "4px",
  border: "1px solid #007bff",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
};

export default BottomSheetModal;
