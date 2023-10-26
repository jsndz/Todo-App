const Todo = require('../models/todo')

class TodoRespository{
    async create(data){
        try {
            const todo = await Todo.create(data);
            return todo;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const response = await Todo.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async get(){
        try {
            const get = await Todo.find();
            return get;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports= TodoRespository;