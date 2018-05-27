import * as React from 'react';
import MyRowsComponentParams from './MyRowsComponentParams';
import MyOneRow from './MyOneRow';


const MyRowsComponent = (perams:MyRowsComponentParams) =>{
    return(
    <div>
        <MyOneRow order={perams.orders[0]}/>
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




export default MyRowsComponent;