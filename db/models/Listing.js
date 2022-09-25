const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const ListingSchema = mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
    min: 0,
  },
  address: {
    type: String,
    required: true,
    min: 0,
  },
  propertyCategory: {
    type: String,
    required: true,
    min: 0,
  },
  careTakerName: {
    type: String,
    required: true,
    min: 0,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },

  longitude: {
    type: String,
    required: false,
  },

  latitude: {
    type: String,
    required: false,
  },
  classType: {
    type: String,
    required: true,
  },

  propertyGrade: {
    type: String,
    required: true,
  },

  ageOfBuilding: {
    type: Number,
    required: true,
  },

  acquisitionCost: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  numberOfLots: {
    type: Number,
    required: true,
  },

  landValuePerDeed: {
    type: Number,
    required: false,
  },

  zone: {
    type: String,
    required: true,
  },

  landUse: {
    type: String,
    required: true,
  },

  monthlyRent: {
    type: Number,
    required: true,
  },

  typeOfFoundation: {
    type: String,
    required: true,
  },

  typeOfElevation: {
    type: String,
    required: true,
  },

  typeOfSlabCanopy: {
    type: String,
    required: true,
  },

  typeOfRoofFrame: {
    type: String,
    required: true,
  },

  typeOfRoofCover: {
    type: String,
    required: true,
  },

  typeOfRoofCeiling: {
    type: String,
    required: true,
  },

  typeOfDoor: {
    type: String,
    required: true,
  },

  typeOfWindow: {
    type: String,
    required: true,
  },

  typeOfWindowBar: {
    type: String,
    required: true,
  },

  typeOfDoorGate: {
    type: String,
    required: true,
  },

  typeOfPlumbing: {
    type: String,
    required: true,
  },

  typeOfElectricity: {
    type: String,
    required: true,
  },

  typeOfPainting: {
    type: String,
    required: true,
  },

  ambience: {
    type: String,
    required: true,
  },

  proximity: {
    type: String,
    required: true,
  },

  accessQuality: {
    type: String,
    required: true,
  },

  numberOfMasterBedroom: {
    type: Number,
    required: true,
  },

  numberOfRegularBedroom: {
    type: Number,
    required: true,
  },

  numberOfKitchen: {
    type: Number,
    required: true,
  },

  numberOfLivingRoom: {
    type: Number,
    required: true,
  },

  numberOfBathroom: {
    type: Number,
    required: true,
  },

  numberOfStoreRoom: {
    type: Number,
    required: true,
  },

  numberOfGarage: {
    type: Number,
    required: true,
  },

  numberOfWindow: {
    type: Number,
    required: true,
  },

  numberOfDoor: {
    type: Number,
    required: true,
  },

  numberOfStrain: {
    type: Number,
    required: true,
  },

  numberOfGate: {
    type: Number,
    required: true,
  },

  typeOfFence: {
    type: String,
    required: true,
  },

  fenceHeightCover: {
    type: String,
    required: true,
  },

  fencePerimeterCover: {
    type: String,
    required: true,
  },

  ageOfFence: {
    type: Number,
    required: true,
  },

  typeOfPavement: {
    type: String,
    required: true,
  },

  pavementAverageDiameter: {
    type: String,
    required: true,
  },

  pavementLotCovered: {
    type: String,
    required: true,
  },

  ageOfPavement: {
    type: Number,
    required: true,
  },

  totalArea: {
    type: Number,
    required: true,
  },
  tar: {
    type: Number,
    required: true,
  },
  marketValue: {
    type: Number,
    required: true,
  },
  depreciation: {
    type: Number,
    required: true,
  },
  localityDiscount: {
    type: Number,
    required: true,
  },
  fenceMarketValue: {
    type: Number,
    required: true,
  },
  pavementMarketValue: {
    type: Number,
    required: true,
  },
  landMarketValue: {
    type: Number,
    required: true,
  },
  estimatedValue: {
    type: Number,
    required: true,
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Listing = mongoose.model("Listing", ListingSchema);

const listingValidator = (data) => {
  const joiOptions = { abortEarly: false };

  const listingSchema = Joi.object({
    ownerName: Joi.string().min(1).max(100).required(),
    agentId: Joi.objectId().required(),
    address: Joi.string().required(),
    propertyCategory: Joi.number().required(),
    careTaker: Joi.number().required(),
    phone: Joi.number().required(),
    email: Joi.string().required(),
    county: Joi.string().required(),
    images: Joi.array(),
    longitude: Joi.string().optional(),
    latitude: Joi.string().optional(),
    classType: Joi.string().required(),
    propertyGrade: Joi.string().required(),
    ageOfBuilding: Joi.number().required(),
    acquisitionCost: Joi.number().required(),
    location: Joi.string().required(),
    numberOfLots: Joi.number().required(),
    landValuePerDeed: Joi.number().optional(),
    zone: Joi.string().required(),
    landUse: Joi.string().required(),
    monthlyRent: Joi.string().required(),
    typeOfFoundation: Joi.string().required(),
    typeOfFloor: Joi.string().required(),
    typeOfElevation: Joi.string().required(),
    typeOfSlabCanopy: Joi.string().required(),
    typeOfRoofFrame: Joi.string().required(),
    typeOfRoofCover: Joi.string().required(),
    typeOfRoofCeiling: Joi.string().required(),
    typeOfDoor: Joi.string().required(),
    typeOfWindow: Joi.string().required(),
    typeOfWindowBar: Joi.string().required(),
    typeOfDoorGate: Joi.string().required(),
    typeOfGarageGate: Joi.string().required(),
    typeOfPlumbing: Joi.string().required(),
    typeOfElectricity: Joi.string().required(),
    typeOfPainting: Joi.string().required(),
    ambience: Joi.string().required(),
    proximity: Joi.string().required(),
    accessQuality: Joi.string().required(),
    numberOfMasterBedroom: Joi.number().required(),
    numberOfRegularBedroom: Joi.number().required(),
    numberOfKitchen: Joi.number().required(),
    numberOfLivingRoom: Joi.number().required(),
    numberOfVaranda: Joi.number().required(),
    numberOfDiningRoom: Joi.number().required(),
    numberOfBathroom: Joi.number().required(),
    numberOfStoreRoom: Joi.number().required(),
    numberOfGarage: Joi.number().required(),
    numberOfWindow: Joi.number().required(),
    numberOfDoor: Joi.number().required(),
    numberOfStrain: Joi.number().required(),
    numberOfGate: Joi.number().required(),
    typeOfFence: Joi.string().required(),
    fenceHeightCover: Joi.string().required(),
    fencePerimeterCover: Joi.string().required(),
    ageOfFence: Joi.number().required(),
    typeOfPavement: Joi.string().required(),
    pavementAverageDiameter: Joi.string().required(),
    pavementLotCovered: Joi.string().required(),
    ageOfPavement: Joi.number().required(),
    totalArea: Joi.number(),
    tar: Joi.number(),
    marketValue: Joi.number(),
    depreciation: Joi.number(),
    localityDiscount: Joi.number(),
    fenceMarketValue: Joi.number(),
    pavementMarketValue: Joi.number(),
    landMarketValue: Joi.number(),
    estimatedValue: Joi.number(),
  });

  const validation = listingSchema.validate(data, joiOptions);
  if (validation.error) {
    const error = validation.error.details.map((e) => e.message);
    return { error: error };
  }
  return { error: null };
};

module.exports = {
  Listing,
  listingValidator,
};
