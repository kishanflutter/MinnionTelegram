
import DataCard, { BoosterPlanItem } from "@/components/BoosterPlan";
import levelConfig from "@/config/level-config";
import { wrap } from "module";
import { cn, compactNumber } from "@/lib/utils";
import React, { useState } from 'react';
import BottomSheetModal from "@/components/BottomSheetModal";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const data: BoosterPlanItem[] = [
  {
    icon: '/images/one.png',
    boostPrice: '$10',
    totalClaim: '180,000 MIN',
    dailyClaimLimit: '900',
    points: '0',
    days: '200',
  },
  {
    icon: '/images/five.png',
    boostPrice: '$25',
    totalClaim: '450,000 MIN',
    dailyClaimLimit: '2,250',
    points: '0',
    days: '200',
  },
  {
    icon: '/images/three.png',
    boostPrice: '$100',
    totalClaim: '1,800,000 MIN',
    dailyClaimLimit: '9,000',
    points: '1 Point',
    days: '200',
  },
  {
    icon: '/images/two.png',
    boostPrice: '$500',
    totalClaim: '9,000,000 MIN',
    dailyClaimLimit: '45,000',
    points: '5.5 Point',
    days: '200',
  },
];



export default function BoosterPlanList() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("Yaha modal ka content hoga");
  const [selectedUser, setSelectedUser] = useState<BoosterPlanItem | null>(null);

  const purchasedbooster = 0;
  const isActive = false;


  // const handleOpenModal = () => {
  //   setModalData("Yeh hai modal ka data"); // Yaha pe data update kar sakte hain
  //   setIsModalOpen(true);
  // };

  const handleOpenModal = (user: BoosterPlanItem) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex-1 px-5 pb-20 bg-center bg-cover "
      style={{
        // background: "linear-gradient(to bottom, #fcbc3f, black)",
        background: "linear-gradient(to bottom, #f39f1b , #f39f1b, black )",

        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'

      }}
    >
      <div className="flex mt-20 justify-center" >
        <p >Your Balance</p>

      </div>

      <div className="flex mt-1 justify-center items-center select-none ">
        <img
          src="/images/coin.png"
          alt="coins"
          className="object-contain w-8 h-8"
        />
        <span className="text-3xl font-bold text-gradient" style={{ color: "white" }}>
          {10000}
        </span>
      </div>
      <p>Free Boosters</p>
      <div
        style={{
          marginTop:"10px",
          marginBottom:"10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          color: 'white',
          justifyContent: "space-between",
        }}
      >
        <div className="card" style={{ flex: '1', justifyContent: "space-between" }}>
          <div className="flex items-center gap-2 px-3 py-2" style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "1px", color: 'white' ,}}>
              <div>Free</div>
              <div style={{ fontWeight: 'bold', fontSize: '13px' }}>{'10000'}</div>
            </div>
            <div className="card p-2" color="white">
              <img
                src={'/images/four.png'}
                alt="user-avatar"
              
                height={"32px"}
                width={"32px"}
              />
            </div>
          </div>
        </div>

        <div className="card" style={{ flex: '1' }}>
          <div className="flex items-center gap-2 px-3 py-2" style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "1px", color: 'white' }}>
            <div>{isActive?("Active"):("NotActive")}</div>
              <div style={{ fontWeight: 'bold', fontSize: '13px' }}>${purchasedbooster}</div>
            </div>
            <div className="card p-2" color="white">
              <img
                src={'/images/coin.png'}
                alt="user-avatar"
                height={"32px"}
            width={"32px"}
              />
            </div>
          </div>
        </div>
      </div>




      <p>Boosters</p>
      <div className="card" style={{ marginTop:"10px",}}>
      {data.map((item, index) => (
  <div
    key={index}
    onClick={() => handleOpenModal(item)}
    style={{ cursor: "pointer" }}
  >
    <div className="flex mt-2 items-center gap-2 px-3 py-2 justify-between">
      
      {/* Image aur Text */}
      <div className="flex items-center gap-2">
        <div className="card p-2" style={{ color: "white" }}>
          <img
            src={item.icon}
            alt="user-avatar"
            height={"32px"}
            width={"32px"}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "1px", color: 'white' }}>
          <div>Booster {index + 1}</div>
          <div style={{ fontWeight: 'bold', fontSize: '13px' }}>{item.boostPrice}</div>
        </div>
      </div>

      {/* Right Arrow Icon */}
      <div>
        <FaChevronRight style={{ color: "white", fontSize: "16px" }} />
      </div>
    </div>
  </div>
))}





        
      </div>
      <BottomSheetModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedUser}
        />
    </div>




  );

}

// const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'space-around',
//       padding: '20px',

//       flexWrap: 'wrap' as 'wrap', // TypeScript compatibility
//     },

//   };

const stylescustom = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 cards per row
    gridTemplateRows: 'repeat(2, auto)',   // 2 rows
    gap: '20px',                            // Gap between the cards
    padding: '20px',
  },
  cardWrapper: {
    width: '48%', // 2 cards per row with a small gap in between
    marginBottom: '20px', // Space between rows
  },
};