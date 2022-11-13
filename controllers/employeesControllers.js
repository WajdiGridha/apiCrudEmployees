const { Employee } = require('../models/employee')

const getAllEmployees = (async (req, res) => {
    Employee.find({}, (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log(err);
        }
    })
})

const getSingleEmployee = (async (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log(err);
        }
    })
})


const addEmployees = (async (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });

    emp.save((err, data) => {
        res.status(200).json({ message: 'Employee Added Successfully', addEmployee: data })
    });
})

const updateEmployees = (async (req, res) => {
    const emp = {
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate({_id: req.params.id}, { $set:emp }, { new:true }, (err, data) => {
        if (!err) {
            res.status(200).json({
                message: 'Employee updated Successfully',
                updateEmployee: data
            })
        } else {
            console.log(err)
        }
    });
})

const deleteEmployees = async (req , res) => {
    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({
                message: 'Employee Deleted Successfully',
                deleteEmployee: data
            })
        }else {
            console.log(err)
        }
    })
}

module.exports = { getAllEmployees, addEmployees, getSingleEmployee, updateEmployees , deleteEmployees }