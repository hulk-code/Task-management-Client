import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"https://task-management-serve.vercel.app"
})

const UseAxiousPublic = () => {
    return axiosPublic;
    
};

export default UseAxiousPublic;