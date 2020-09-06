import express from "express";
import { formSubmission } from "../controllers/example";
const router = express.Router();

router.post("/", formSubmission);

export default router;
