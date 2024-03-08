import React, {useState,useEffect} from 'react';

const Filters = ({ onFilterChange }: { onFilterChange: (filter:string) => void }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter:string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const [fontSize, setFontSize] = useState('16px');
  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth > 768 ? '16px' : '12px');
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
  return (
    <aside className="p-6 text-black font-sans leading-extraloose">
      <ul className = "space-y-4">
        {["all", "branding", "print", "motion", "marketing","illustration"].map(
          (filter, index) => (
            <li 
              key={index}
            className = "uppercase tracking-18 text-green"
            >
              <span onClick={() => handleFilterClick(filter)} className="relative inline-block cursor-pointer">
              <div className="text-green tracking-18 relative z-10" style={{ fontSize: fontSize }}>
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
    </aside>
  );
};

export default Filters;
