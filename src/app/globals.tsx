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
  "/thumbnails/tn1.png",
  [TAG.PRINT],
  ""
);

export const EXAMPLE = new Artwork(
  "/example",
  "FAUX FLORIDA",
  "Project",
  "/thumbnails/tn1.png",
  [TAG.PRINT, TAG.BRANDING],
  ""
);

export const SOLUNA = new Artwork(
  "/soluna",
  "SOLUNA",
  "Project",
  "/thumbnails/tn2.png",
  [TAG.BRANDING],
  ""
);

export const KISUI_TECH_FLYER = new Artwork(
  "/kisuitechflyer",
  "KISUI TECH FLYER",
  "Project",
  "/thumbnails/tn3.png",
  [TAG.PRINT],
  ""
);
export const AKM_30 = new Artwork(
  "/akm30",
  "AKM 30",
  "Project",
  "/thumbnails/tn4.png",
  [TAG.PRINT, TAG.BRANDING],
  ""
);
export const MUSIC_THEORY_CAT = new Artwork(
  "/musictheorycat",
  "MUSIC THEORY CAT",
  "Project",
  "/thumbnails/tn5.png",
  [TAG.ILLUSTRATION],
  ""
);
export const DESIGN_HEROS = new Artwork(
  "/designheros",
  "DESIGN HEROS",
  "Project",
  "/thumbnails/tn6.png",
  [TAG.MOTION],
  ""
);
export const FETZ_OTTO_SWIMWEAR = new Artwork(
  "/fetzottoswimwear",
  "FETZ OTTO",
  "Swimwear",
  "/thumbnails/tn7.png",
  [TAG.BRANDING],
  "/pdfs/FetzOtto (1).pdf",
  (
    <p>
      Fetz Otto Swimwear is a luxury brand blending beauty, detail, and comfort,
      designed for women in their 20s to 40s who value quality over price.
      <br />
      <br />
      This project focused on creating a cohesive identity with a wave inspired
      logo, elegant typography, and a refined color palette, as well as
      Instagram post mockups and business cards, capturing the brand's vibrant
      yet sophisticated essence.
    </p>
  )
);
export const THE_RABBIT_HOLE = new Artwork(
  "/therabbithole",
  "THE RABBIT HOLE",
  "Project",
  "/thumbnails/tn8.png",
  [TAG.MOTION, TAG.BRANDING, TAG.PRINT],
  "/pdfs/FetzOtto (1).pdf"
);
export const FETZ_OTTO_DAYCARE = new Artwork(
  "/fetzottodaycare",
  "FETZ OTTO DAYCARE",
  "Project",
  "/thumbnails/tn9.png",
  [],
  ""
);
export const SWEET_SKETCH = new Artwork(
  "/sweetsketch",
  "SWEET SKETCH",
  "Project",
  "/thumbnails/tn10.png",
  [],
  ""
);
export const IZUMI_YASUDA = new Artwork(
  "/izumiyasuda",
  "IZUMI YASUDA",
  "Project",
  "/thumbnails/tn11.png",
  [],
  ""
);
