export const success = (message, data = {}) => { 
    return {success:true, message, data}
}

export const failure = (message, data = {}) => {
    return { success: false, message, data }
}