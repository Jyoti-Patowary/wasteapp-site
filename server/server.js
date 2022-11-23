const express = require('express');
const bodyParser= require('body-parser');
const user = require('./routes/user')
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors())

const dotenv = require('dotenv')


const connectDB = require('./config/db');  

dotenv.config({path: './config/config.env'});

connectDB();


app.use(express.json())


app.use('/', require('./routes/admin'))
app.use('/', require('./routes/customer'))
app.use('/', require('./routes/notification'))
app.use('/', require('./routes/ticket'))
app.use('/', require('./routes/worker'))
app.use('/', require('./routes/user'))

app.use('/user', (user))




app.listen(4000, function() {
  console.log('listening on 4000')
})
