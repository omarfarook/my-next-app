
const initialState = {
    persons: [],
    id: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD_PERSON':
            const newPerson = {
                id: state.id + 1, // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }
        case 'REMOVE_PERSON':
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state
    }
};

export default reducer;