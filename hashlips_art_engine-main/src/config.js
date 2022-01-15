const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Seadogs first drop";
const description = "sdspfksdgs";
const baseUri = "ipfs://";

/*const solanaMetadata = {
  symbol: "SEADOGS",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://twitter.com/Seadogslab",// Ici on link vers le site ?
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", // À remplacer par notre wallet
      share: 100,
    },
  ],
};
*/

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  { 
    growEditionSizeTo: 50, // collection avec tattoos et accessoires
    layersOrder: [{ name: "background" },
    { name: "clothes" },
    { name: "face background", options: { bypassDNA: true } },
    { name: "eyes" },
    { name: "lowerface" }, { name: "nose" },
    { name: "tattoos", options: { blend: MODE.multiply, opacity: 0.7} },
    { name: "upper head" },
    { name: "accessories" },
    { name: "ears" }, ],
  },

  { 
    growEditionSizeTo: 100, // collection avec tattoos et sans accessoires
    layersOrder: [{ name: "background" },
    { name: "clothes" },
    { name: "face background", options: { bypassDNA: true } },
    { name: "eyes" },
    { name: "lowerface" }, { name: "nose" },
    { name: "tattoos", options: { blend: MODE.multiply, opacity: 0.7} },
    { name: "upper head" }, { name: "ears" }, ],
  },

  {
    growEditionSizeTo: 350, // collections sans tattoos avec accessoires
    layersOrder: [
      { name: "background" },
      { name: "clothes" },
      { name: "face background" },
      { name: "eyes" },
      { name: "lowerface" },
      { name: "nose" },
      { name: "upper head" },
      { name: "accessories" },
      { name: "ears" },          
    ],
  },

  {
    growEditionSizeTo: 600, // collections sans tattoos sans accessoires
    layersOrder: [
      { name: "background" },
      { name: "clothes" },
      { name: "face background" },
      { name: "eyes" },
      { name: "lowerface" },
      { name: "nose" },
      { name: "upper head" },
      { name: "ears" },          
    ],
  },
];




const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 10,
  thumbWidth: 1000,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 20,
  order: "MIXED", // ASC, DESC, MIXED
  repeat: -1,
  quality: 100,
  delay: 900,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  // Useless medata for matic
  // solanaMetadata,
  gif,
  preview_gif,
};
