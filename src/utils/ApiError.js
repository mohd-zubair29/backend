class ApiError extends Error{                            //This Is Used To Handle The Errors for APIS
    constructor(){
        statusCode,  
        message="Something Went Wrong",
        errors=[],
       statck=""

    }
    super(message){
        this.statusCode=statusCode
        this.message=message
        this.errors=errors
        this.success=false
        this.data=null
    


        if (statck) {
            this.statck=this.statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}