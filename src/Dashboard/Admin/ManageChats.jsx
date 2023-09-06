// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAllUsersData } from "../../hooks/useAllUsersData";
import { useEffect } from "react";
import moment from "moment";


const ManageChats = () => {


  // useEffect(() => {
  //   fetch(`https://book-verse-server-phi.vercel.app/allUserData`)
  //     .then((res) => res.json())
  //     .then((res) => setAllData(res))
  //     .catch((error) => console.log(error));
  // }, []);


  const [allUsersData, allUsersRefetch] = useAllUsersData()

  console.log(allUsersData)




  const filterUser = allUsersData?.filter((a) => a?.role === 'user');

  const allChatsUsers = filterUser.filter(a => a?.chat)







  const allChats = [...allChatsUsers].sort((a, b) => {
    const lastMessageA = a.chat[a.chat.length - 1];
    const lastMessageB = b.chat[b.chat.length - 1];

    if (!lastMessageA || !lastMessageB) {
      return 0; // Handle cases where messages are missing
    }

    return lastMessageB.time - lastMessageA.time;
  });




  useEffect(() => {
    const refetchInterval = setInterval(() => {
      allUsersRefetch()


    }, 3000); // Check every 3 seconds

    return () => {
      clearInterval(refetchInterval);
    };
  }, []);


  return (

    // rounded-tr-[50px] rounded-bl-[50px]

    <div className=" px-5  md:px-20 lg:px-20  w-full   ">
      {allChats?.map((a) => (
       <div key={a?._id}>

         <Link to={`singleChat/${a?._id}`} 
          
          className="my-10 p-[5px] py-[15px]  space-y-3    overflow-hidden 
         
               hover:rounded-[0px]  border-b-[2px]  border-r-[2px] hover:bg-gray-200
          flex   "
        >

          <section className=" w-[15%] mt-2 pl-2 "
          >
            <img src={a?.photoURL} className=" rounded-[100%] h-[60px] w-[60px]" alt="" />
          </section>

          <section className="w-[60%] md:w-[70%] lg:w-[70%]  pl-[15px] md:pl-0 lg:p-0 space-y-1">
            <p className="text-[17px]  font-400   font-[500]  text-gray-600"> {a?.displayName?.slice(0, 30)}</p>

            {a?.role === 'Admin' ? (
              a?.chat && a?.chat.length > 0 ? (
                <p className="text-25px font-500  text-[500] font-[500]">
                  Your reply: {a?.chat[a?.chat.length - 1]?.text.slice(0, 27)}
                </p>
              ) : (
                <p className="text-[25px] font-500 ">No reply available</p>
              )
            ) : (
              a?.chat && a?.chat.length > 0 ? (
                <p className="text-[15px] font-700 font-[500] text-gray-500">
                  {a?.chat[a?.chat.length - 1]?.name === 'Admin' ? 'You' : 'New Message'} : {`${a?.chat[a?.chat.length - 1]?.text.slice(0, 27)}${a?.chat[a?.chat.length - 1]?.text.length >26 ? ` ...` :''}`}
                </p>
              ) : (
                <p className="text-[15px] font-700 ">No new text available</p>
              )
            )}
          </section>
{/* 

          <section className=" w-[30%] md:w-[20%] lg:w-[20%]  mx-auto px-5 ">
            <Link to={`singleChat/${a?._id}`} className=" w-full text-center   font-[500] mt-3
            group relative inline-block overflow-hidden  px-0 py-1 focus:outline-none focus:ring  rounded-br-[100px] rounded-tl-[100px]  
         " 
            >
             

              <span
                className="absolute inset-y-0 left-0 w-[0px] md:w-[0px] lg:w-[0px]  bg-gray-700 transition-all group-hover:w-full group-active:bg-indigo-500 duration-[1s]  "
              ></span>

              <span
                className="relative text-sm font-medium  transition-colors group-hover:text-white "
              >
                View
              </span>



            </Link>
          </section> */}


          <section  >
            
          {a?.chat && a?.chat?.length > 0 && <p className="text-[12px] font-[500] text-gray-500 pt-[25px] "
          > {moment(a?.chat[a?.chat?.length -1]?.time).format('h:mm:ss a')}</p>}
     
               
          </section>


        </Link>
       </div>
      ))}
    </div>


  );
};

export default ManageChats;
