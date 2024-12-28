import React, { ReactElement } from "react";

/**
 * key
 * title
 * subtitle
 * thumbnail
 * tags
 * pdf
 * text
 */
export class Artwork {
  key: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  tags: Set<String>;
  pdf: string;
  text: ReactElement;
  width: number = 249;
  height: number = 249;

  constructor(
    key: string,
    title: string,
    subtitle: string,
    thumbnail: string,
    tags: String[] = [],
    pdf: string,
    text: ReactElement = <></>
  ) {
    this.key = key;
    this.title = title;
    this.subtitle = subtitle;
    this.thumbnail = thumbnail;
    this.tags = new Set(tags);
    this.pdf = pdf;
    this.text = text;
  }
}

export default Artwork;
