import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { DashboardProvider } from "./context/DashboardContext";

const App = () => {
  return (
    <DashboardProvider>
      <div className="w-screen h-screen relative bg-blue-50 overflow-x-hidden">
        <Navbar />
        <Dashboard />
      </div>
    </DashboardProvider>
  );
};

export default App;
