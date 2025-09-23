const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingCntroller = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/").get(wrapAsync(listingCntroller.index)).post(
  isLoggedIn,

  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingCntroller.createListing)
);

//New Route
router.get("/new", isLoggedIn, listingCntroller.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingCntroller.showListing))
  .put(
    isLoggedIn,
    isOwner,
    isLoggedIn,

    upload.single("listing[image]"),
    validateListing,

    wrapAsync(listingCntroller.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingCntroller.destroyListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingCntroller.renderEditForm)
);

module.exports = router;
