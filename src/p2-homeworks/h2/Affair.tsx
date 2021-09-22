import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: () => void // need to fix any - done
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback()}// need to fix

    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
