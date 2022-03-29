import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    const setClass = (filter: FilterType) => {
            return s.button + (props.filter === filter ? ' ' + s.active: '')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={setClass('all')}>All</button>
            <button onClick={setHigh} className={setClass('high')}>High</button>
            <button onClick={setMiddle} className={setClass('middle')}>Middle</button>
            <button onClick={setLow} className={setClass('low')}>Low</button>
        </div>
    )
}

export default Affairs
