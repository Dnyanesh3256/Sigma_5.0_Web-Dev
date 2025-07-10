const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

router.route("/")
    .get(wrapAsync(listingController.index))                //Index Route
    .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));     //Create Route

//New Route
router.get("/new", isLoggedIn, listingController.newListingForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))  //Show Route
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))      //Update Route
    .delete(isOwner, wrapAsync(listingController.deleteListing));        //Delete Route

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListing));

module.exports = router;