// import React from 'react'

const Message = ({message}) => {
  return (
    <div>
    <div className="chat chat-start">
 
  <div className="chat-header">
   {message.name}

  </div>
  <div className="chat-bubble">{message.message}</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  
  
  <div className="chat-header">
    Anakin

  </div>
  <div className="chat-bubble">Hii!</div>
  <div className="chat-footer opacity-50">
   
  </div>
</div>
    </div>
  )
}

export default Message