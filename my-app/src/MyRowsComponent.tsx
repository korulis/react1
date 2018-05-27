import * as React from 'react';
import MyFirstRendererParams from './MyFirstRendererParams';

const MySingleRowsComponent = (perams:MyFirstRendererParams) =>{
    return(<tr><td>{perams.Order.Address}</td><td>{perams.Order.Phone}</td></tr>);
};




export default MySingleRowsComponent;