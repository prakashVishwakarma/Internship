// import React from 'react'

import Message from "./Message"

const ChatBox = () => {
    const messages =
    [
        {
            id:1,
            name:"Jack",
            message:"Hello John"

        },
        {
            id:2,
            name:"John",
            message:"Hello jack"

        }
    ]
  return (
    <div className="pb-44 pt-20 conatinerWrap">
    {
        messages.map((message) => 
          
              <Message
                key={message.id}
                message={message}
                name={name}
              />  
            
          )  }
    
    </div>
  )
}

export default ChatBox