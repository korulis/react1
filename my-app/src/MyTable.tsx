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
        <table>
          <tr>
            <td> ADDRESS </td>
            <td> PHONE </td>
            <td> NUMBER_OF_PIZZAS </td>
          </tr>
          <MyRowsComponent orders={this.state.orders} />
        </table>
      </div>
    );
  }

}





export default MyTable;