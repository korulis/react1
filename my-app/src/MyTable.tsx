import * as React from 'react';
import * as uuid from 'uuid';
// import MyFirstRendererParams from './MyFirstRendererParams';
import MyRowsComponent from './MyRowsComponent';
import MyOrder from './MyOrder';
import MyRowsComponentParams from './MyRowsComponentParams';
import MySubmissionBlock from "./MySubmissionBlock";

class MyTable extends React.Component<{}, MyRowsComponentParams>{

  constructor() {
    super({});

    let orders: MyOrder[] = [
      { Address: "Staneviciaus g", Phone: "23424" },
      { Address: "Ateitieds g", Phone: "353535s" },
      { Address: "Ateities g", Phone: "353535" }
    ];

    this.state = { orders: orders };

  }

  toMyOrder = (orderDto: any): MyOrder => {
    let order: MyOrder = { Address: orderDto.address, Phone: orderDto.phone };
    return order;
  }

  fromMyOrder = (order: MyOrder): any => {
    let orderDto = { address: order.Address, phone: order.Phone };
    return orderDto;
  }


  addOrder = async (order: MyOrder) => {
    let id = uuid.v4();
    let body = JSON.stringify(this.fromMyOrder(order));
    console.log("Create this.", body);
    let request = (await fetch(
      `http://localhost:5000/orders/${id}`,
      {
        body: body,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      }
    ));
    await request.json();
  }

  fetchOrders = async (): Promise<MyOrder[]> => {
    let requestPayload = await fetch("http://localhost:5000/orders/");
    let orderDtos = await requestPayload.json();
    console.log(requestPayload);
    console.log(orderDtos);
    return (orderDtos).map((x: any) => this.toMyOrder(x));
  }


  async componentDidMount() {
    let orders = await this.fetchOrders();
    this.setState({ orders: orders });
  }

  handleChange = (event: any) => {
    event.preventDefault();
  }

  handleSubmission = async (newOrder: MyOrder) => {
    this.addOrder(newOrder);
    this.setState({ orders: this.state.orders.concat(newOrder) });
  }

  public render() {

    return (
      <div>
        <MySubmissionBlock onSumbission={this.handleSubmission} />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <td> ADDRESS </td>
              <td> PHONE </td>
              <td> NUMBER_OF_PIZZAS </td>
            </tr>
          </thead>
          <MyRowsComponent orders={this.state.orders} />
        </table>
      </div>
    );
  }

}





export default MyTable;