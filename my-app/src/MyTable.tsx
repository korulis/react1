import * as React from 'react';
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

  fetchOrders = async () =>
    await (await fetch("http://localhost:5000/orders/")).json()

  async componentDidMount() {
    let data = await this.fetchOrders();

    let orderss: MyOrder[] = data.map((x: any) => ({ Address: x.address, Phone: x.phone }));
    console.log(orderss);

    this.setState({ orders: orderss });


    // fetch("http://localhost:5000/orders/")
    //   .then(results => {
    //     let data = results.json();
    //     return data;
    //   }).then(data => {
    //     console.log(data);
    //     console.log(data[0].address);
    //   });
  }

  handleChange = (event: any) => {
    event.preventDefault();
  }

  handleSubmission = (newOrder: MyOrder) => {
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