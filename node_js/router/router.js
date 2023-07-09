const expres=require('express')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const {userRegModel, vendorRegModel,eventModel}=require('../dataBase/db.js')

const router=expres.Router()

router.use(expres.json())
router.use(expres.urlencoded({extended:false}))

router.get('/',(req,res)=>{
    res.send('hello world')
})

router.post('/userReg',async (req,res)=>{
     try 
     {
        // console.log(req.body);
        const {name,email,contact,password}=req.body
        const token=jwt.sign(email,process.env.secretKey)
        let data=await userRegModel.find({email:email})
        if(data.length>0)
        {
           res.json('already registered')
        }
        else
        {
            const doc=new userRegModel({
                name:name,
                email:email,
                contact:contact,
                password:password,
                token:token
             })
             doc.save()
             res.json('registred successfully')
        }
     } 
     catch (error) 
     {
        console.log(error);
     }
})

router.post('/vendorReg',async (req,res)=>{
    try 
    {
       // console.log(req.body);
       const {name,email,contact,password}=req.body
       let data=await vendorRegModel.find({email:email})
       if(data.length>0)
       {
           res.json('already registered')
       }
       else
       {
        const token=jwt.sign(email,process.env.secretKey)
        const doc=new vendorRegModel({
            name:name,
            email:email,
            contact:contact,
            password:password,
            token:token
        })
        doc.save()
        res.json('registred successfully')
       }
       
    } 
    catch (error) 
    {
       console.log(error);
    }
})

router.post('/userLogin',async (req,res)=>{
    try 
    {
        // console.log(req.body);
        let {phoneOrEmial,password}=req.body
        if(phoneOrEmial.includes("@"))
        {
            // console.log('mail');
            let data=await userRegModel.findOne({email:phoneOrEmial})
            if(data!==null)
            {
                if(data.password===password)
                {
                    console.log('Yes');
                    // res.json(data.token)
                    res.json(['login success',data])
                }
                else
                {
                    console.log("No");
                    res.json("incorrect password")
                }
            }
            else
            {
                res.json("user not registered")
            }
        }
        else
        {
            // console.log('number');
            let data=await userRegModel.findOne({contact:phoneOrEmial})
            if(data!==null)
            {
                if(data.password===password)
                {
                    console.log('Yes');
                    // res.json(data.token)
                    res.json(['login success',data])
                }
                else
                {
                    console.log("No");
                    res.json("incorrect password")
                }
            }
            else
            {
                res.json("user not registered")
            }
        }
    } 
    catch (error) 
    {
        res.json("error")
    }
})

router.post('/vendorLogin',async (req,res)=>{
    try 
    {
        // console.log(req.body);
        let {phoneOrEmial,password}=req.body
        if(phoneOrEmial.includes("@"))
        {
            // console.log('mail');
            let data=await vendorRegModel.findOne({email:phoneOrEmial})
            if(data!==null)
            {
                if(data.password===password)
                {
                    console.log('Yes');
                    // res.json(data.token)
                    res.json(['login success',data])
                }
                else
                {
                    console.log("No");
                    res.json("incorrect password")
                }
            }
            else
            {
                res.json("user not registered")
            }
        }
        else
        {
            // console.log('number');
            let data=await vendorRegModel.findOne({contact:phoneOrEmial})
            if(data!==null)
            {
                if(data.password===password)
                {
                    console.log('Yes');
                    // res.json(data.token)
                    res.json(['login success',data])
                }
                else
                {
                    console.log("No");
                    res.json("incorrect password")
                }
            }
            else
            {
                res.json("user not registered")
            }
        }
    } 
    catch (error) 
    {
        res.json("error")
    }
})

// router.post('/cresteEvent',(req,res)=>{
//     try 
//     {
//         let {eventName,placeOfEvent,proposalType,eventType,budget,startDate,endDate,description,food,Events,image,token}=req.body
//         // console.log(req.body);
//         let doc=new eventModel({
//             eventName:eventName,
//             placeOfEvent:placeOfEvent,
//             proposalType:proposalType,
//             eventType:eventType,
//             budget:budget,
//             startDate:startDate,
//             endDate:endDate,
//             description:description,
//             food:food,
//             Events:Events,
//             image:image,
//             token:token
//         })
//         // doc.save()
//         res.json('event data stored to DB')
//     } 
//     catch (error) 
//     {
        
//     }
// })

router.post('/cresteEvent/:token/:vendor_name/:vendor_email',(req,res)=>{
    try 
    {
        let token=req.params.token
        let vendor_name=req.params.vendor_name
        let vendor_email=req.params.vendor_email
        console.log(req.params);
        let {eventName,placeOfEvent,proposalType,eventType,budget,startDate,endDate,description,food,Events,image}=req.body
        // console.log(req.body);
        let doc=new eventModel({
            vendor_name:vendor_name,
            email_id:vendor_email,
            eventName:eventName,
            placeOfEvent:placeOfEvent,
            proposalType:proposalType,
            eventType:eventType,
            budget:budget,
            startDate:startDate,
            endDate:endDate,
            description:description,
            food:food,
            Events:Events,
            image:image,
            token:token
        })
        doc.save()
        res.json('event data stored to DB')
    } 
    catch (error) 
    {
        
    }
})

router.get('/fetchingEventData/:token',async (req,res)=>{
    try 
    {
        let token=req.params.token
        // console.log(token);
        let data=await eventModel.find({token:token})
        // console.log(data);
        res.json(data)
    } 
    catch (error) 
    {
        res.json('backend error')
    }
})

router.get('/fetchingEventData',async (req,res)=>{
    try 
    {
        // let token=req.params
        let data=await eventModel.find()
        // console.log(data);
        res.json(data)
    } 
    catch (error) 
    {
        res.json('backend error')
    }
})

//route for selected event

router.get('/selectedEvent/:id',async (req,res)=>{
    try 
    {
        let id=req.params.id
        // console.log(token);
        let data=await eventModel.find({_id:id})
        // console.log(data);
        res.json(data)
        // if(data.length>0)
        // {
        //     res.json(data)
        // }
        // else
        // {
        //     res.json('no data')
        // }
    } 
    catch (error) 
    {
        res.json([])
    }
})

router.get('/fetchingEventData',async (req,res)=>{
    try 
    {
        // let token=req.params
        let data=await eventModel.find()
        // console.log(data);
        res.json(data)
    } 
    catch (error) 
    {
        res.json('backend error')
    }
})

//route to delete event 
router.get('/deleteEvent/:id',async (req,res)=>{
    try 
    {
        let id=req.params.id
        console.log(id);
        let data=await eventModel.findByIdAndDelete(id)
        // console.log(data);
        res.json('event deleted')
    } 
    catch (error) 
    {
        res.json('backend error')
    }
})

//edit existing data

router.patch('/updateData/:id',async (req,res)=>{
    let id=req.params.id
    console.log(req.body);
    let {eventName,placeOfEvent,proposalType,eventType,budget,startDate,endDate,description,food,Events,image}=req.body
    let data=await eventModel.findByIdAndUpdate({_id:id},req.body)
    // data.save()
    // console.log(data);
    res.json('update successfully')
})


module.exports=router