const TodoRespository = require('../repsoitory/todo-repository')

class Todoservice{
    constructor(){
        this.todoRepository = new TodoRespository();
    }

    async Create(data){
        try {
            const todo = await this.todoRepository.create(data);
            return todo;
        } catch (error) {
            console.log(error);
        }
    }

    async Destroy(id){
        try {
            const response = await this.todoRepository.destroy(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports= Todoservice;