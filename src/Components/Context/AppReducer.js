export default function AppReducer (state, action) {
    switch (action.type) {
        case 'delete_transaction':
        return{
            ...state,
            transactions:state.transactions
            .filter(trasaction=>trasaction.id !==action.payload)
        }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]

            }
        default: 
        return state
    }
}