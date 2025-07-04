import { useConnectWallet, useWallets } from "@mysten/dapp-kit";
import { useState } from "react";

const WalletLogin = () => {
  const { mutate: connect } = useConnectWallet();
  const wallets = useWallets();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (wallet: any) => {
    setIsLoading(true);
    connect(
      { wallet: wallet },
      {
        onSuccess: (wal) => {
          console.log(wal);
          setIsLoading(false);
        },
        onError: (e) => {
          console.log(e);
          setIsLoading(false);
        },
      }
    );
  };

  return isLoading ? (
    <>Loading..</>
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border border-black p-2 w-1/2 h-1/2 rounded-3xl flex flex-col gap-2 items-center justify-center">
        {wallets &&
          wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => handleLogin(wallet)}
              className="border border-black p-2 w-1/2 rounded-2xl hover:cursor-pointer hover:bg-amber-200"
            >
              {wallet.name === "Slush" ? "Connect Wallet" : wallet.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default WalletLogin;
