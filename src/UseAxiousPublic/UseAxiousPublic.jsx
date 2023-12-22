import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"http://localhost:5000"
})

const UseAxiousPublic = () => {
    return axiosPublic;
    
};

export default UseAxiousPublic;