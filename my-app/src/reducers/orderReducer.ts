
export default function orderReducer(state: any = [], action: any) {
    console.log("orderReducer");

    switch (action.type) {
        case "ADD_ORDER":
            return [...state,
            Object.assign({}, action.course)
            ];

        default:
            return state;
    }

}