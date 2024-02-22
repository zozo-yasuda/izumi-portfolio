import React, {useState} from 'react';

const Filters = ({ onFilterChange }: { onFilterChange: (filter:string) => void }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const handleFilterClick = (filter:string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="text-black font-sans leading-extraloose">
      <ul>
        {["all", "branding", "print", "motion", "illustration"].map(
          (filter, index) => (
            <li 
              key={index} 
              onClick={() => handleFilterClick(filter)}
              style={{ cursor: 'pointer', color: activeFilter === filter ? 'pink' : 'black' }}
            className = "uppercase"
            >
              {filter}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Filters;
