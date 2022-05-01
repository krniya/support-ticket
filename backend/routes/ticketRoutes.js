const express = require("express");
const { getTickets, createTickets } = require("../controllers/ticketController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTickets);

module.exports = router;
