import React, { useState } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const MetaMaskConnectButton: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    const provider = new WalletConnectProvider({
      infuraId: "https://network1rpc.com",
    });


    await provider.enable();

    const web3 = new Web3(provider);
    setWeb3(web3);

    provider.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
      setAccount(accounts[0]);
    });

    provider.on("chainChanged", (chainId: number) => {
      console.log(chainId);
    });

    provider.on("disconnect", (code: number, reason: string) => {
      console.log(code, reason);
      setWeb3(null);
    });
  };

  return (
    <div>
      <button onClick={connectWallet} disabled={!!web3}>
        Connect MetaMask
      </button>
      {account && <p>Connected account: {account}</p>}
    </div>
  );
};

export default MetaMaskConnectButton;
