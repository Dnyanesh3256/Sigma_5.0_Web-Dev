const Listing = require("../models/listing.js");


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
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
}

//Edit Route
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}

//Update Route
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
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