/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { dashboardData } from "../utils/widgetdata";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(dashboardData.categories);
  const [searchQuery, setSearchQuery] = useState("");

  const addWidget = (categoryId, widget) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  const [signal, setsignal] = useState("off");

  const handleSignal1 = () => {
    setsignal("on");
  };

  const handleSignal0 = () => {
    setsignal("off");
  };

  return (
    <DashboardContext.Provider
      value={{
        categories: filteredCategories,
        addWidget,
        removeWidget,
        searchQuery,
        setSearchQuery,
        signal,
        handleSignal1,
        handleSignal0,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
