import MyOrder from "../MyOrder";
import OrderCommand from "./OrderCommand";

export function addOrder(order: MyOrder): OrderCommand {
    console.log("this is  addOrder action.");
    return { type: 'ADD_ORDER', order };
}