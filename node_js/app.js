const express=require('express')
const router=require('./router/router.js')
const cores=require('cors')
require('dotenv').config()

const app=express()

app.use(cores())

app.use(router)


app.listen(1000,()=>console.log('connected to 1000 port'))