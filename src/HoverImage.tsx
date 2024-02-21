import React from "react";
import Image from "next/image";

class HoverableImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }
  state = {
    isHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;
    const { src, alt, ...rest } = this.props;

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Image
          src={isHovered ? "path/to/hovered-image.jpg" : src}
          alt={alt}
          {...rest}
        />
      </div>
    );
  }
}

export default HoverableImage;
