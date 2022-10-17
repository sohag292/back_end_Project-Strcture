const express =require('express');
const router = require('./src/routes/api');
const app = new express()

//security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp =require('hpp');
const cors = require('cors')


//security middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitizer())
app.use(xss())
app.use(hpp())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 100, 
})
// Apply the rate limiting middleware to all requests
app.use(limiter)



app.use("/api/v1", router )




//undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail", data:"note Found"})
})

module.exports = app;