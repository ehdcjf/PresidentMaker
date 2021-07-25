const app = require('express')(); 
const bodyParser = require('body-parser'); 
const PORT = 3002; 

app.use(express.static('public')); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false})); 

app.use('/',router);

app.use()

app.listen(PORT, () => { 
    console.log(`Hello Port ${PORT}`)
})