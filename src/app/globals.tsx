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
  "/fauxflorida",
  "FAUX FLORIDA",
  "Project",
  "/thumbnails/CloverValley.png",
  [TAG.PRINT],
  "/pdf/CloverValley.pdf"
);

export const DOTNDONE = new Artwork(
  "/dotndone",
  "DOT & DONE",
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
  "SOLUNA",
  "Project",
  "/thumbnails/Soluna.png",
  [TAG.BRANDING],
  "/pdf/Soluna.pdf"
);

export const KISUI_TECH_FLYER = new Artwork(
  "/kisuitechflyer",
  "KISUI TECH FLYER",
  "Project",
  "/thumbnails/KisuiTech.png",
  [TAG.PRINT],
  "/pdf/KisuiTech.pdf"
);

export const MUSIC_THEORY_CAT = new Artwork(
  "/musictheorycat",
  "MUSIC THEORY CAT",
  "Project",
  "/thumbnails/Remi.png",
  [TAG.ILLUSTRATION],
  "/pdf/Remi.pdf"
);
export const DESIGN_HEROS = new Artwork(
  "/designheros",
  "DESIGN HEROS",
  "Project",
  "/thumbnails/CarolynHawkins.png",
  [TAG.MOTION],
  "/pdf/CarolynHawkins.pdf"
);

export const FETZ_OTTO_SWIMWEAR = new Artwork(
  "/fetzotto",
  "FETZ OTTO",
  "Swimwear",
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
  "RAW EDGE",
  "Mending Workshop",
  "/thumbnails/RawEdge.png",
  [TAG.MOTION],
  "/pdf/RawEdge.pdf"
);

export const MINDFULL = new Artwork(
  "/mindfull",
  "MINDFULL",
  "Game Concept",
  "/thumbnails/Mindfull.png",
  [TAG.MOTION],
  "/pdf/Mindfull.pdf"
);

export const NAVIREADER = new Artwork(
  "/navireader",
  "NAVIREADER",
  "Reading Tool",
  "/thumbnails/NaviReader.png",
  [TAG.MOTION],
  "/pdf/NaviReader.pdf"
);

export const ELECTROPHYSICS = new Artwork(
  "/electrophysics",
  "ELECTROPHYSICS",
  "Motion Graphic",
  "/thumbnails/Electrophysics.png",
  [TAG.MOTION],
  ""
);

export const artworks: Array<Artwork> = [
  DESIGN_HEROS,
  FAUX_FLORIDA,
  FETZ_OTTO_SWIMWEAR,
  KISUI_TECH_FLYER,
  MUSIC_THEORY_CAT,
  SOLUNA,
  DOTNDONE,
  RAW_EDGE,
  MINDFULL,
  NAVIREADER,
  ELECTROPHYSICS,
];
