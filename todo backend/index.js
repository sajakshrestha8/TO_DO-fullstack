const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
let toDos=[{
  task:"Go for a walk",
  isCompleted: false,
  
},
{
task:"Read a book",
isCompleted: false,

}
]

app.use(express.json());


 app.get('/',(req,res)=>{
  res.send(toDos);
 });

 app.post('/',(req,res)=>{
  const payload= req.body;
  const id= uuidv4();
  payload.id=id;
  toDos.push(payload);
  res.send({message: "New user has been created",
    data: payload,
  });

 })


 app.patch("/:id",(req,res)=>{
const todoId = req.params.id;
  const payload= req.body;
  let newTodo= toDos.findIndex((item)=>{
    return item.id === todoId;
  });
  toDos[newTodo]={...toDos[newTodo],...payload,

  };
  res.send(toDos);
 })

 app.delete("/:id",(req,res)=>{
  const todoId= req.params.id;
  const deletedData= toDos.filter((item)=>{
    return item.id !== todoId;
  });
  toDos=deletedData;

  res.send({
    toDos,
    message:"deleted"
  });

 })
app.listen(8001, () => {
  console.log("server running");
});