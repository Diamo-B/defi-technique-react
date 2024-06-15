import { Router } from "express";
import { addTask, deleteTask, getTasks } from "../controllers/tasksController";

const router: Router = Router();


router.get("/tasks", getTasks);

router.post("/tasks", addTask);

router.delete("/tasks", deleteTask);

export default router;