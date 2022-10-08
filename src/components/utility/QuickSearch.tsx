import React, { useEffect, useState } from "react";
import { META } from "@consumet/extensions";
import { ISearch, IAnimeResult } from "@consumet/extensions/dist/models";
import { useDebounce } from "@hooks/useDebounce";
import { SearchOutline, CloseOutline } from "@easy-eva-icons/react";
import QuickSearchItem from "@components/utility/QuickSearchItem";

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
    resultsDisplay?.classList.add("block");
  };

  const hideSearchResults = () => {
    const resultsDisplay = document.getElementById("quick-search-results");
    resultsDisplay?.classList.remove("block");
    resultsDisplay?.classList.add("hidden");
  };

  const resetQuickSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div id="quick-search" className="w-full h-full fixed z-30 hidden">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 content-none -z-20 bg-grayedOut"
        onClick={hideQuickSearch}
      />
      <div className="grid quick-search-bar items-center justify-center py-4 rounded-md absolute top-36 md:top-48 lg:top-56 z-30 bg-white text-grayedOut">
        <SearchOutline className="w-6 h-6 ml-3 mr-6" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          className="w-full sm:w-96 focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CloseOutline
          className="w-6 h-6 ml-6 mr-3 transition-all hover:cursor-pointer hover:text-pastelRed"
          onClick={hideQuickSearch}
        />
      </div>
      <div
        id="quick-search-results"
        className="hidden mt-48 lg:mt-64 mb-[20vh] w-[17.5rem] sm:w-[31rem] rounded-b bg-white"
      >
        <div className="h-full px-4 py-4 md:py-16 lg:py-8 items-center webkit-rm-scrollbar overflow-y-scroll text-grayedOut">
          {searchResults.map((item: IAnimeResult) => (
            <QuickSearchItem
              key={item.id}
              item={item}
              hideQuickSearch={hideQuickSearch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
