var express = require('express');
var nodemailer = require('nodemailer')
var fs = require('fs')
const path = require('path')
var router = express.Router();

//nodemailer transporter
var transport = nodemailer.createTransport({
    host:"server210.web-hosting.com",
    port: 465,
    secure:true,
    auth:{
        user:"newsletter@lateform.com",
        pass:"newsletter@lateform.com"                    
    },
   
})

router.post('/sendNewsLetter',(req,res)=>{
    let templatePath = path.join(__dirname,'template.html')
    let emailTemplate = fs.readFileSync(templatePath, 'utf8')
    let personalizeTitleForEmail = emailTemplate.replace('{{title}}',req.body.title)
    let personalizeImageForEmail = personalizeTitleForEmail.replace('{{imageurl}}',req.body.imgUrl)
    let link = 'https://labs.lateform.com'+req.body.urlId+"/"+req.body.fileName
    let htmlMail = personalizeImageForEmail.replace('{{routeLink}}',link)
    let mailOption = {
        from:"support@lateform.com",
        to:req.body.userEmails,
        subject:req.body.title,
        html:htmlMail
    }
transport.sendMail(mailOption,(err,info)=>{
if(err){
res.status(400).send(err)
}
else{
    console.log(info)
res.status(200).send("mail sent")
}
})
})
module.exports = router