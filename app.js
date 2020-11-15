require('dotenv').config()
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
  })
  app.engine('hbs', hbs.engine)
  app.set('view engine', 'hbs')
  app.set('views', 'views')
  

app.get('/', (req, res) => {
    res.render('index.hbs')
})

server.listen(8080, async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('listening on *:8080');
    } catch(e){
        console.log(e);
    }
})


 
