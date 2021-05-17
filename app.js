const express=require('express');
const app = express();
const signupRouter = require('./src/routes/signupRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const port = process.env.PORT || 5000;

const nav=[
    {link: '/home', name: 'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/newbook',name:'Add new book'},
    {link: '/', name: 'Sign out'}
]

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
var newbookRouter = require('./src/routes/addnewbookRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/newbook',newbookRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/', function(req,res){
    res.render("index",
    {
        nav1 : [ 
            {    
                link: '/signup', name: 'Signup'
            },
            {
                link: '/login', name: 'Login'
            },
            
        ],
       title:'Library', 
       img : 'img.jpg'
    });
});
app.get('/home', function(req,res){

    res.render("home", { 
        nav,
        title : 'Library',
        img : 'img.jpg'

    });
});



app.listen(port, ()=>{console.log("Server running at " + port)});
