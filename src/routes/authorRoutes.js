const express = require('express');
const authorsRouter=express.Router();


function router(nav){
var authors = [
    {
        title: 'Joseph Barbera',
        occupation:'Animator,director,producer,artist',
        works:'Tom and Jerry',
        img:"JB.jpg"

    },
    {
        title: 'J k Rowling',
        occupation:'Author, philanthropist, film producer, television producer, screenwriter',
        works:' Harry Potter',
        img:"JK.jpg"

    },
    {
        title: 'Abdul Rahman Muhammad Basheer',
        occupation:'Writer, freedom fighter',
        works:'  Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam',
        img:"Basheer.jpg"

    },
    {
        title: 'William Shakespeare',
        occupation:'Playwright,English poet',
        works:' Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth',
        img:"Shakespeare.jpg"

    }
]



authorsRouter.get('/', function(req,res){
    res.render("authors",{
    nav,
    title:'Library',
    authors  
    });
});
authorsRouter.get('/:id', function(req,res){
    const id = req.params.id
    res.render('author',{
       nav,
       title:'Library',
       author: authors[id] 
    })
})
    return authorsRouter;
}
module.exports = router;