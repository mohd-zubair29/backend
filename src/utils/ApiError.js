class ApiError extends Error{                            //This Is Used To Handle The Errors for APIS
    constructor(){
        statusCode,  
        message="Something Went Wrong",
        errors=[],
       stack=""

    }
    super(message){
        this.statusCode=statusCode
        this.message=message
        this.errors=errors
        this.success=false
        this.data=null
    


        if (stack) {
            this.stack=this.stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}