const router=require('express').Router()



router.route('/').get((req,res)=>{
    res.send('hello from books route')
})

router.route('/id/:id').get((req,res)=>{
res.send('Hello from books/:id route')
}
)
router.route('/add').get((req,res)=>{
res.send('Hello from books/add route')

}
)
router.route('/remove/:id').delete((req,res)=>{
res.send('Hello from books/remove/:id route')
}
)


module.exports=router;