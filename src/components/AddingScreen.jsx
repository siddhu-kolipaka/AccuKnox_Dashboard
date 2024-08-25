import { useContext, useState } from "react";
import AddWidget from "./AddWidget";
import { DashboardContext } from "../context/DashboardContext";
import { IoMdClose } from "react-icons/io";

const AddingScreen = () => {
  const [tabno, settabno] = useState(0);
  const { categories, removeWidget, addWidget, handleSignal0 } =
    useContext(DashboardContext);

  const handleTabs = (num) => {
    settabno(num - 1);
  };
  const handleRem = (categoryId, widgetId) => {
    removeWidget(categoryId, widgetId);
  };

  return (
    <>
      <div className="w-[50vw] h-[90vh] mt-16 right-0 absolute z-10 bg-white border-blue-950 border-2">
        <div className="p-2 pr-6 flex justify-between bg-blue-900">
          <div className="text-white">Add Widget</div>
          <button className="place-content-center" onClick={handleSignal0}>
            <IoMdClose className="text-white" />
          </button>
        </div>
        <div className="p-2 pr-6 h-[85%] flex flex-col justify-between ">
          <div>
            <div>Personalise your dashboard by adding widgets</div>
            <div className="py-2 ">
              <div className="flex gap-2 ">
                {categories.map((category) => (
                  <div key={category.id}>
                    <button
                      className={`${
                        tabno === category.id - 1 &&
                        "text-blue-950 border-b-2 border-blue-950"
                      }`}
                      onClick={() => {
                        handleTabs(category.id);
                      }}
                    >
                      {category.tab_name}
                    </button>
                  </div>
                ))}
              </div>

              <div className="py-2">
                <div className="flex flex-col gap-2 h-[300px] overflow-y-auto">
                  {categories[tabno].widgets.length > 0 ? (
                    categories[tabno].widgets.map((widget) => (
                      <div
                        className="border-2 p-2 rounded-md flex justify-between"
                        key={`A${widget.id}`}
                      >
                        <div className="w-[350px] overflow-clip text-wrap">
                          {widget.name}
                        </div>
                        <button
                          onClick={() => {
                            handleRem(tabno + 1, widget.id);
                          }}
                        >
                          remove
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No widgets found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 border-t-2  border-blue-950 flex justify-between">
            <AddWidget
              categoryId={categories[tabno].id}
              addWidget={addWidget}
            />
            <div className="px-2 flex items-end gap-2 content-end">
              <button
                className="w-28 h-12 p-2 border-2 border-blue-950 rounded-md font-semibold text-blue-950"
                onClick={handleSignal0}
              >
                Cancel
              </button>
              <button
                className="w-28 h-12 p-2 border-2 border-blue-950 bg-blue-950 text-white rounded-md font-semibold"
                onClick={handleSignal0}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddingScreen;
