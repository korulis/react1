import * as React from 'react';
import MySubmissionBlockProps from './MySubmissionBlockProps';
import MyOrder from './MyOrder';
import { connect } from 'react-redux';
import { addOrder } from './actions/orderActions';
import { Dispatch, bindActionCreators } from 'redux';

class MySubmissionBlock extends React.Component<MySubmissionBlockProps, MyOrder>{

  constructor(props: MySubmissionBlockProps) {
    super(props);

    this.state = this.initialState;
  }

  initialState: MyOrder = { Address: "", Phone: "" };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleClick = (event: React.SyntheticEvent<any>) => {
    this.props.onSumbission(this.state);
    this.setState(this.initialState);

    if (this.props.addOrder) {
      this.props.addOrder(this.state);
    }

    event.preventDefault();
  }

  handleKeyPress = (event: React.KeyboardEvent<any>) => {
    if (event.key === "Enter") {
      this.handleClick(event);
    }
  }

  public render() {
    return (
      <div>
        <label>This is submission block</label>
        <button onClick={this.handleClick}>Add</button>
        <label>Address:</label>
        <input
          type="text"
          onChange={(e) => { this.setState({ Address: e.target.value }); }}
          value={this.state.Address}
          onKeyPress={this.handleKeyPress}
        />
        <label>Phone:</label>
        <input
          type="text"
          onChange={(e) => { this.setState({ Phone: e.target.value }); }}
          value={this.state.Phone}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }

}

function mapStateToProps(state: any, ownProps?: MySubmissionBlockProps): any {
  return {
    orders: state.orderReducer
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return bindActionCreators({
    addOrder
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MySubmissionBlock);