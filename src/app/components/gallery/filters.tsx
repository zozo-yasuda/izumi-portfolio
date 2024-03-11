import React, {useState} from 'react';

const filterTags = ["all", "branding", "print", "motion", "marketing","illustration"];

const Filters = ({ onFilterChange }: { onFilterChange: (filter:string) => void }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter:string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const filterItems = (
    filterTags.map(
      (filter, index) => (
        <li 
          key={index}
          className = "uppercase tracking-18 text-green p-2"
        >
          <span onClick={() => handleFilterClick(filter)} className="relative inline-block cursor-pointer">
          <div className="text-green tracking-18 relative z-10 text-xs sm:text-sm px-2">
            {filter}
          </div>
          {activeFilter === filter && (
          <div className="absolute bottom-1 left-auto right-auto w-full h-2 bg-rose z-0"></div>
          )}
          </span>
        </li>
      )
  )
  );
    
  return (
    <aside className="font-sans leading-extraloose p-2">
              <ul className="text-xs flex flex-row flex-wrap sm:flex-col">
                {filterItems}
              </ul>
    </aside>
  );
};

export default Filters;
