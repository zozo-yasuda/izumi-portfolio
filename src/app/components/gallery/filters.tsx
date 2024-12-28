import React, { useState } from "react";
import { TAG } from "@/app/globals";

const Filters = ({
  onFilterChange,
}: {
  onFilterChange: (filter: string) => void;
}) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const filterItems = Object.values(TAG).map((filter, index) => (
    <li key={index} className="uppercase tracking-18 text-grey p-1 sm:p-2">
      <span
        onClick={() => handleFilterClick(filter)}
        className="relative inline-block cursor-pointer"
      >
        {activeFilter === filter ? (
          <div className="text-red tracking-18 relative z-10 text-xs sm:text-sm b-2 b-offwhite">
            {filter}
          </div>
        ) : (
          <div className="text-offblack tracking-18 relative z-10 text-xs sm:text-sm b-2 b-offwhite">
            {filter}
          </div>
        )}
        {/*activeFilter === filter && (
          <div className="absolute bottom-1 left-auto right-auto w-full h-2 sm:h-1 bg-rose z-0"></div>
        )*/}
      </span>
    </li>
  ));

  return (
    <aside className="font-sans leading-extraloose p-2">
      <ul className="text-xs flex flex-row flex-wrap justify-center sm:flex-col">
        {filterItems}
      </ul>
    </aside>
  );
};

export default Filters;
