// import React from 'react'

import { useState } from "react";
import Message from "./Message"
// import SendMessages from "./SendMessages"

const ChatBox = () => {

  const [value, setValue] = useState("");
  const [chatData, setChatData] = useState(["hi"]);
  console.log(value);
  const handleMessages = (e) => {
    e.preventDefault();
    // console.log(value);
    // value.push(value)
    chatData.push(value)
    setValue("");




  }
  // console.log(chatData)


  // const messages =
  //   [
  //     {
  //       id: 1,
  //       name: "Jack",
  //       message: "Hello John"

  //     },
  //     {
  //       id: 2,
  //       name: "John",
  //       message: "Hello jack"

  //     }
  //   ]
  return (
    <div className="pb-44 pt-20 conatinerWrap">
      <Message
      // key={message.id}
      chatData={chatData}
      // name={name}
      />
      {/* <SendMessages/> */}

      <div className="bg-gray-200 fixed bottom-0 w-full py-8 shadow-lg">
        <form className="containerWrap flex"
          onSubmit={handleMessages}>

          <input
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
            type="text"
            value={value}
            onChange={(e) => {
              // e.preventDefault;
              setValue(e.target.value);
            }}
          />
          <button
            className="w-auto bg-gray-500 text-white rounded-r-lg  px-5"
            type="submit">Send</button>
        </form>
      </div>

    </div>
  )
}

export default ChatBox