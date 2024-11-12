// pages/Settings.tsx


import levelConfig from "@/config/level-config";
//import MetaMaskConnectButton from '@/components/metamaskwallet';
import { THEME, TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';


// ProjectId and Metadata
// const projectId = '2d971f7eeae877834f21751f580991e1'
// const metadata = {
//   name: 'XEER',
//   description: 'Wallet Connect',
//   url: 'https://aarmascan.com/',
//   icons: ['https://aarmascan.com/assets/configs/network_logo.svg'],
// }



function XeerWallet() {



  
  return (

<TonConnectUIProvider manifestUrl='https://minnion-telegram-iroa.vercel.app/tonconnect-manifest.json' 
uiPreferences={{ theme: THEME.LIGHT }}
walletsListConfiguration={{
  includeWallets: [
    {
      appName: "tonwallet",
      name: "TON Wallet",
      imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
      aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
      universalLink: "https://wallet.ton.org/ton-connect",
      jsBridgeKey: "tonwallet",
      bridgeUrl: "https://bridge.tonapi.io/bridge",
      platforms: ["chrome", "android"]
    },
    {
      appName: "trustwalletTon",
      name: "Trust",
      imageUrl: "https://assets-cdn.trustwallet.com/dapps/trust.logo.png",
      aboutUrl: "https://trustwallet.com/about-us",
      bridgeUrl: "https://tonconnect.trustwallet.com/bridge",
      jsBridgeKey: "trustwalletTon",
      platforms: ["chrome", "ios", "android"]
    },
   
   
  ]
}}
actionsConfiguration={{
  twaReturnUrl: 'https://t.me/XeerMoobilebot'
}}

>





    <div
    className="flex-1 px-5 pb-20 bg-center bg-cover"
    style={{
      backgroundImage: `url(${levelConfig.bg[1]})`,
    }}
  >
    <div className="flex flex-col flex-1 w-full h-full px-6 py-8 pb-24 mt-12">
      <img
        src="/images/AIRDROP.png"
        alt="coins-3"
        className="object-contain w-32 h-32 mx-auto"
       
      />
      <h1 className="mt-4 text-2xl font-bold text-center uppercase" >
        AirDrop123
      </h1>

   
 <TonConnectButton>
  
 </TonConnectButton>
     
     
    
      {/* <MetaMaskConnectButton /> */}
      {/* <w3m-button /> */}

        {/* <button style={styles.button} onClick={handleConnectWallet}>
          Connect Wallet
        </button> */}
        {/* <button style={styles.button} onClick={() => open({ view: 'Networks' })}>
          Open Network 
        </button> */}

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
    </TonConnectUIProvider>
  );
 
}

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

export default XeerWallet;
