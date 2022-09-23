const mongoose = require("mongoose");
const Joi = require("joi");
const { number } = require("joi");
const { string } = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const ListingSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 100,
  },
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
    min: 0,
  },
  email: {
    type: String,
    required: true,
    min: 0,
  },
  county: {
    type: String,
    required: true,
    min: 0,
  },
  images: {
    type: [String],
    required: true,
  },

  longitude: {
    type: Number,
    required: false,
  },

  latitude: {
    type: Number,
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
    type: String,
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
    type: String,
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
    type: String,
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
});

const Listing = mongoose.model("Listing", ListingSchema);

const listingValidator = (data) => {
  const joiOptions = { abortEarly: false };

  const listingSchema = Joi.object({
    id: Joi.objectId().required(),
    ownerName: Joi.string().min(1).max(100).required(),
    address: Joi.number().required(),
    propertyCategory: Joi.number().required(),
    careTaker: Joi.number().required(),
    phone: Joi.number().required(),
    email: Joi.number().required(),
    county: Joi.number().required(),
    images: Joi.array().required(),
    longitude: Joi.number().optional(),
    latitude: Joi.number().optional(),
    classType: Joi.string().required(),
    propertyGrade: Joi.string().required(),
    ageOfBuilding: Joi.number().required(),
    acquisitionCost: Joi.number().required(),
    location: Joi.string().required(),
    numberOfLots: Joi.number().required(),
    landValuePerDeed: Joi.string().optional(),
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
