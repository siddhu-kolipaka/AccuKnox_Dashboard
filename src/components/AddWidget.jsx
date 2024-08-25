/* eslint-disable react/prop-types */
import { useState } from "react";

const AddWidget = ({ categoryId, addWidget }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    addWidget(categoryId, newWidget);
    setWidgetName("");
    setWidgetText("");
  };

  return (
    <>
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <div className="py-2">Add another widget</div>
        <input
          className="w-60 h-8 px-2 bg-blue-50 border-2 border-blue-300 rounded-md"
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          placeholder="Widget Name"
          required
        />
        <input
          className="w-60 h-8  px-2 bg-blue-50 border-2 border-blue-300 rounded-md"
          type="text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          placeholder="Widget Text"
          required
        />
        <button
          className="w-60 h-8  px-2 text-start bg-blue-950  rounded-md text-white font-bold"
          type="submit"
        >
          + Add Widget
        </button>
      </form>
    </>
  );
};

export default AddWidget;
