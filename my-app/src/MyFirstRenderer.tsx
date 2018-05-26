import * as React from 'react';
import IMyFirstRendererParams from 'src/IMyFirstRendererParams';
import IOrder from './IOrder';

const MyFirstRenderer = (perams:IOrder) =>{
    return(<div>${perams.Address}</div>) 
}




export default MyFirstRenderer;