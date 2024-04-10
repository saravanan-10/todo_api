const Todo = require('../model/todo');


exports.getTodo = async(req, res, next)=>{
  try {
    const todoList = await Todo.find();
    //const todoList = await Todo.find({name:"Wake Up"}); //Filter by name
    res.status(200).json({
        success:true,
        data:todoList,
        count:todoList.length
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        error
    })
  }
};

exports.getTodoById = async(req, res, next)=>{
    var id = req.params.id;
    try{
        const todoListById = await Todo.findOne({_id:id})
        res.status(200).json({
            success:true,
            data:todoListById,
        })
    } catch(error){
        res.status(400).json({
            success:false,
            error
        })
    }
};

exports.createTodo = async(req, res, next )=>{
    console.log(req.body);
    try {
      await Todo.create(req.body);
        res.status(200).json({
            success:true,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }
}

exports.editTodo = async(req, res, next)=>{
    console.log(req.body);
    console.log(req.params.id);
    var id = req.params.id;
    try{
        await Todo.findByIdAndUpdate(id, req.body,{
            runValidators:true,
            new:true
        });
        res.status(200).json({
            success:true,
        })
    } catch (error) {
        res.status(400).json({
            sucess:false,
            error
        })
    }
}

exports.deleteTodo = async(req, res, next)=>{
    var id = req.params.id;
    try{
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true
        })
    } catch (error){
        res.status(400).json({
            success:false,
            error
        })
    }
}