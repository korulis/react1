import * as React from 'react';
import MyFirstRendererParams from './MyFirstRendererParams';

const MyFirstRenderer = (perams:MyFirstRendererParams) =>{
    return(<div>{perams.Order.Address}</div>) ;
};




export default MyFirstRenderer;