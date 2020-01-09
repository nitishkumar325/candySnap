import {combineReducers} from 'redux'

const InitialState = {
    name: '',
    phone_no: '',
    username: '',
    email:"",
    password:'',
    userlogin:false,
    uid:''



}
const SaveFormDataReducer = (state = InitialState, action) => {
    console.warn("state action=>",action.type)
    console.warn("state in save form data reducer=>",action.payload)
    switch (action.type) {
        case "saveformdata":
            console.warn("case invoked here ")
           const data= {
                ...state,
                ...action.payload._value,
                userlogin:true
                
        
            }
            console.warn("final data=>",data)
            return data;
        default:
            return state;
    }
}

const rootReducer=combineReducers({
    SaveFormDataReducer:SaveFormDataReducer,
   
});
export default rootReducer