
import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import UseAxiousPublic from "../../../UseAxiousPublic/UseAxiousPublic";
  



const Addtask = () => {
    const { register, handleSubmit ,reset } = useForm()
    const axiosPublic=UseAxiousPublic()
    const onSubmit = async (data) => {
        console.log(data)
        
        if (data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
              
            }
            const menuRes = await axiosPublic.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                   reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
    }
}

    return (
        <div>
         
            <div className="w-1/2 mx-auto shadow-lg absolute top-10 left-[400px]  bg-slate-400">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Work Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Work Title"
                            {...register('worktitle', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="">
                        {/* category */}
                       

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Work Details</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Work Details"
                                {...register('workdetails', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    

                    

                    <button className="btn">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addtask;