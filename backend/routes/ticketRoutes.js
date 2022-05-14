const express = require("express");
const {
    getTickets,
    getTicket,
    createTickets,
    deleteTicket,
    updateTicket,
} = require("../controllers/ticketController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

// Re-route into noterouter
const noteRouter = require("./noteRoute");
router.use("/:ticketId/notes", noteRouter);

router.route("/").get(protect, getTickets).post(protect, createTickets);
router
    .route("/:id")
    .get(protect, getTicket)
    .delete(protect, deleteTicket)
    .put(protect, updateTicket);

module.exports = router;
