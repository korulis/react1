import * as React from 'react';
import Order from './MyOrder';

interface MyFirstRendererParams{
    orders : Order[];
}

const MySingleRowsComponent = (perams:MyFirstRendererParams) =>{
    return(<tr><td>{perams.orders[0].Address}</td><td>{perams.orders[0].Phone}</td></tr>);
};




export default MySingleRowsComponent;