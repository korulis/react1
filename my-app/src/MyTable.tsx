import * as React from 'react';
// import MyFirstRendererParams from './MyFirstRendererParams';
import MySingleRowsComponent from './MyRowsComponent';

class MyTable extends React.Component{

    

//    const MyFirstRenderer = (perams:MyFirstRendererParams) =>{
//        return(<tr><td>{perams.Order.Address}</td><td>{perams.Order.Phone}</td></tr>);
//    };



public render(){

  let order = {Address:"Staneviciaus g", Phone: "23424"};

return(
  <table>    
    <tr>
      <td> ADDRESS </td>
      <td> PHONE </td>
      <td> NUMBER_OF_PIZZAS </td>
    </tr>
    <MySingleRowsComponent Order={order}/>
  </table>
  ); 
}

}





export default MyTable;