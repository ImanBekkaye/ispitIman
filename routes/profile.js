var express = require('express');
var router = express.Router();
var dbLogic = require('../db/dbLogic');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var task=null;

    dbLogic.getTaskById(req.cookies.authx,(data)=>{
        console.log('podaci iz getTask:',data);
    task=data;

})
    res.render('profile',
        {data: {username: task.username,
            task: task.task
        }
        }
    );
});

router.post('/tasks', function(req, res, next) {
    console.log('svasta nestoo', req.body.name);
    dbLogic.setTaskById(req.cookies.authx,req.body.name,function(data){
        res.render( 'list', {data: data.task} );
})

});

module.exports = router;
