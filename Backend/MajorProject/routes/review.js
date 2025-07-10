const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

// Add Review
router.post("/reviews", isLoggedIn, validateReview, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "new review added!");
    console.log("review saved!");
    res.redirect(`/listings/${listing._id}`);
}));

//Delete Review
router.delete("/reviews/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync( async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "review deleted!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;