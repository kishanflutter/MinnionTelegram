import DashBoardWidget from "@/components/DashBoardWidget";
import UserTap from "../components/UserTap";
import UserGameDetails from "@/components/UserGameDetails";
import levelConfig from "@/config/level-config";
// import { useState } from "react";
//import { uesStore } from "@/store";
import { useUser } from "@/TelegramUserContext";

import { useLocation, useParams } from "react-router-dom";

// Use both location and useParams
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from './Modal';



export default function Home() {

  const { user } = useUser();
  const location = useLocation();  // Use location for query params
  const { referralId: routeReferralId } = useParams<{ referralId?: string }>();  // Get referralId from URL path
  const [address, setAddress] = useState('0xB4647b856CB9C3856d559C885Bed8B46e08464b11');
  const [status, setStatus] = useState(1);
  const [username, setUsername] = useState('xee12');
  const [referralId, setReferralId] = useState(routeReferralId || '');  // Start with the referralId from the route (if available)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const referralIdFromUrl = urlParams.get("referralId");

    if (referralIdFromUrl) {
      setReferralId(referralIdFromUrl); // Set referralId from query params if available
      setIsModalOpen(true); // Open modal
    }
  }, [location.search]);
  const handleClick = async (referralId: string) => {
    setReferralId(referralId);  // Update state with referralId
    try {
      const res = await axios.post('http://localhost:8443/api/minion', {
        method: "user",
        submethod: "insert",
        address: address,
        status: status,
        username: username,
        referralId: referralId,
        key: "CweP8Hi5DcE69",
      });

      // Log the response data
      console.log("pending user data", res.data);

      // Check if there was an error in the response
      if (res.data.error) {
        console.error("Error in response:", res.data.error);
        return;
      }

      console.log("Insert successful:", res.data);

    } catch (err) {
      console.error("Error making API call:", err);
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log("referralId", referralId);
  //const user = useUserStore();
  // const [telegramuser, setUser] = useState<TelegramUserDetails | null>(null);

  // const saveduser = localStorage.getItem('telegramuserDetails');
  // if (saveduser) {
  //   setUser(JSON.parse(saveduser));
  // }

  //const { maxLevel } = uesStore();
  return (
    <div
      className="flex-1 px-5 pb-20 bg-center bg-cover "
      style={{
        backgroundImage: `url(/images/background_minnion.png)`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'

      }}
    >
      {/* <header className="flex items-center justify-between mt-4">


  
      {user ? (




        <div className="card"  style={{color : "white"}}>

      
        <div className="flex items-center gap-2 px-3 py-2">
          <img
            src={user.photoUrl==""?"/images/coin.png":user.photoUrl} 

            alt="user-avatar"
            className="object-cover w-8 h-8 rounded-full"
          />
          <p className="text-sm font-medium uppercase" style={{color : "black"}}>
            {user.first_name} {user.last_name}
          </p>
        </div>
        </div>
      ):
      (
        <p>Loading...</p>
      )
      }
      </header> */}

      <header className="flex items-center justify-between mt-4">

        <div className="card" style={{ backgroundColor: 'white' }}>
          {user ? (




            <div className="card" style={{ color: "white" }}>


              <div className="flex items-center gap-2 px-3 py-2">
                <img
                  src={user.photoUrl == "" ? "/images/coin.png" : user.photoUrl}

                  alt="user-avatar"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <p className="text-sm font-medium uppercase" style={{ color: "black" }}>
                  {user.first_name} {user.last_name}
                </p>
              </div>
            </div>
          ) :
            (
              <p>Loading...</p>
            )
          }
        </div>

        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Now
        </button>
      </header>


      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleClick} initialReferralId={referralId} />
      <UserGameDetails className="mt-6" />

      {/* <div className=""> */}
      {/* <Link
          to={"/leaderboard"}
          className="flex items-center justify-between gap-2"
        >
          <div className="flex items-center text-xs" style={{color : "black"}}>
            <span>{user.level?.name}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs" style={{color : "black"}}>Level</span>
            <span className="font-bold" style={{color : "black"}}>
              {user.level?.level}/{maxLevel}
            </span>
          </div>
        </Link> */}
      {/* <div className="bg-[#FFDAA3]/10 border overflow-hidden border-[#FFDAA3]/10 rounded-full mt-2 h-4 w-full">
          <div
            className="bg-[linear-gradient(180deg,#FBEDE0_0%,#F7B87D_21%,#F3A155_52%,#E6824B_84%,#D36224_100%)] h-full"
            style={{
              width: `${(user.balance! / user.level!.to_balance) * 100}%`,
            }}
          ></div>
        </div> */}
      {/* </div> */}

      {/* <div style={containerStyle}> */}
      <div>
        <div>
          {/* <div style={centeredDivStyle}> */}
          <div className="flex mt-6 space-x-1.5 justify-center items-center select-none">
            <img
              src="/images/coin.png"
              alt="coins"
              className="object-contain w-10 h-10"
            />
            <span className="text-3xl font-bold text-gradient" style={{ color: "black" }}>
              {10000}
            </span>
          </div>
          <UserTap />

        </div>



      </div>
      <DashBoardWidget />
    </div>
  );
}
// const containerStyle: React.CSSProperties = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '70vh', // Full viewport height
// };

// const centeredDivStyle: React.CSSProperties = {
//   padding: '20px',
//   borderRadius: '8px',
// };