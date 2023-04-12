export type AvailableThemes =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "cmyk"
  | "autumn"
  | "business"
  | "acid"
  | "lemonade"
  | "night"
  | "coffee"
  | "winter";

export type AvailableErcStandards = "erc1155" | "erc721";

export const getTheme = (): AvailableThemes => {
  return process.env.NEXT_PUBLIC_THEME;
};

export const getErcStandard = (): AvailableErcStandards => {
  return process.env.NEXT_PUBLIC_ERC_STANDARD;
};
