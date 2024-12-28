import Artwork from "../app/components/models/Artwork";

export enum TAG {
  ALL = "all",
  GRAPHIC_DESIGN = "graphic design",
  ILLUSTRATIONS = "illustrations",
  MISC = "misc",
}

/**
 * key is the path for the specific page
 */
export const FAUX_FLORIDA = new Artwork(
  "/fauxflorida",
  "FAUX FLORIDA",
  "Project",
  "/thumbnails/tn1.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);

export const SOLUNA = new Artwork(
  "/soluna",
  "SOLUNA",
  "Project",
  "/thumbnails/tn2.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);

export const KISUI_TECH_FLYER = new Artwork(
  "/kisuitechflyer",
  "KISUI TECH FLYER",
  "Project",
  "/thumbnails/tn3.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);
export const AKM_30 = new Artwork(
  "/akm30",
  "AKM 30",
  "Project",
  "/thumbnails/tn4.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);
export const MUSIC_THEORY_CAT = new Artwork(
  "/musictheorycat",
  "MUSIC THEORY CAT",
  "Project",
  "/thumbnails/tn5.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);
export const DESIGN_HEROS = new Artwork(
  "/designheros",
  "DESIGN HEROS",
  "Project",
  "/thumbnails/tn6.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);
export const FETZ_OTTO_SWIMWEAR = new Artwork(
  "/fetzottoswimwear",
  "FETZ OTTO",
  "Swimwear",
  "/thumbnails/tn7.png",
  [TAG.GRAPHIC_DESIGN],
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
  [TAG.GRAPHIC_DESIGN],
  "/pdfs/FetzOtto (1).pdf"
);
export const FETZ_OTTO_DAYCARE = new Artwork(
  "/fetzottodaycare",
  "FETZ OTTO DAYCARE",
  "Project",
  "/thumbnails/tn9.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);
export const SWEET_SKETCH = new Artwork(
  "/sweetsketch",
  "SWEET SKETCH",
  "Project",
  "/thumbnails/tn10.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);
export const IZUMI_YASUDA = new Artwork(
  "/izumiyasuda",
  "IZUMI YASUDA",
  "Project",
  "/thumbnails/tn11.png",
  [TAG.GRAPHIC_DESIGN],
  ""
);
