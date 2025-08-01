const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

//Index Route
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

//New Route
module.exports.newListingForm = (req, res) => {
    res.render("listings/new.ejs");
}

//Show Route
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({path: "reviews", populate: {
            path: "author"
        }})
        .populate("owner");
    if(!listing){
        req.flash("error", "The listing you are trying to access is not exists!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

//Create Route
module.exports.createListing = async (req, res, next) => {
    let response = await geoCodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    newListing.geometry = response.body.features[0].geometry;
    
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
}

//Edit Route
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if(!listing){
        req.flash("error", "Listing you requested for does not exists!");
        res.redirect("/listings");
    }

    let originalImgUrl = listing.image.url;
    // console.log(originalImgUrl);
    originalImgUrl = originalImgUrl.replace("/upload", "/upload/h_300,w_250");
    console.log(originalImgUrl);
    res.render("listings/edit.ejs", { listing, originalImgUrl });
}

//Update Route
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
}

//Delete Route
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
}