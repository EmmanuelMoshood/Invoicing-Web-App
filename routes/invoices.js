import express from "express";
const router = express.Router();
import { getInvoices } from "../controllers/invoices.js"
// import { getLogin, getSignup } from "../controllers/auth"

// const { ensureAuth } = require("../middleware/auth");

//Main Routes 
// router.get("/", getProfile);
router.get("/", getInvoices);


//* Routes for POST
// router.post("/newInvoice", createNewInvoice);
// router.get("/signup", getSignup);
//! router.post("/signup", authController.postSignup);

// module.exports = router;
export default router
