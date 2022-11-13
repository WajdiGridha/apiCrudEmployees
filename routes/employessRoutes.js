const express = require('express');
const router = express.Router()


const { getAllEmployees , addEmployees , getSingleEmployee, updateEmployees, deleteEmployees } = require('../controllers/employeesControllers');



router.get('/api/employees',getAllEmployees )
router.get('/api/employees/:id',getSingleEmployee )
router.post('/api/employees',addEmployees )
router.put('/api/employee/edit/:id',updateEmployees )
router.delete('/api/employee/:id',deleteEmployees )

module.exports = router;