import jwt from 'jsonwebtoken';

const verify=(req,res,next)=>{
 const tockencheck=req.headers['authorization'];
 //console.log(tockencheck);
 const extractedToken=tockencheck.split(' ')[1];// "bearer",<token> -> gives token only
 if(extractedToken){
  jwt.verify(extractedToken,process.env.SECRET_KEY,(err,decode)=>{
    if(err){
        res.json({
            message:"this is wrong",err:err
        }).status(500)
    }
    else{
        console.log(decode);
    }
  })
  }
  else{

  }
}
export default verify;