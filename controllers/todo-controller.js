const Todoservice = require('../services/todo-service')

const todoService = new Todoservice();

    const createTodo = async (req,res) =>{
        try {
            const response = await todoService.Createreate(req.body);
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
            const response = await todoService.Destroy(req.params.id);
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
    
    const getTodo = async (req,res) =>{
        try {
            const response = await todoService.Get();
            return res.status(201).json({
                data : response,
                message:'Successfully got todo',
                sucess: true,
                err:{}
            })
        } catch (error) {
            res.status(500).json({
                data : {},
                message:'coulnt be got',
                sucess: true,
                err:{error}
            
        });
        }
    }

module.exports= {
    createTodo,
    destroyTodo,
    getTodo
};