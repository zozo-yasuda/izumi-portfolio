const React = require("react");

const Filters = () => {
  return (
    <div className="text-black font-sans leading-extraloose">
      <ul>
        {["ALL", "BRANDING", "PRINT", "MOTION", "ILLUSTRATION"].map(
          (filter, index) => (
            <li key={index}>{filter}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Filters;
