const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.json({
        msg:'Hello from the Backend'
    })
});

app.listen(3000);