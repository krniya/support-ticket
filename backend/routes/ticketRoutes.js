const express = require("express");
const { route } = require("express/lib/application");
const {
    getTickets,
    getTicket,
    createTickets,
    deleteTicket,
    updateTicket,
} = require("../controllers/ticketController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTickets);
router
    .route("/:id")
    .get(protect, getTicket)
    .delete(protect, deleteTicket)
    .put(protect, updateTicket);

module.exports = router;
