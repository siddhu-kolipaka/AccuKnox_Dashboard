/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const Widget = ({ widget, categoryId, removeWidget }) => {
  return (
    <div className=" mr-2 p-2 border-2 border-blue-950 bg-white rounded-lg ">
      <div className="flex justify-between">
        <h3 className="text-sm font-semibold w-[400px] overflow-x-clip text-wrap">
          {widget.name}
        </h3>
        <button onClick={() => removeWidget(categoryId, widget.id)}>
          <IoMdClose />
        </button>
      </div>
      <p className="text-sm w-[400px] h-[200px] grid place-items-center overflow-x-clip text-wrap">
        {widget.text}
      </p>
    </div>
  );
};

export default Widget;
