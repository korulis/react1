import * as React from 'react';
import MyRowsComponent from './MyRowsComponent';
import MyOrder from './MyOrder';
import RestOrders from './RestOrders';
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

  async componentDidMount() {
    let orders = await RestOrders.fetchOrders();
    this.setState({ orders: orders });
  }

  handleChange = (event: any) => {
    event.preventDefault();
  }

  handleSubmission = async (newOrder: MyOrder) => {
    RestOrders.addOrder(newOrder);
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