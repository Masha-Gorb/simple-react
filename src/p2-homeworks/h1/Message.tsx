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
        <div className={s.message}>
            <img className={s.img} src={props.avatar}/>

            <div className={s.angle}/>
            <div className={s.content}>
                <h3 className={s.name}>{props.name}</h3>
                <p className={s.text}>{props.message}</p>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
