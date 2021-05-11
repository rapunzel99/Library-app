var express = require('express');
var loginRouter = express.Router();

loginRouter.get('/', function(req,res){

    res.render("login", { 
        nav1 : [ 
            {    
                link: '/signup', name: 'Signup'
            },
            {
                link: '/login', name: 'Login'
            },
            
        ],
        title : 'Login'

    });
});

module.exports = loginRouter;