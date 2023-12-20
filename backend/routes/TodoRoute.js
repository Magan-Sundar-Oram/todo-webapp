const {Router}=require('express')
const router =Router()
const {getTodo,saveTodo, updateTodo,deleteTodo}=require('../controllers/TodoController')

router.get('/',getTodo);
router.post('/save',saveTodo)
router.post('/update',updateTodo)
router.post('/delete',deleteTodo)
module.exports=router;