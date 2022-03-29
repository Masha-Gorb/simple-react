import React from 'react'
import Message from "./Message";
import {AlternativeMessage} from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Super-mentor',
    message: 'npm start нажимал?',
    time: '22:34',
}

const alternativeMessageData = {
    avatar: 'https://avatanplus.com/files/resources/mid/5831abb1a1c5b1588206adff.png',
    name: 'Super-student',
    message: 'ура, все получилось',
    time: '22:48',
}

function HW1() {
    return (
        <div>
            <hr/>
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}/>
            <hr/>
        </div>
    )
}

export default HW1
