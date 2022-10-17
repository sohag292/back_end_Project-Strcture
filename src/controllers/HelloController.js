exports.helloget=(req,res)=>{
    res.status(200).json({status:"success", data:"Hello get"})
}

exports.hellopost=(req,res)=>{
    res.status(201).json({status:"success", data:"Hello post"})
}