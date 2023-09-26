const router = require("express").Router();
const Todo = require("../models/Todo.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      todo: req.body.todo,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let updated = await Todo.findById(id);
    updated.todo = req.body.todo;
    updated.save();

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let updated = await Todo.findById(id);
    updated.todo = req.body.todo;
    updated.save();

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let updated = await Todo.findByIdAndRemove(id);
    if (!updated) res.status(404).json("Not Found");

    res.status(201).json("Todo deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
