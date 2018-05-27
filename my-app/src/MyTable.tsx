import * as React from 'react';
// import MyFirstRendererParams from './MyFirstRendererParams';
import MySingleRowsComponent from './MyRowsComponent';
import MyOrder from './MyOrder';

class MyTable extends React.Component{

    

//    const MyFirstRenderer = (perams:MyFirstRendererParams) =>{
//        return(<tr><td>{perams.Order.Address}</td><td>{perams.Order.Phone}</td></tr>);
//    };



public render(){ 

  let orders:MyOrder[] = [{Address:"Staneviciaus g", Phone: "23424"}];

return(
  <table>    
    <tr>
      <td> ADDRESS </td>
      <td> PHONE </td>
      <td> NUMBER_OF_PIZZAS </td>
    </tr>
    <MySingleRowsComponent orders={orders}/>
  </table>
  ); 
}

}





export default MyTable;