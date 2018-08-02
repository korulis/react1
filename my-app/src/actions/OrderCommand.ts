import MyOrder from "../MyOrder";

interface OrderCommand{
    type: string;
    order: MyOrder;
}

export default OrderCommand;