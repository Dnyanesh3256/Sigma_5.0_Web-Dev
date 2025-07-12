if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");

const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index))                //Index Route
    .post(
        isLoggedIn, 
        validateListing,
        upload.single("listing[image]"), 
        wrapAsync(listingController.createListing)
    );

//New Route
router.get("/new", isLoggedIn, listingController.newListingForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))  //Show Route
    .put(
        isLoggedIn, 
        isOwner, 
        validateListing,
        upload.single("listing[image]"), 
        wrapAsync(listingController.updateListing)
    )  
    .delete(isOwner, wrapAsync(listingController.deleteListing));        //Delete Route

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListing));

module.exports = router;