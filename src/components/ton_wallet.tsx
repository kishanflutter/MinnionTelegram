import { useTonWallet } from '@tonconnect/ui-react';

export const TonWallet = () => {
  const wallet = useTonWallet();

  return (
    wallet && (
      <div>
        <span>Connected wallet address: {wallet.account.address}</span>
        <span>Device: {wallet.device.appName}</span>
        <span>Connected via: {wallet.provider}</span>

        <div>Connected wallet info:</div>
       
      </div>
    )
  );
};
