import MyOrder from './MyOrder';
import * as orderActions from './actions/orderActions';



interface MySubmissionBlockProps {
    onSumbission: (order: MyOrder) => void;
    addOrder: typeof orderActions.addOrder;
}

export default MySubmissionBlockProps;