import React from 'react'
import s from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
};

function Message(props: MessageDataType) {
    return (
        <div>
            <img className={s.img} src={props.avatar}/>
            <div className={s.message}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <div>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
