import * as React from 'react';
// import MyFirstRendererParams from './MyFirstRendererParams';
import MyRowsComponent from './MyRowsComponent';
import MyOrder from './MyOrder';
import MyRowsComponentParams from './MyRowsComponentParams';

class MyTable extends React.Component<{},MyRowsComponentParams>{

  constructor(){
    super({});

    let orders:MyOrder[] = [
      {Address:"Staneviciaus g", Phone: "23424"},
      {Address:"Ateitieds g", Phone: "353535s"},
      {Address:"Ateities g", Phone: "353535"}
    ];

    this.state = {orders:orders};
  
  }

HandleClick = () => {
  let currentOrders = this.state;
  currentOrders.orders.pop();
  this.setState(currentOrders);
}

public render(){ 

return(
  <div>
    <button onClick={this.HandleClick}>
      Add
    </button>
  <table>    
    <tr>
      <td> ADDRESS </td> 
      <td> PHONE </td>
      <td> NUMBER_OF_PIZZAS </td>
    </tr>
    <MyRowsComponent orders={this.state.orders}/>
  </table>
  </div>
  ); 
}

}





export default MyTable;