const express = require('express');
const app = express();
app.use(express.json());


//First Get function
app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.get('/api/courses/:id/:name',(req, res) => {
    var data = {
      id: req.params.id,
      name: req.params.name
    }
    res.send(data);
  })
const courses =[
    {id : 1 , name: "DSA"},
    {id: 2, name: "CAA"}
]

app.post('/api/courses',(req, res) => {
  
  const course = {id: courses.length+1, name: req.body.name}

  courses.push(course);
  
  res.send(courses);
})

app.post('/api/courses/del',(req, res) => {
  
  for(var i=0;i<courses.length;i++){
    if(courses[i].id === req.body.id){
      courses.splice(i,1)
    }
  }
  res.send(courses);
})


  // Environment Variable
const port = process.env.PORT || 3000;

  app.listen(port, () =>   console.log(`App listening on ${port}...`))
