import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
// import { toast } from "react-hot-toast";

import TitleHook from "../../Shared/TitleHook/TitleHook";
import Loading from "../../Loading/Loading";

import { Link } from "react-router-dom";

import { AuthContext } from "../../../Context/AuthProvider";
import MyTaskCard from "../MyTaskCard/MyTaskCard";
import toast from "react-hot-toast";

const Ongoing = () => {
  const { user } = useContext(AuthContext);

  //titlehook
  TitleHook("My Work");

  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(
        `https://task-management-serve.vercel.app/addtask?email=${user.email}`
      );

      const data = await res.json();
      const undoneItem = data.filter((task) => task.ongoing);
      return undoneItem;
    },
  });
  const handleTaskDelete = (id) => {
    const processed = window.confirm("Are you sure want to delete");
    if (processed) {
      fetch(`https://task-management-serve.vercel.app/tasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="dark:bg-[#0F172A] pb-5 min-h-screen lg:absolute top-10 left-[400px]">
      <div className="lg:relative lg:after:absolute after:content-normal after:bg-black after:opacity-30 after:h-full after:w-full after:top-0 after:left-0">
        <img
          src="https://i.ibb.co/RBKrwd3/wishlist.png"
          alt=""
          className="w-full bg-no-repeat  bg-cover lg:relative"
        />

        <div className="absolute top-16 md:top-32 lg:top-1/3 left-0 right-0 text-center z-10">
          <h1 className="error font-bold  lg:text-5xl text-4xl text-white">
            Your Existing Task
          </h1>
          <p className="md:text-lg text-white flex justify-center items-center  font-bold mt-3 text-brand2 text-base">
            <Link to="/" className="hover:-translate-x-1 duration-300">
              <span>Home</span>
            </Link>
          </p>
        </div>
      </div>

      <div className="pb-16 min-h-screen">
        <h3 className="text-2xl text-center mt-10 font-bold dark:text-white">
          {tasks.length < 2 ? (
            <div>You have {tasks?.length} Active Task</div>
          ) : (
            <div>You have {tasks?.length} Active Tasks</div>
          )}
        </h3>
        {tasks &&
          tasks?.map((task) => (
            <MyTaskCard
              key={task._id}
              refetch={refetch}
              task={task}
              handleTaskDelete={handleTaskDelete}
              isLoading={isLoading}
            ></MyTaskCard>
          ))}
      </div>
    </div>
  );
};

export default Ongoing;
