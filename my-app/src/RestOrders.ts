import MyOrder from './MyOrder';
import * as uuid from 'uuid';
import OrderDtoMapper from './OrderDtoMapper';
import getSetting from './AppSettings';

const repoBaseUrl:string = getSetting("backend-api");

class RestOrders {

    static addOrder = async (order: MyOrder) => {
        let id = uuid.v4();
        let body = JSON.stringify(OrderDtoMapper.toOrderDto(order));
        let response: Response = (await fetch(
            `${repoBaseUrl}orders/${id}`,
            {
                body: body,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ));
        await response.json();
    }

    static fetchOrders = async (): Promise<MyOrder[]> => {
        let response: Response = await fetch(`${repoBaseUrl}orders/`);
        let orderDtos = await response.json();
        return (orderDtos).map((orderDto: any) => OrderDtoMapper.toMyOrder(orderDto));
    }

    static fetchOrder = async (ref:string): Promise<MyOrder> => {
        let response: Response = await fetch(`${repoBaseUrl}orders/${ref}`);
        let orderDto = await response.json();
        return OrderDtoMapper.toMyOrder(orderDto);
    }
}

export default RestOrders;