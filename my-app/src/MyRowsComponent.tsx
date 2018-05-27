import * as React from 'react';
import MyFirstRendererParams from './MyFirstRendererParams';

const MySingleRowsComponent = (perams:MyFirstRendererParams) =>{
    return(
    <div>
        <tr>
            <td>{perams.orders[0].Address}</td>
            <td>{perams.orders[0].Phone}</td>
        </tr>
        <tr>
            <td>{perams.orders[1].Address}</td>
            <td>{perams.orders[1].Phone}</td>
        </tr>
    </div>
    );
};




export default MySingleRowsComponent;