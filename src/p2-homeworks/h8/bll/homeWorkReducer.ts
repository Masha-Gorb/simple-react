import {PeopleType, UserType} from "../HW8";

type ActionType = {type: 'sort', payload: 'up'} | {type: 'sort-down', payload: 'down'} | {type: 'check', payload: number}

export const homeWorkReducer = (state: PeopleType, action: ActionType): PeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            // need to fix
            return newState
        }
        case 'sort-down': {
            // need to fix
            const newState = [...state]
            return newState.reverse()
        }
        case 'check': {
            // need to fix

            return state.filter(a => a.age >= action.payload)
        }
        default: return state
    }
}

// export const homeWorkReducerAC = (payload: string) => {
//     return {
//         type: 'sort',
//         payload
//     } as const
// }