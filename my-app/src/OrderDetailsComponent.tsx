import * as React from 'react';
import RestOrders from './RestOrders';
import MyOrder from './MyOrder';
import {Link} from 'react-router-dom';

// import { match } from "react-router";

interface OrderDetailsComponentState {
    order: MyOrder;
}

class OrderDetailsComponent extends React.Component<{}, OrderDetailsComponentState>{

    id: string;

    constructor(props: any) {
        super(props);

        this.id = props.match.params.orderRef;
        this.state = { order: { Address: "", Phone: "" } };
    }

    async componentDidMount() {
        console.log("labas");
        let order = await RestOrders.fetchOrder(this.id);
        console.log("jo", order);

        this.setState({ order: order });
    }


    render() {
        let currentOrder: MyOrder = { Address: "", Name: "", Phone: "", OrderRef: "" };

        if (this.state.order) {
            currentOrder = this.state.order;
        }


        return (
            <>
                <Link to="/" className="btn btn-primary">Back</Link>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <td> FIELD </td>
                            <td> VALUE </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Address</td>
                            <td>{currentOrder.Address}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{currentOrder.Phone}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{currentOrder.Name}</td>
                        </tr>
                        <tr>
                            <td>OrderRef</td>
                            <td>{currentOrder.OrderRef}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default OrderDetailsComponent;