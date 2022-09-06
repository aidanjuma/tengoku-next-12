import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { META } from "@consumet/extensions";
import { ISearch, IAnimeResult } from "@consumet/extensions/dist/models";
import { useDebounce } from "@hooks/useDebounce";

const QuickSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IAnimeResult[]>([]);
  const [isSearching, setSearching] = useState<boolean>(false);

  // Latest value: if user stops input within 500ms, fire search call.
  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    const anilist = new META.Anilist();
    if (debouncedSearchTerm) {
      setSearching(true);
      anilist
        .search(debouncedSearchTerm)
        .then((data: ISearch<IAnimeResult>) => {
          setSearchResults(data.results);
          setSearching(false);
          data.results.length != 0 ? showSearchResults() : hideSearchResults();
        });
    } else {
      hideSearchResults();
      setSearchResults([]);
      setSearching(false);
    }
  }, [debouncedSearchTerm]);

  const hideQuickSearch = () => {
    const quickSearch = document.getElementById("quick-search");
    // Remove scroll lock, hide Quick Search, and reset results/query.
    document.body.classList.remove("overflow-hidden");
    quickSearch?.classList.add("hidden");
    quickSearch?.classList.remove("flex", "justify-center");
    resetQuickSearch();
  };

  const showSearchResults = () => {
    const resultsDisplay = document.getElementById("quick-search-results");
    resultsDisplay?.classList.remove("hidden");
    resultsDisplay?.classList.add("grid");
  };

  const hideSearchResults = () => {
    const resultsDisplay = document.getElementById("quick-search-results");
    resultsDisplay?.classList.remove("grid");
    resultsDisplay?.classList.add("hidden");
  };

  const resetQuickSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div
      id="quick-search"
      className="w-full h-full fixed z-[9999] hidden bg-grayedOut"
    >
      <div className="grid quick-search-bar items-center justify-center py-4 rounded-md absolute top-36 md:top-48 lg:top-56 bg-white text-grayedOut">
        <MagnifyingGlassIcon className="w-6 h-6 ml-3 mr-6" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          className="w-full sm:w-96 focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <XMarkIcon
          className="w-6 h-6 ml-6 mr-3 transition-all hover:cursor-pointer hover:text-pastelRed"
          onClick={hideQuickSearch}
        />
      </div>
      <div
        id="quick-search-results"
        className="hidden grid-cols-1 mt-48 lg:mt-64 mb-[20vh] px-[8.7rem] sm:px-[15.4rem] rounded-b bg-white"
      ></div>
    </div>
  );
};

export default QuickSearch;
