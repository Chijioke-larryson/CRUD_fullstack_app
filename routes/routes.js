import express from "express";
import {getAllEmployees, getEmployees, deleteEmployees, updateEmployees,createEmployees} from "../controllers/emplyee.js";

const router = express.Router();

router.get("/", getAllEmployees)

router.post("/", createEmployees)

router.get("/:id", getEmployees)

router.delete("/:id", deleteEmployees)

router.put("/:id", updateEmployees)

export  default  router;