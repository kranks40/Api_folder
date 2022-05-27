import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();



// all routes are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser)

router.delete("/:id",deleteUser);

// The patch request is receiving a parameter with a specific id for the user to be updated.
// The values are then sent from the frontend, and if they exist then changes or an update can be requested
router.patch("/:id", updateUser);

export default router;
