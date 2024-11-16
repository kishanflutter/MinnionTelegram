import DashBoardWidget from "@/components/DashBoardWidget";
import UserTap from "../components/UserTap";
import UserGameDetails from "@/components/UserGameDetails";
import levelConfig from "@/config/level-config";
import { useUser } from "@/TelegramUserContext";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from './Modal';
import { toast } from 'react-toastify';

export default function Home() {
  const { user } = useUser();
  const location = useLocation();
  const { referralId: routeReferralId } = useParams<{ referralId?: string }>();

  // State variables
  const [address, setAddress] = useState('0xB4647b856CB9C3856d559C885Bed8B46e08464b11');
  const [status, setStatus] = useState(1);
  const [username, setUsername] = useState(1);
  const [referralId, setReferralId] = useState(routeReferralId || '');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Change the state type to UserData | null
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const referralIdFromUrl = urlParams.get("referralId");

    if (referralIdFromUrl) {
      setReferralId(referralIdFromUrl);
      setIsModalOpen(true);
    }
  }, [location.search]);

  // Function to handle referralId and API call
  const handleClick = async (referralId: string) => {
    setReferralId(referralId);
    try {
      const res = await axios.post<ResponseData>(import.meta.env.VITE_APP_BACKEND_URL, {
        method: "user",
        submethod: "insert",
        address: address,
        username: username,
        referralId: referralId,
        status: status,
        key: "CweP8Hi5DcE69",
      });

      console.log("data", res.data);
      if (res.data.error) {
        console.error("Error in response:", res.data.error);
        toast.error(`Error: ${res.data.error}`, { position: "top-center" });
        return;
      }

      console.log("Insert successful:", res.data);
      toast.success('Insert successful!', { position: "top-center" });
    } catch (err) {
      console.error("Error making API call:", err);
      if (axios.isAxiosError(err)) {
        toast.error(`Axios error: ${err.response?.data || err.message}`, { position: "top-center" });
      } else {
        toast.error('Something went wrong! Please try again later.', { position: "top-center" });
      }
    }
  };

  // Define GetDataParams and UserData interfaces
  interface GetDataParams {
    username: number;
  }

  interface UserData {
    username: number;
    email: string;
    // Add any other user properties you expect to get from the API
  }

  interface ResponseData {
    data: UserData;
    error: string | null;
  }

  const getData = async ({ username }: GetDataParams): Promise<void> => {
    try {
      const res = await axios.post<ResponseData>(import.meta.env.VITE_APP_BACKEND_URL, {
        method: "user",
        submethod: "getbyid",
        username: username,
        key: "CweP8Hi5DcE69",
      });

      console.log("Full response data:", res.data);
      console.log("Data from API:", res.data.data);

      if (res.data.error) {
        console.error("Error in response:", res.data.error);
        toast.error(`Error: ${res.data.error}`, { position: "top-center" });
        return;
      }

      if (res.data.data) {
        setData(res.data.data);
        console.log("User data set:", res.data.data);
      } else {
        console.error("No user data found");
      }
    } catch (err) {
      console.error("Error making API call:", err);
      if (axios.isAxiosError(err)) {
        toast.error(`Axios error: ${err.response?.data || err.message}`, { position: "top-center" });
      } else {
        toast.error('Something went wrong! Please try again later.', { position: "top-center" });
      }
    }
  };

  // Call getData on page load or when username changes
  useEffect(() => {
    getData({ username });
  }, [username]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex-1 px-5 pb-20 bg-center bg-cover "
      style={{
        backgroundImage: `url(/images/background_minnion.png)`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }}
    >
      <header className="flex items-center justify-between mt-4">
        <div className="card" style={{ backgroundColor: 'white' }}>
          {user ? (
            <div className="card" style={{ color: "white" }}>
              <div className="flex items-center gap-2 px-3 py-2">
                <img
                  src={user.photoUrl === "" ? "/images/coin.png" : user.photoUrl}
                  alt="user-avatar"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <p className="text-sm font-medium uppercase" style={{ color: "black" }}>
                  {user.first_name} {user.last_name}
                </p>
              </div>
            </div>
          ) : (
            <p style={{ color: "black" }} className="px-2">Loading...</p>
          )}
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
      <div className="flex mt-6 space-x-1.5 justify-center items-center select-none">
        <img src="/images/coin.png" alt="coins" className="object-contain w-10 h-10" />
        <span className="text-3xl font-bold text-gradient" style={{ color: "black" }}>
          {10000}
        </span>
      </div>
      <UserTap />
      <DashBoardWidget data={data} />
    </div>
  );
}
