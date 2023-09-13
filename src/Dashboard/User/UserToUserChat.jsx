import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useUserToUserMessageById } from "../../hooks/useUserToUserMessageById";
import UseSingleUser from "../../hooks/useSingleUser";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import moment from "moment";

const UserToUserChat = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  const [messages, refetchMessages] = useUserToUserMessageById(id);
  const [myData, myDataRefetch] = UseSingleUser(user?.email);

  const findOtherUser = messages?.array?.find((a) => a !== user?.email);

  const [otherUserData, outherUserRefetch] = UseSingleUser(findOtherUser);

  console.log(otherUserData);

  const buttonHandler = (e) => {
    event.preventDefault();

    let filter = messages?.chat?.filter((a) => a) || [];

    const text = e.target.name.value;

    const chat = [
      ...filter,
      {
        name: myData?.displayName,
        email: myData?.email,
        text: text,
        img: myData?.photoURL,
        time: new Date().getTime(),
      },
    ];

    fetch(
      `https://book-verse-server-phi.vercel.app/postChatUserToUser?id=${messages?._id}`,
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

          //   setShowAlert(true)

          refetchMessages();
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const refetchInterval = setInterval(() => {
      refetchMessages();
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

  return (
    <div className="sm:p-5 min-h-screen flex items-center">
      <div className="flex-1 justify-between flex flex-col h-[600px] rounded-2xl lg:max-w-[800px] md:mx-auto mt-0 bg-slate-300 my-5 md:pt-0">

        {/* Head chat section  */}
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 bg-blue-300 sm:ps-5 rounded-t-2xl">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <img
                src={otherUserData?.photoURL}
                className="w-[80px] h-[80px] rounded-[100%]"
              />
            </div>
            <div className="flex flex-col leading-tight ">
              <p className="mr-3 font-bold text-2xl text-slate-50">
                {otherUserData?.displayName}
              </p>
              <p className="font-mono text-slate-50  text-sm mr-3">
                {otherUserData?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-slate-200 justify-end h-full rounded-b-2xl">
          {/* message display section  */}
          <div
            ref={chatContainerRef}
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto  overflow-x-hidden scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch max-h-[27rem] "
          >
            {messages?.chat?.map((message, index) => (
              <div key={index}>
                {user?.email !== message?.email ? (
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span
                            className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-300 text-white 
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
                        src={message?.img}
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
          <div className="border-t-2 border-gray-200 px-4 p-2 rounded-b-2xl mb-2 sm:mb-0">
            <form onSubmit={buttonHandler} className="relative flex  gap-5 items-center">
              <span className="absolute inset-y-0 flex items-center"></span>
              <input
                name="name"
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-white rounded-md py-2"
                required
              />
              {/* <div className="absolute right-0 items-center inset-y-0 hidden sm:flex"> */}

              <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
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

export default UserToUserChat;
