import React, {useState} from 'react';

const Filters = ({ onFilterChange }: { onFilterChange: (filter:string) => void }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const handleFilterClick = (filter:string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="text-black font-sans leading-extraloose">
      <ul className = "space-y-4">
        <li><br /><br /></li>
        {["all", "branding", "print", "motion", "illustration"].map(
          (filter, index) => (
            <li 
              key={index}
            className = "uppercase tracking-18 text-green"
            >
              <span onClick={() => handleFilterClick(filter)} className="relative inline-block cursor-pointer">
              <div className="text-green tracking-18 relative z-10">
                {filter}
              </div>
              {activeFilter === filter && (
              <div className="absolute bottom-1 left-auto right-auto w-full h-2 bg-rose z-0"></div>
          )}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Filters;
