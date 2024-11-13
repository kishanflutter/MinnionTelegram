import DashBoardWidget from "@/components/DashBoardWidget";
import UserTap from "../components/UserTap";
import UserGameDetails from "@/components/UserGameDetails";
import levelConfig from "@/config/level-config";
import { useState } from "react";
import { useUser } from "@/TelegramUserContext";
//import { uesStore } from "@/store";





export default function Home() {
  const { user } = useUser();

  //const user = useUserStore();
  // const [telegramuser, setUser] = useState<TelegramUserDetails | null>(null);

  // const saveduser = localStorage.getItem('telegramuserDetails');
  // if (saveduser) {
  //   setUser(JSON.parse(saveduser));
  // }

  //const { maxLevel } = uesStore();
  return (
    <div
      className="flex-1 px-5 pb-20 bg-center bg-cover"
      style={{
        backgroundImage: `url(${levelConfig.bg[1]})`,
      }}
    >
      <header className="flex items-center justify-between mt-4">

      {/* <img
            src={localStorage.getItem('profilePIC')?.toString()} 
            alt="user-avatar"
            className="object-cover w-8 h-8 rounded-full"
          />
          <p className="text-sm font-medium uppercase" style={{color : "black"}}>
            {localStorage.getItem('first_name')?.toString()}</p> */}
  
      {user ? (
        <div className="flex items-center gap-2 px-3 py-2 border-2 rounded-full bg-black/20 border-white/10">
          <img
            src={user.photoUrl==""?"/images/coin.png":user.photoUrl} 

            alt="user-avatar"
            className="object-cover w-8 h-8 rounded-full"
          />
          
          {/* <p className="text-sm font-medium uppercase" style={{color : "black"}}>
            {user!.id}           </p> */}
          <p className="text-sm font-medium uppercase" style={{color : "black"}}>
            {user.first_name} {user.last_name}
          </p>
        </div>
      ):
      (
        <p>Loading...</p>
      )
      }
      </header>

{/* <p>logdetails:{logdetails}</p>

      {telegramuser ? (
        <div>
          <h2>User Details:</h2>
          
          <p>ID: {telegramuser.id}</p>
          <p>First Name: {telegramuser.first_name}</p>
          {telegramuser.last_name && <p>Last Name: {telegramuser.last_name}</p>}
          {telegramuser.username && <p>Username: {telegramuser.username}</p>}
          {telegramuser.photoUrl && (
            <img src={telegramuser.photoUrl} alt={`${telegramuser.first_name}'s profile`} />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )} */}

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
        <span className="text-3xl font-bold text-gradient" style={{color : "black"}}>
          {10000}
        </span>
      </div>
      <UserTap />
      
      </div>
    

    
    </div>
    <DashBoardWidget/>
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