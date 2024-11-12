import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";






export const TONWALLET = () => {

    return (
        <TonConnectUIProvider manifestUrl="https://azure-immense-aardvark-399.mypinata.cloud/ipfs/QmXja7fyHYqaRM7HYrzMPpXPoJmsZP1voUywLG8qigXtZQ">
           <TonConnectButton></TonConnectButton>
        </TonConnectUIProvider>
    );
};



export default TONWALLET;
