import * as React from 'react';
import MySubmissionBlockProps from './MySubmissionBlockProps';
import MySubmissionBlockState from './MySubmissionBlockState';

class MySubmissionBlock extends React.Component<MySubmissionBlockProps, MySubmissionBlockState>{

  constructor(props: MySubmissionBlockProps) {
    super(props);

    this.state = this.initialState;
  }

  initialState: MySubmissionBlockState = { order: { Address: "", Phone: "" } };

  handleAddressChange: React.ChangeEventHandler<any> = (event: React.ChangeEvent<any>) => {
    // alert("change");
    let futureValue = event.target.value;
    this.setState({ order: { Phone: this.state.order.Phone, Address: futureValue } });

    event.preventDefault();
  }

  handlePhoneChange: React.ChangeEventHandler<any> = (event: React.ChangeEvent<any>) => {
    // alert("change");
    let futureValue = event.target.value;
    this.setState({ order: { Phone: futureValue, Address: this.state.order.Address } });

    event.preventDefault();
  }

  handleClick = (event: React.SyntheticEvent<any>) => {
    this.props.onSumbission(this.state.order);
    this.setState(this.initialState);
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
        <input type="text" onChange={this.handleAddressChange} value={this.state.order.Address} onKeyPress={this.handleKeyPress} />
        <label>Phone:</label>
        <input type="text" onChange={this.handlePhoneChange} value={this.state.order.Phone} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }

}

export default MySubmissionBlock;