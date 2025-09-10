const AsyncHandler=(RequestHandler)=>async (req, res, error)=>{
  try {
    await RequestHandler(req, res, error)
    
  } catch (error) {
    res.status(error.code).json({
        success:false,
        message:error.message,
    })
  }
}


export {AsyncHandler}
