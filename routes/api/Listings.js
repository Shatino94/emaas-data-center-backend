const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const admin = require('../../middleware/admin')
const validateData = require('../../middleware/validateData')
const { Listing, listingValidator } = require('../../db/models/Listing')




router.get('/', [auth], async (req, res) => {
	const listings = await Listing.find({}).sort('ownerName')
	res.send(listings)
})

router.post('/', [auth, validateData(listingValidator)], async (req, res) => {

})

router.get('/', [auth, admin], async (req, res) => {
	const listings = await Listing.find({})
	res.send(listings)
})

router.post('/', [auth, validateData(listingValidator)], async (req, res) => {

})

router.get("/", async (req, res) => {
  const listings = await Listing.find({}).sort('ownerName')
	res.send(listings)
});

router.get("/:search", auth, async (req, res) => {
  const listings = await Listing.find({id:req.params.search})
	res.send(listings)
});

router.post(
  "/",
  [auth, validateWith(schema)],

  async (req, res) => {
    const listing = req.body;
    const result = fetch("http://localhost:8080", {method:"POST",
          headers: {'Content-Type': 'application/json',},
        body: listing});

    const listingStorage = { listing, ...result };

    if (req.user) listingStorage.userId = req.user.userId;

    const item = new Listing({...listing})
      item.save()


    result.images = listing.images;
    result.ownerName = listing.ownerName;
    result.latitude = listing.latitude
    result.logitude = listing.logitude

    res.status(201).send(result);
  }
);

module.exports = router;

module.exports = router
