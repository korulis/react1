import * as React from 'react';
import MyOrder from './MyOrder';
import { Link } from 'react-router-dom';


interface MyOneRowParams {
    order: MyOrder;
}

const MyOneRow = (params: MyOneRowParams) => {
    let link: string = `order/${params.order.OrderRef}`;

    return (
        <tr>
            <td>{params.order.Address}</td>
            <td>{params.order.Phone}</td>
            <td>
                <Link to={link} >{params.order.OrderRef}</Link>
            </td>
        </tr>
    );
};




export default MyOneRow;