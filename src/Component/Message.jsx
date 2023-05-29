// import React from 'react'

import { Fragment } from "react"

const Message = ({ chatData }) => {
  return (
    <div>
      {/* left chats */}
      {

        chatData?.map((text, i) => {
          return (<Fragment key={i}>
            {
              false ? <div className="chat chat-start">
                <div className="chat-header">
                  {'message.name'}
                </div>
                <div className="chat-bubble">{text}</div>
                <div className="chat-footer opacity-50">
                  Delivered
                </div>
              </div>
                :
                <div className="chat chat-end">
                  <div className="chat-header">
                    Anakin
                  </div>
                  <div className="chat-bubble">{text}</div>
                  <div className="chat-footer opacity-50">
                  Delivered
                  </div>
                </div>
            }
          </Fragment>)
        })


      }




      {/* right chats */}


    </div>
  )
}

export default Message