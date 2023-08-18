const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://vgondalia:Password123@mern-cluster.q5uedbb.mongodb.net/", {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Connected to DB"))
    .catch(console.error);

const Todo = require('./models/Todo');

//GET ALL TODOS
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();

    res.json(todos);
});

//CREATE A NEW TODO
app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text : req.body.text
    });

    todo.save();
    res.json(todo);
});

app.listen(3001, () => console.log("Server started on port 3001"));