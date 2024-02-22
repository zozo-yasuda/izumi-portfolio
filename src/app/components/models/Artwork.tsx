
export class Artwork {
  key: number;
  alt: string;
  descAlt: string;
  thumbnail: string;
  desc: string;
  tags: Set<String>;
  width: number = 249;
  height: number = 249;

  constructor(key: number, alt: string, descAlt: string, thumbnail: string, desc: string, tags: String[]=[]) {
    this.key = key;
    this.alt = alt;
    this.descAlt = descAlt;
    this.thumbnail = thumbnail;
    this.desc = desc;
    this.tags = new Set(tags);
  }

}


export default Artwork;
