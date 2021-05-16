const router=require('express').Router()



router.route('/').get((req,res)=>{
    res.send('hello from books route')
})

router.route('/id/:id').get((req,res)=>{
res.send('Hello from books/:id route')
}
)
router.route('/update').put((req,res)=>{
    
})
router.route('/add/').post((req,res)=>{


}
)
router.route('/remove/:id').delete((req,res)=>{
res.send('Hello from books/remove/:id route')

}
)


module.exports=router;