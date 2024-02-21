
export class Artwork {
  key: number;
  alt: string;
  descAlt: string;
  thumbnail: string;
  desc: string;
  width: number = 249;
  height: number = 249;

  constructor(key: number, alt: string, descAlt: string, thumbnail: string, desc: string) {
    this.key = key;
    this.alt = alt;
    this.descAlt = descAlt;
    this.thumbnail = thumbnail;
    this.desc = desc;

  }

}


export default Artwork;
