import express from "express";
import {getAllEmployee, getEmployee, deleteEmployee, updateEmployee,createEmployee} from "../controllers/emplyee.js";

const router = express.Router();

router.get("/", getAllEmployee)

router.post("/", createEmployee)

router.get("/:id", getEmployee)

router.delete("/:id", deleteEmployee)

router.put("/:id", updateEmployee)

export  default  router;