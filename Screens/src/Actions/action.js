export const saveFormData=(data)=>{
    console.warn("Action invoked")
      return {type: "saveformdata", payload: data }
      
}
export const saveUserData=(data)=>{
    return {type: "saveuserdata", payload: data }
    
}