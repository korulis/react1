import MyOrder from "../MyOrder";

export function addOrder(order: MyOrder){
    console.log("this is  addOrder action.");
    return {type: 'ADD_ORDER', order};
}