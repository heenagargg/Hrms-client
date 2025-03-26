import axios from 'axios'
const API_BASE_URL="http://localhost:5070/hrms"

export const addNewEmployee=async(newEmployeeData)=>{
    console.log("first",newEmployeeData)
    try {
        const response=await axios.post(`${API_BASE_URL}/auth/addNewEmployee`,{
            fullName:newEmployeeData.fullName,
            email:newEmployeeData.email,
            role:newEmployeeData.role,
            teamName:newEmployeeData.teamName,
            designation:newEmployeeData.designation
          })
          if(response.data.success){
              return response
          }
    } catch (error) {
        console.log("error",error)
        if (error.response) {
            return error.response
          } else if (error.request) {
            console.error("No response received:", error.request);
          } else {
            console.error("Request Error:", error.message);
          }
    }
   
}

export const EmailVerification=async(verifyToken)=>{
    const response=await axios.post(`${API_BASE_URL}/auth/verifyEmail?tempToken=${verifyToken}`)
    return response
}