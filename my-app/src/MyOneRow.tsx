import * as React from 'react';
import MyOrder from './MyOrder';


interface MyOneRowParams{
    order : MyOrder;
}

const MyOneRow = (params:MyOneRowParams) =>{
    return(
    <div>
        <tr>
            <td>{params.order.Address}</td>
            <td>{params.order.Phone}</td>
        </tr>
    </div>
    );
};




export default MyOneRow;