const Todoservice = require('../services/todo-service')

const todoService = new Todoservice();

    const createTodo = async (req,res) =>{
        try {
            const response = await todoService.Createreate(req.params.id);
            return res.status(201).json({
                data : response,
                message:'Successfully created todo',
                sucess: true,
                err:{}
            })
        } catch (error) {
            res.status(500).json({
                data : {},
                message:'coulnt be created',
                sucess: true,
                err:{error}
            
        });
        }
    }

    const destroyTodo = async (req,res) =>{
        try {
            const response = await todoService.Destroy(id);
            return res.status(201).json({
                data : response,
                message:'Successfully destroyed todo',
                sucess: true,
                err:{}
            })
        } catch (error) {
            res.status(500).json({
                data : {},
                message:'coulnt be destroyed',
                sucess: true,
                err:{error}
            
        });
        }
    }


module.exports= {
    createTodo,
    destroyTodo
};