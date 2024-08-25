import { useContext } from "react";
import Widget from "./Widget";
import { DashboardContext } from "../context/DashboardContext";
import AddingScreen from "./AddingScreen";

const Dashboard = () => {
  const { categories, removeWidget, signal, handleSignal1 } =
    useContext(DashboardContext);

  return (
    <div className="absolute w-screen">
      {signal === "on" && <AddingScreen />}
      <div className="absolute z-0  p-12">
        <div className="pt-6 w-[90vw] flex justify-between items-center">
          <div className="font-semibold text-xl">CNAPP Dashboard</div>
          <button
            onClick={handleSignal1}
            className="p-2 bg-white rounded-lg border-blue-950 border-2"
          >
            + Add widget
          </button>
        </div>
        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <h2 className="pt-4 pb-2 font-semibold">{category.name}</h2>
              <div className=" flex  w-[1300px] justify-start items-center overflow-x-auto">
                {category.widgets.length > 0 ? (
                  category.widgets.map((widget) => (
                    <Widget
                      key={widget.id}
                      widget={widget}
                      categoryId={category.id}
                      removeWidget={removeWidget}
                    />
                  ))
                ) : (
                  <p className="p-2 mx-2 h-12 w-40 text-white rounded-lg bg-blue-950 place-content-center text-center">
                    No widgets found.
                  </p>
                )}
                {/* <AddWidget categoryId={category.id} addWidget={addWidget} /> */}
                <button
                  onClick={handleSignal1}
                  className="p-2 h-12 w-40 bg-white rounded-lg border-blue-950 border-2"
                >
                  + Add widget
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
