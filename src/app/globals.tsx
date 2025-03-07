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
  "/pdfs/CloverValley.pdf",
  (
    <p>
    Clover Valley is a fictional Florida town brought to life through two magazine spreads. Designed with a sepia-toned color palette, the spreads capture the town’s slow-paced charm, while the title, Escape to Clover Valley, uses expressive typography to evoke a light, airy atmosphere.
    </p>
  )
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
      Dot & Done is a task management tool designed for individuals with ADHD. Users punch out perforated dots on a sticky note pad after completing tasks, collecting them in a bottle as a reward. Over 12 days, the notes form a pixel art picture, turning organization into a fun, gamified experience.
      <br />
      <br />
      This work was exhibited at Ligature 34, a juried student exhibition held at the University of Florida’s School of Art and Art History.
    </p>
  )
);

export const SOLUNA = new Artwork(
  "/soluna",
  "Soluna",
  "Brand Identity",
  "/thumbnails/Soluna.png",
  [TAG.BRANDING],
  "/pdf/Soluna.pdf",
  (
    <p>
    Soluna is a brand identity concept for a fictional aromatherapy company inspired by the balance of the sun and moon. The logo, evoking a solar eclipse, is complemented by a deep blue and gold color palette, symbolizing harmony. Packaging mockups extend this theme, designed to transport users through scent—whether to tranquil woods, a mountain breeze, or a lavender field.
    </p>
  )
);

export const KISUI_TECH_FLYER = new Artwork(
  "/kisuitech",
  "Kisui Tech",
  "Flyer",
  "/thumbnails/KisuiTech.png",
  [TAG.PRINT],
  "/pdf/KisuiTech.pdf",
  (
    <p>
      Collaborating with Kisui Tech, a startup in Japan, I designed a flyer introducing their AI-powered agriculture robot, Adam. The flyer showcases the robot’s three movement modes and technical specifications, using Japanese typography to enhance clarity and accessibility for the target audience.
    </p>
  )
);

export const MUSIC_THEORY_CAT = new Artwork(
  "/remi",
  "Remi",
  "The Musical Cat",
  "/thumbnails/Remi.png",
  [TAG.ILLUSTRATION],
  "/pdf/Remi.pdf",
  (
    <p>
      Anisong, UF’s anime song ensemble club, features a rebranded logo and mascot. The logo, inspired by a snare drum, combines Japanese and English typography to form its shape. To introduce the rebrand, a short comic was released on social media featuring Remi, a musical black cat. Originally created for a different project illustrating music theory concepts, Remi was later adopted as Anisong’s official mascot due to his musical-themed design and his “kawaii” appearance.
    </p>
  )
);
export const DESIGN_HERO = new Artwork(
  "/designhero",
  "Design Hero",
  "Project",
  "/thumbnails/CarolynHawkins.png",
  [TAG.MOTION],
  "/pdf/CarolynHawkins.pdf",
  (
    <p>
    This four-slide presentation explores the work of Carolyn Hawkins, a Melbourne-based designer known for her chaotic, textured style. Inspired by her posters and illustrations, I designed the slides to reflect her distinct visual language, incorporating splash animation for an engaging, dynamic experience.
    </p>
  )
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
  (
    <p>
      The Raw Edge Mending Workshop aimed to educate UF students about the environmental impact of fast fashion and empower them with sustainable alternatives. Developed by a team of five designers, the workshop included hands-on sewing tutorials and two zines—one on sewing techniques and another on the negative effects of fast fashion. My main contribution was designing the latter, highlighting practical ways to combat waste in the fashion industry.
    </p>
  )
);

export const MINDFULL = new Artwork(
  "/mindfull",
  "Mindfull",
  "Game Concept",
  "/thumbnails/Mindfull.png",
  [TAG.MOTION],
  "/pdf/Mindfull.pdf",
  (
    <p>
      Mindfull is a narrative-driven game concept that explores the experience of ADHD over a work week. Through deceptively simple tasks and mini-games made challenging by simulated ADHD effects, players navigate an office environment while facing distractions, time blindness, and the impact of words from colleagues. Mindfull highlights how everyday interactions can shape the experience of neurodivergent individuals, fostering empathy and awareness through gameplay.
    </p>
  )
);

export const NAVIREADER = new Artwork(
  "/navireader",
  "NaviReader",
  "Reading Tool",
  "/thumbnails/NaviReader.png",
  [TAG.MOTION],
  "/pdf/NaviReader.pdf",
  (
    <p>
      NaviReader is a futuristic reading tool that encourages children to read out loud for a fun, interactive reading experience. NaviReader clips onto the side of a book or tablet, displaying holographic animations as a reward as they read. This project was developed by a team of three designers who worked collaboratively on all aspects, including the product design, app UI mockup, and motion graphic.
      <br />
      <br />
      This work was exhibited at Ligature 34, a juried  student exhibition held at the University of Florida’s School of Art and Art History.
    </p>
  )
);

export const ELECTROPHYSICS = new Artwork(
  "/electrophysics",
  "Electro- physics",
  "Motion Graphic",
  "/thumbnails/Electrophysics.gif",
  [TAG.MOTION],
  "",
  (
    <p>
    This 15-second video on electrophysics was designed for public display in a science building. The first half of the animation mimics the electrical graph of a neuron firing, while the latter half visualizes the organic structure of neurons and their electrical signals, blending science with motion design.
    </p>
  )
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
