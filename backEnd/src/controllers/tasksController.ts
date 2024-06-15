import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { getNextTaskId } from "../utils/getNextTaskId";
import { Task } from "../types/task";

export const getTasks = (req: Request, res: Response) => {
  const tasks = fs.readFileSync(
    path.join(__dirname, "../data/tasks.json"),
    "utf-8"
  ); // reading the data from the json file

  const jsonData = JSON.parse(tasks); // parsing the data
  
  return res.status(200).json(jsonData);
};

export const addTask = (req: Request, res: Response) => {
  const { task } = req.body; // getting the new task text from the request body
  
  const nextId = getNextTaskId(); // getting the new id
  
  const newTask = { id: nextId, title: task };

  const parsedData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/tasks.json"), "utf-8")
  ); // getting the already existing content within the data json file, and parsing it

  parsedData.push(newTask); // Adding the new task to the already existing data

  // Write updated data back to file
  fs.writeFileSync(
    path.join(__dirname, "../data/tasks.json"),
    JSON.stringify(parsedData, null, 2)
  );

  return res.status(200).json({ task });
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.body;
  const parsedData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/tasks.json"), "utf-8")
  );

  const newData = parsedData.filter((task:Task) => task.id !== parseInt(id));

  // Write updated data back to file
  fs.writeFileSync(
    path.join(__dirname, "../data/tasks.json"),
    JSON.stringify(newData, null, 2)
  );

  return res.status(200).json({ ok:true });
}