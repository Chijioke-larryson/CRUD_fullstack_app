import { query } from "../utils/connectToDB.js"


export async function  getAllEmployees(req, res, next) {

    try{
        const response = await query(`
    SELECT to_regclass('employee_details');
`);



        console.log(response);
        res.send("ok")


    }catch (e) {

    }

}

export async function  getEmployees(req, res, next) {

}

export async function  deleteEmployees(req, res, next) {

}

export async function  updateEmployees(req, res, next) {

}

export async function  createEmployees(req, res, next) {

}

