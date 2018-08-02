import MyOrder from './MyOrder';
import { addOrder } from './actions/orderActions';


interface MySubmissionBlockProps {
    onSumbission: (order: MyOrder) => void;
    addOrder?: typeof addOrder;
}

export default MySubmissionBlockProps;