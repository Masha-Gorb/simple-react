import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const priorityClass = '' + s[props.affair.priority]


    return (
        <div className={s.affairContainer}>
            <div>
                <span>{props.affair.name}</span>
            </div>
            <span className={priorityClass}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
