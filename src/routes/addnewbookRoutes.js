var express = require('express');
var newbookRouter = express.Router();

function router(nav){

    newbookRouter.get('/', function(req,res){

        res.render("addnewbook", {
            
            nav, 
            title : 'Library',
            
    
            
        });
    
    });

    return newbookRouter;

}

module.exports = router;