import ConnectWalletButton from "@/components/ConnectWalletButton";

const Navbar = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Mint Starter</a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end mr-2">
        <ConnectWalletButton />
      </div>
    </div>
  </div>
);

export default Navbar;
