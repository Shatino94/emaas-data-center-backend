const express = require("express");
const router = express.Router();
const _ = require("lodash");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const listingMap = require("../../utils/mapping");
const validateData = require("../../middleware/validateData");
const { Listing, listingValidator } = require("../../db/models/Listing");
const { User } = require("../../db/models/User");
const axios = require("axios").default;

const Summary = [
  "_id",
  "totalArea",
  "tar",
  "marketValue",
  "depreciation",
  "localityDiscount",
  "fenceMarketValue",
  "pavementMarketValue",
  "landMarketValue",
  "estimatedValue",
  "ownerName",
  "address",
  "agentId",
  "phoneNumber",
  "email",
  "county",
  "latitude",
  "longitude",
  "image",
];

function formatData(listing, mapper) {
  let keys = Object.keys(listing);
  const obj = {};
  keys.map((item) => {
    let a = mapper[item] || null;
    let b = listing[item];
    obj[item] = mapper[item] ? eval(a)[b] : listing[item];
  });

  return obj;
}

router.get("/", [auth, admin], async (req, res) => {
  const listings = await Listing.find({});
  const response = _.pick(listings, Summary);
  res.send(response);
});

router.get("/:id", [auth, admin], async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (listing) {
    res.send({ ok: true, data: listing });
  }

  res.send({ ok: false, error: "listing not found" });
});

router.post("/", [auth, validateData(listingValidator)], async (req, res) => {
  const data = req.body;
  const result = await axios.post(process.env.APPRAISAL_ENDPOINT, data);
  const formattedListing = formatData(data, listingMap);
  formattedListing.agentId = req.user.id;
  const listingStorage = { ...result, ...formattedListing };
  const newListing = await Listing.create(listingStorage);
  const extraData = _.pick(formattedListing, [
    "ownerName",
    "address",
    "agentId",
    "phoneNumber",
    "email",
    "county",
    "latitude",
    "longitute",
    "image",
  ]);
  const response = { ...result, ...extraData, _id: newListing._id };

  res.status(201).send({ ok: true, data: response });
});

module.exports = router;
