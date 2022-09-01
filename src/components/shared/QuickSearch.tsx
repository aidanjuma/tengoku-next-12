import React from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

const QuickSearch = () => (
  <div
    id="quick-search"
    className="w-full h-full fixed z-[9999] hidden bg-grayedOut"
  >
    <div className="grid search-bar items-center justify-center py-4 rounded-md absolute top-36 bg-white text-grayedOut">
      <MagnifyingGlassIcon className="w-6 h-6 ml-3 mr-6" />
      <input
        id="quick-search-value"
        type="text"
        placeholder="Search..."
        className="w-full sm:w-96 focus:outline-none"
      />
      <XMarkIcon
        className="w-6 h-6 ml-6 mr-3 transition-all hover:cursor-pointer hover:text-lightBlue"
        onClick={hideQuickSearch}
      />
    </div>
  </div>
);

const hideQuickSearch = () => {
  const quickSearch = document.getElementById("quick-search");
  // Remove scroll lock, hide Quick Search...
  document.body.classList.remove("overflow-hidden");
  quickSearch?.classList.add("hidden");
  quickSearch?.classList.remove("flex", "justify-center");
};

export default QuickSearch;
