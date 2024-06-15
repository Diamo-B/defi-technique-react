import fs from "fs";
import path from "path";
import { Task } from "../types/task";

export const getNextTaskId = () => {
  try {
    const data:Task[] = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/tasks.json"), "utf-8")
    ); // reading the data from the json file, and parsing it

    const latestId:number = data.length>0 ? Math.max(...data.map((task:Task) => task.id)) : 0; // looping over the data to find the latest id
    
    return latestId + 1;

  } catch (err) {
    // If file doesn't exist or has invalid JSON, start with ID 1
    return 1;
  }
};
