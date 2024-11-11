// pages/Settings.tsx


import levelConfig from "@/config/level-config";
import MetaMaskConnectButton from '@/components/metamaskwallet';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';


// ProjectId and Metadata
const projectId = '2d971f7eeae877834f21751f580991e1'
const metadata = {
  name: 'XEER',
  description: 'Wallet Connect',
  url: 'https://aarmascan.com/',
  icons: ['https://aarmascan.com/assets/configs/network_logo.svg'],
}



function XeerWallet() {



  
  return (

<TonConnectUIProvider manifestUrl='https://drive.google.com/file/d/1MinW84e3-irjZ5J4kykoqGv44qGfgo2L/view?usp=sharing' 

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
      appName: "nicegramWallet",
      name: "Nicegram Wallet",
      imageUrl: "https://static.nicegram.app/icon.png",
      aboutUrl: "https://nicegram.app",
      universalLink: "https://nicegram.app/tc",
      deepLink: "nicegram-tc://",
      jsBridgeKey: "nicegramWallet",
      bridgeUrl: "https://bridge.tonapi.io/bridge",
      platforms: ["ios", "android"]
    },
    {
      appName: "tokenpocket",
      name: "TokenPocket",
      imageUrl: "https://hk.tpstatic.net/logo/tokenpocket.png",
      aboutUrl: "https://tokenpocket.pro",
      jsBridgeKey: "tokenpocket",
      platforms: ["ios", "android"]
    },
    {
      appName: "dewallet",
      name: "DeWallet",
      imageUrl: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
      aboutUrl: "https://delabwallet.com",
      universalLink: "https://t.me/dewallet?attach=wallet",
      bridgeUrl: "https://bridge.dewallet.pro/bridge",
      platforms: ["ios", "android", "macos", "windows", "linux"]
    },
    {
      appName: "BitgetWeb3",
      name: "BitgetWeb3",
      imageUrl: "https://img.bitgetimg.com/image/third/1723701408284.png",
      aboutUrl: "https://www.bitget.com",
      universalLink: "https://t.me/BitgetOfficialBot?attach=wallet",
      bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
      platforms: ["ios", "android", "windows", "macos", "linux"]
    },
    {
      appName: "cdcTonWallet",
      name: "Crypto.com DeFi Wallet",
      imageUrl: "https://apro-ncw-api-file.crypto.com/wallet/logo",
      aboutUrl: "https://crypto.com/defi-wallet",
      universalLink: "https://wallet.crypto.com/deeplink/ton-connect",
      deepLink: "dfw://",
      jsBridgeKey: "cdcTonWallet",
      bridgeUrl: "https://wallet.crypto.com/sse/tonbridge",
      platforms: ["ios", "android", "chrome"]
    },
    {
      appName: "tobi",
      name: "Tobi",
      imageUrl: "https://app.tobiwallet.app/icons/logo.png",
      aboutUrl: "https://tobi.fun",
      universalLink: "https://t.me/TobiCopilotBot?attach=wallet",
      bridgeUrl: "https://ton-bridge.tobiwallet.app/bridge",
      platforms: ["ios", "android", "macos", "windows", "linux"]
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
    {
      appName: "bitgetWalletLite",
      name: "Bitget Wallet Lite",
      imageUrl: "https://raw.githubusercontent.com/bitgetwallet/download/main/logo/png/bitget_wallet_lite_logo.png",
      aboutUrl: "https://web3.bitget.com",
      universalLink: "https://t.me/BitgetWallet_TGBot?attach=wallet",
      bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
      platforms: ["ios", "android", "macos", "windows", "linux"]
    },
    {
      appName: "onekey",
      name: "OneKey",
      imageUrl: "https://common.onekey-asset.com/logo/onekey-x288.png",
      aboutUrl: "https://onekey.so",
      jsBridgeKey: "onekeyTonWallet",
      platforms: ["chrome"]
    }
  ]
}}
actionsConfiguration={{
  twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start'
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
