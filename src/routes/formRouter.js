import express from "express";
import { formSubmission } from "../controllers/formController";
const router = express.Router();

router.post("/", formSubmission);

export default router;
