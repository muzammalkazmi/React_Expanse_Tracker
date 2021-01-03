export default function AppReducer (state, action) {
    switch (action.type) {
        case 'delete_transaction':
        return{
            ...state,
            transactions:state.transactions
            .filter(trasaction=>trasaction.id !==action.payload)
        }
        default: return state
    }
}