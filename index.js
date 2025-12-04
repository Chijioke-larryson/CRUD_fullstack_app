import express from  'express'
import bodyParser  from "body-parser";
import  cors from 'cors'
import dotenv from 'dotenv';
import employee from "./routes/employee.js";

dotenv.config();

const app = express ();
const PORT = 3000;
app.use(express.json());

const corsOptions = {
    origin: "*"
}

app.use(express.json());
app.use(cors(corsOptions));


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api/employee", employee);
app.use(function(req,res){
    res.status(400).json({error: "Not Found"})
})
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message  = err.message  || "internal server error "
    return res.status(statusCode).json({error: message })
})



app.listen(PORT, ()  => {
    console.log(`listening on port  ${PORT}`)
})