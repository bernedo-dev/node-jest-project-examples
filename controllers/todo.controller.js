const TodoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
    try {
        const createdModel = await TodoModel.create(req.body);
        res.status(201).json(createdModel);
    } catch (error) {
        next(error);
    }
}

exports.getTodos = async (req, res, next) => {
    try {
        const todos = await TodoModel.find({});
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}

exports.getTodoById = async (req,res,next) => {
    try {
        const todo = await TodoModel.findById(req.params.todoId);
        if(todo ){
            res.status(200).json(todo);
        }else{
            return res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
}

exports.updateTodo = async (req,res,next) => {
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.todoId,req.body,{new:true,useFindAndModify:false});
        if(updatedTodo){
            res.status(200).json(updatedTodo);
        }else{
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
}

exports.deleteTodo = async (req,res,next) => {
    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(req.params.todoId);
        if(deletedTodo){
            res.status(200).json(deletedTodo);
        }else{
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
}