import { useState } from "react";
import SelectVariants from "./SelectVariants";
import Checkbox from "@mui/material/Checkbox";
import Vector from "../assets/Vector.svg";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

type Task = {
  text: string;
  priority: string;
  completed: boolean;
};
type AllTasksProps = {
  selectedCategory: string;
};

const AllTasks = ({ selectedCategory }: AllTasksProps) => {
  const [taskInput, setTaskInput] = useState<string>("");
  const [priority, setPriority] = useState<string>("Uncategorized");
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showDoneTask, setShowDoneTask] = useState(false);
  const [showErrorDoneTask, setShowErrorDoneTask] = useState(false);
  const [showDeleteTask, setShowDeleteTask] = useState(false);

  const addTask = () => {
    if (taskInput.trim() === "") {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    const newTask: Task = { text: taskInput, priority, completed: false };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
    setTaskInput("");
    setPriority("Uncategorized");
    setShowAddTask(true);
    setTimeout(() => {
      setShowAddTask(false);
    }, 3000);
  };

  const toggleCompleted = (index: number) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
    if (!updatedTasks[index].completed) {
      setShowErrorDoneTask(true);
    } else {
      setShowDoneTask(true);
    }
    setTimeout(() => {
      setShowDoneTask(false);
    }, 3000);
    setTimeout(() => {
      setShowErrorDoneTask(false);
    }, 3000);
  };

  const deleteTask = (indexToDelete: number) => {
    const newTaskList = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(newTaskList);
    setShowDeleteTask(true);
    setTimeout(() => {
      setShowDeleteTask(false);
    }, 3000);
  };

  return (
    <div className="m-4 w-full">
      <h1 className="font-bold text-3xl">{selectedCategory} Tasks</h1>

      <div className="flex flex-col sm:flex-row items-start sm:items-center mt-3 bg-[#f3f3f3] rounded-sm p-3 gap-2">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task inside 'All' category"
          className="bg-white pt-2 pb-2 pl-5 rounded-sm w-full"
        />
        <SelectVariants priority={priority} setPriority={setPriority} />
      </div>

      <button
        onClick={addTask}
        className="mt-3 bg-[#f1a0a0] py-2 px-4 rounded-md"
      >
        Add Task
      </button>
      {showAddTask && (
        <Alert severity="success" className="mt-3">
          <AlertTitle>Success</AlertTitle>
          Task added successfully!
        </Alert>
      )}
      {showError && (
        <Alert severity="error" className="mt-3">
          <AlertTitle>Error</AlertTitle>
          Task input cannot be empty!
        </Alert>
      )}
      {showDoneTask && (
        <Alert severity="success" className="mt-3">
          <AlertTitle>Success</AlertTitle>
          Task done successfully!
        </Alert>
      )}
      {showErrorDoneTask && (
        <Alert severity="error" className="mt-3">
          <AlertTitle>Error</AlertTitle>
          Task has not been done!
        </Alert>
      )}
      {showDeleteTask && (
        <Alert severity="info" className="mt-3">
          <AlertTitle>Info</AlertTitle>
          task deleted.
        </Alert>
      )}
      <ul className="mt-4">
        {taskList
          .filter((task) =>
            selectedCategory === "All"
              ? true
              : task.priority === selectedCategory
          )
          .map((task, index) => (
            <li key={index} className="mb-2 flex items-center">
              <Checkbox
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
                sx={{
                  color: "#d63384",
                  "&.Mui-checked": {
                    color: "#e83e8c",
                  },
                }}
              />
              <span
                className={`font-medium ml-2 ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </span>
              <span className="ml-2 pt-1 pb-1 pl-2 pr-2 rounded-md text-sm text-white bg-[#ea5959]">
                ({task.priority})
              </span>
              <img
                src={Vector}
                alt="trash"
                className="ml-auto w-4 h-4 cursor-pointer"
                onClick={() => deleteTask(index)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllTasks;
