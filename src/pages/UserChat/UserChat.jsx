import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useAdminMessage } from "../../hooks/useAdminMessage";
import { useUserMessage } from "../../hooks/useUserMessage";

import logo from "../../../public/logo.png";
import { useRef } from "react";
import { useAllUsersData } from "../../hooks/useAllUsersData";
import moment from "moment";

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const UserChat = () => {
  const { user, setShowAlert, showAlert } = useContext(AuthContext);

  const [messages, userRefetch] = useUserMessage(user?.email);

  const [, adminRefetch] = useAdminMessage(messages?._id);

  const [, allUsersRefetch] = useAllUsersData();

  const buttonHandler = (e) => {
    event.preventDefault();

    let filter = messages?.chat?.filter((a) => a) || [];

    const text = e.target.name.value;

    const chat = [
      ...filter,
      {
        name: user?.displayName,
        email: user.email,
        text: text,
        img: messages?.photoURL,
        time: new Date().getTime(),
      },
    ];

    fetch(
      `https://book-verse-server-phi.vercel.app/postChat?email=${user?.email}`,
      {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(chat),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res?.modifiedCount > 0) {
          e.target.reset();

          userRefetch();

          adminRefetch();

          allUsersRefetch();

          setShowAlert(true);
        }
      });
  };

  useEffect(() => {
    const refetchInterval = setInterval(() => {
      userRefetch();
      adminRefetch();
      allUsersRefetch();
    }, 3000); // Check every 3 seconds

    return () => {
      clearInterval(refetchInterval);
    };
  }, []);

  const chatContainerRef = useRef(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  //for render and show from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" sm:p-5 min-h-screen flex items-center">
      <div className="flex-1 justify-between flex flex-col h-[600px] rounded-2xl lg:max-w-[800px] md:mx-auto mt-0 bg-slate-300 my-5 md:pt-0 ">
        {/* <h1 className='text-center text-3xl font-semibold'>Chat With Seller for any query</h1> */}
        {/* top section chat header */}
        <div className="flex items-center sm:gap-10 justify-between sm:justify-start p-3 bg-gradient-to-r rounded-t-2xl from-[#82bdd2] from-80% to-cyan-500">
          <div>
            <img src={logo} alt="" className="w-10  mx-auto" />
          </div>
          <div>
            <h2 className="md:text-4xl text-xl font-mono font-bold text-slate-100">
              Chat Support{" "}
              <HiOutlineChatBubbleLeftRight className="inline mx-1" />
            </h2>
            <h2 className="leading-none inline-block text-slate-100">
              We are here to Chat!{" "}
            </h2>
          </div>
        </div>
        {/* <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">

          <img src={logo} className='w-[100px] h-[100px] rounded-[100%]' />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="text-2xl mt-1 flex items-center">
            <span className="text-gray-700 mr-3">Book Verse</span>
          </div>

        </div>
      </div>

      </div> */}

        <div>
          <div
            ref={chatContainerRef}
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto overflow-x-hidden scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch max-h-[27rem] "
          >
            {messages?.chat?.map((message, index) => (
              <div key={index}>
                {message?.name === "Admin" ? (
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span
                            className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-400 text-white
                      tooltip  tooltip-right"
                            data-tip={moment(message?.time).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          >
                            {message?.text}
                          </span>
                        </div>
                      </div>
                      <img
                        src={logo}
                        className="w-[30px] h-[30px] rounded-[100%]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div>
                          <span
                            className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white 
                         tooltip  tooltip-left"
                            data-tip={moment(message?.time).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          >
                            {message?.text}
                          </span>
                        </div>
                      </div>

                      {/* <img src={message?.img} className='w-[30px] h-[30px] rounded-[100%]' /> */}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* foot section  */}
          <div className="border-t-2 border-gray-200 px-4 p-4 mb-2 sm:mb-0">
            <form
              onSubmit={buttonHandler}
              className="relative flex items-center gap-5"
            >
              <span className="absolute inset-y-0 flex items-center"></span>
              <input
                name="name"
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                required
              />
              {/* <div className="absolute right-0 items-center inset-y-0 hidden sm:flex"> */}

              <button className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
