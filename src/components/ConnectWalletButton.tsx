import { useAccount, useConnect, useEnsAvatar, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import ConnectedWalletAvatar from "@/components/ConnectedWalletAvatar";

const ConnectWalletButton = () => {
  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  if (isConnected) {
    return <ConnectedWalletAvatar />;
  }

  return <button onClick={() => connect()}>Connect Wallet</button>;
};

export default ConnectWalletButton;
