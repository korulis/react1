import MyOrder from './MyOrder';

class OrderDtoMapper {
    static toMyOrder = (orderDto: any): MyOrder => {
        let order: MyOrder = { Address: orderDto.address, Phone: orderDto.phone, Name:orderDto.name, OrderRef:orderDto.orderRef };
        return order;
    }

    static toOrderDto = (order: MyOrder): any => {
        let orderDto = { address: order.Address, phone: order.Phone };
        return orderDto;
    }
}

export default OrderDtoMapper;