import WalletLogin from "@/components/WalletLogin";
import { useCurrentAccount, useDisconnectWallet } from "@mysten/dapp-kit";

function App() {
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();
  console.log(currentAccount);
  return currentAccount ? (
    <div className="flex flex-col items-center justify-center">
      <div>Wallet Address: {currentAccount.address}</div>
      <button
        className="border border-black p-1 rounded-sm hover:cursor-pointer"
        onClick={() => disconnect()}
      >
        Logout
      </button>
    </div>
  ) : (
    <WalletLogin />
  );
}

export default App;
