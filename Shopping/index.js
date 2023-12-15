const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "hello from Shopping service"});
})

app.listen(8003,()=>{
    console.log('Shopping service is listening at port 8003')
})