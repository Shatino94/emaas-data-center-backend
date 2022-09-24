const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const listingMap = require("../../utils/mapping")
const validateData = require("../../middleware/validateData");
const { Listing, listingValidator } = require("../../db/models/Listing");
const fetch = require("node-fetch");
const axios = require('axios').default;


function formatData(listing, mapper) {
    console.log(mapper)
    let keys = Object.keys(listing)
    const obj = {}
    keys.map(item => {
        let a = mapper[item] || "a"
        let b = listing[item]
        obj[item] = mapper[item] ? eval(a)[b] : listing[item]
    })
    console.log(obj)

    return obj
}

router.get("/", [auth, admin], async(req, res) => {
    const listings = await Listing.find({});
    res.send(listings);
});

router.post(
    "/", [auth, validateData(listingValidator)],
    async(req, res) => {

        const data = req.body;
        const result = axios.post("https://us-central1-emaat-337800.cloudfunctions.net/appraisal", {
            ...data
        })

        const formattedList = formatData(data, listingMap)
        const agentId = {
            agentId: req.user.userId
        }
        const listingStorage = {
            ...result,
            ...formattedList,
            ...agentId
        }

        db = new Listing({...listingStorage })
        await db.save
        res.status(201).send(result)
    }
);


router.get("/:search", auth, async(req, res) => {
    const listings = await Listing.find({ id: req.params.search });
    res.send(listings);
});

router.post(
    "/", [auth, validateData(listingValidator)],

    async(req, res) => {
        const listing = req.body;
        const result = await axios.post("https://us-central1-emaat-337800.cloudfunctions.net/appraisal", {
            headers: { "Content-Type": "application/json" },
            body: listing,
        });
        console.log(result)
        const listingStorage = { listing, ...result };

        if (req.user) listingStorage.userId = req.user.userId;

        const item = new Listing({...listing });
        item.save();

        result.images = listing.images;
        result.ownerName = listing.ownerName;
        result.latitude = listing.latitude;
        result.logitude = listing.logitude;

        res.status(201).send(result);
    }
);

module.exports = router;

module.exports = router;