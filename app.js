const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');



app.use(cors());
app.use(express.static('public'));




app.get('/', (req,res) => {
    
});




app.listen(port, () => console.log(`running in port ${port}`));