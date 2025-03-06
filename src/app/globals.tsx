import Artwork from "../app/components/models/Artwork";

export enum TAG {
  ALL = "all",
  ILLUSTRATION = "illustration",
  BRANDING = "branding",
  INTERACTION = "interaction design",
  MOTION = "motion design",
  PRINT = "print design",
  PLAY = "play",
}


/**
 * key is the path for the specific page
 * URL
 * title
 * subtitle
 * thumbnail image path
 * tags
 * pdf
 * text (JSX format)
 */
export const FAUX_FLORIDA = new Artwork(
  "/clovervalley",
  "Clover Valley",
  "Magazine Spread",
  "/thumbnails/CloverValley.png",
  [TAG.PRINT],
  "/pdfs/CloverValley.pdf"
);

export const DOTNDONE = new Artwork(
  "/dotndone",
  "Dot & Done",
  "Organizational Kit",
  "/thumbnails/DotnDone.png",
  [TAG.INTERACTION, TAG.PRINT, TAG.BRANDING],
  "/pdfs/DotnDone.pdf",
  (
    <p>
      Dot & Done is a task management tool designed for individuals with ADHD.
      It features a sticky note pad with perforated dots that users punch out
      after completing tasks, which can be collected in a bottle as a reward.
      Over 12 days, the sticky notes reveal a pixel art picture when placed on a
      wall, turning organization into a fun and visually satisfying experience.
      By combining functionality with gamification, Dot and Done encourages
      consistency without the pressure of a traditional calendar.
    </p>
  )
);

export const SOLUNA = new Artwork(
  "/soluna",
  "Soluna",
  "Brand Identity",
  "/thumbnails/Soluna.png",
  [TAG.BRANDING],
  "/pdf/Soluna.pdf"
);

export const KISUI_TECH_FLYER = new Artwork(
  "/kisuitech",
  "Kisui Tech",
  "Flyer",
  "/thumbnails/KisuiTech.png",
  [TAG.PRINT],
  "/pdf/KisuiTech.pdf"
);

export const MUSIC_THEORY_CAT = new Artwork(
  "/remi",
  "Remi",
  "The Musical Cat",
  "/thumbnails/Remi.png",
  [TAG.ILLUSTRATION],
  "/pdf/Remi.pdf"
);
export const DESIGN_HERO = new Artwork(
  "/designhero",
  "Design Hero",
  "Project",
  "/thumbnails/CarolynHawkins.png",
  [TAG.MOTION],
  "/pdf/CarolynHawkins.pdf"
);

export const FETZ_OTTO_SWIMWEAR = new Artwork(
  "/fetzotto",
  "Fetz Otto",
  "Swimwear Brand",
  "/thumbnails/FetzOtto.png",
  [TAG.BRANDING],
  "/pdfs/FetzOtto.pdf",
  (
    <p>
      Fetz Otto Swimwear is a luxury brand blending beauty, detail, and comfort,
      designed for women in their 20s to 40s who value quality over price.
      <br />
      <br />
      This project focused on creating a cohesive identity with a wave inspired
      logo, elegant typography, and a refined color palette, as well as
      Instagram post mockups and business cards, capturing the brand&apos;s vibrant
      yet sophisticated essence.
    </p>
  )
);

export const RAW_EDGE = new Artwork(
  "/rawedge",
  "Raw Edge",
  "Mending Workshop",
  "/thumbnails/RawEdge.png",
  [TAG.MOTION],
  "/pdf/RawEdge.pdf"
);

export const MINDFULL = new Artwork(
  "/mindfull",
  "Mindfull",
  "Game Concept",
  "/thumbnails/Mindfull.png",
  [TAG.MOTION],
  "/pdf/Mindfull.pdf"
);

export const NAVIREADER = new Artwork(
  "/navireader",
  "NaviReader",
  "Reading Tool",
  "/thumbnails/NaviReader.png",
  [TAG.MOTION],
  "/pdf/NaviReader.pdf"
);

export const ELECTROPHYSICS = new Artwork(
  "/electrophysics",
  "Electrophysics",
  "Motion Graphic",
  "/thumbnails/Electrophysics.gif",
  [TAG.MOTION],
  ""
);

export const artworks: Array<Artwork> = [
  DOTNDONE,
  NAVIREADER,
  RAW_EDGE,
  FETZ_OTTO_SWIMWEAR,
  SOLUNA,
  MINDFULL,
  KISUI_TECH_FLYER,
  FAUX_FLORIDA,
  MUSIC_THEORY_CAT,
  ELECTROPHYSICS,
  DESIGN_HERO,
];
