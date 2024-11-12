'use client'

import { useState, useEffect, useCallback } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import levelConfig from "@/config/level-config";



function  TONWALLET  () {

    const [tonConnectUI] = useTonConnectUI();
    const [tonWalletAddress, setTonWalletAddress] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    
  
    const handleWalletConnection = useCallback((address: string) => {
      setTonWalletAddress(address);
      console.log("Wallet connected successfully!");
      setIsLoading(false);
    }, []);
  
    const handleWalletDisconnection = useCallback(() => {
      setTonWalletAddress(null);
      console.log("Wallet disconnected successfully!");
      setIsLoading(false);
    }, []);
  
    useEffect(() => {
      const checkWalletConnection = async () => {
        if (tonConnectUI.account?.address) {
          handleWalletConnection(tonConnectUI.account?.address);
        } else {
          handleWalletDisconnection();
        }
      };
  
      checkWalletConnection();
  
      const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
        if (wallet) {
          handleWalletConnection(wallet.account.address);
        } else {
          handleWalletDisconnection();
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, [tonConnectUI, handleWalletConnection, handleWalletDisconnection]);
  
    const handleWalletAction = async () => {
      if (tonConnectUI.connected) {
        setIsLoading(true);
        await tonConnectUI.disconnect();
      } else {
        await tonConnectUI.openModal();
      }
    };
  
    const formatAddress = (address: string) => {
      const tempAddress = address;
      return `${tempAddress.slice(0, 4)}...${tempAddress.slice(-4)}`;
    };
  
    if (isLoading) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">
            Loading...
          </div>
        </main>
      );
    }
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
           <div
    className="flex-1 px-5 pb-20 bg-center bg-cover"
    style={{
      backgroundImage: `url(${levelConfig.bg[1]})`,
    }}
  >
    <div className="flex flex-col flex-1 w-full h-full px-6 py-8 pb-24 mt-12">
     
      <h1 className="mt-4 text-2xl font-bold text-center uppercase" >
        AirDrop
      </h1>
        {tonWalletAddress ? (
          <div className="flex flex-col items-center">
            <p className="mb-4">Connected: {formatAddress(tonWalletAddress)}</p>
            <button
              onClick={handleWalletAction}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Disconnect Wallet
            </button>
          </div>
        ) : (
          <button
            onClick={handleWalletAction}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Connect TON Wallet
          </button>
        )}


<label style={styles.addressLabelyello}>
         
         Why do we use it?
                 </label>
        <label style={styles.addressLabel}>
         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </label>
        <label style={styles.addressLabelyello}>
         
         Why do we use it?
                 </label>
        <label style={styles.addressLabel}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                 </label>
                 <label style={styles.addressLabelyello}>
         
         Why do we use it?
                 </label>
        <label style={styles.addressLabel}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                 </label>

        </div>
        </div>
      </main>
    );
};



export default TONWALLET;


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full height for vertical centering
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'black',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 20px',
    margin: '10px 0',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  
  addressLabel: {
    marginTop: '5px',
    color: 'black',
    fontSize: '10px',
  },
  addressLabelyello: {
    marginTop: '20px',
    color: 'black',
    fontSize: '15px',
  },
};