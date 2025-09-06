class APIError extends Error {
    constructor(statusCode,message,data={}){
        super(message)
        this.statusCode = statusCode
        this.data = data
        this.message = message
    }
}

export const success = (message, data = {}) => { 
    return {success:true, message, data}
}

export const failure = (statusCode,message, data = {}) => {
    throw new APIError(statusCode,message,data)
}
