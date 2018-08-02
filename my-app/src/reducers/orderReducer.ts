import OrderCommand from "../actions/OrderCommand";
import MyOrder from "../MyOrder";

export default function orderReducer(state: MyOrder[], action: OrderCommand): MyOrder[] {
    console.log("orderReducer");

    switch (action.type) {
        case "ADD_ORDER":
            let imut = [...state, { ...action.order }];
            return imut;

        default:
            return state;
    }

}