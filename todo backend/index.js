const express = require("express");
const app = express();
let toDos=[{
  task:"Go for a walk",
  isCompleted: false,
},
{
task:"Read a book",
isCompleted: false
}
]

app.use(express.json());


 app.get('/',(req,res)=>{
  res.send(toDos);
 });

 app.post('/',(req,res)=>{
  const payload= req.body;

  toDos.push(payload);
  res.send({message: "New user has been created",
    data: payload,
  });

 })

app.listen(8001, () => {
  console.log("server running");
});