import React from "react";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import makeBlockie from "ethereum-blockies-base64";

const ConnectedWalletAvatar = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ address });

  return (
    <div className="avatar">
      <div className="w-12 rounded-full">
        {address && (
          <img
            src={ensAvatar ?? makeBlockie(address)}
            alt={`Avatar for wallet address ${address}`}
          />
        )}
      </div>
    </div>
  );
};

export default ConnectedWalletAvatar;
