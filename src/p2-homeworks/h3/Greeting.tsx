import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any -done
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any -done
    totalUsers: number // need to fix any -done
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const spanClass = error ? s.errorMessage : '' // need to fix with (?:)

    return (
        <div>
            <input type='text' value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={spanClass}>{error}</span>
            <button onClick={() => addUser(name)}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
