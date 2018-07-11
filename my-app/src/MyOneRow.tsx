import * as React from 'react';
import MyOrder from './MyOrder';


interface MyOneRowParams {
    order: MyOrder;
}

const MyOneRow = (params: MyOneRowParams) => {
    return (
        <tr>
            <td>{params.order.Address}</td>
            <td>{params.order.Phone}</td>
        </tr>
    );
};




export default MyOneRow;