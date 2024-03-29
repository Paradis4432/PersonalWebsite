const express = require('express');
const router = express.Router();
const path = require('path');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const jquery = require('jquery');
//const cors = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, "./public/css")));
app.use(express.static(path.resolve(__dirname, "./public/images")));
app.use(express.static(path.resolve(__dirname, "./public/js")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//const corsOptions = {
//    origin: "*",
//};

//app.use(cors(corsOptions));

app.listen(3000, () => { console.log('Server started at port 3000'); });

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/test", (req,res) => {
    res.render("test");
})