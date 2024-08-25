import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useContext(DashboardContext);

  return (
    <nav className="w-screen p-2 px-8 flex absolute z-50 justify-between content-center bg-white">
      <div className="flex justify-between content-center gap-4">
        <h1 className="text-blue-950 font-bold place-content-center">
          Dashboard
        </h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search widgets..."
          className="w-80 px-2 border-blue-300 border-2 rounded-md bg-blue-100"
        />
      </div>
      <div className="flex content-center gap-2">
        <div>
          <CgProfile className="text-4xl" />
        </div>
        <div className="place-content-center"> Profile</div>
      </div>
    </nav>
  );
};

export default Navbar;
