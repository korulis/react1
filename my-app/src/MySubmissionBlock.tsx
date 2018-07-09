import * as React from 'react';
import MySubmissionBlockProps from './MySubmissionBlockProps';
import MySubmissionBlockState from './MySubmissionBlockState';

class MySubmissionBlock extends React.Component<MySubmissionBlockProps, MySubmissionBlockState>{

  constructor(props: MySubmissionBlockProps) {
    super(props);

    this.state = this.initialState;
  }

  initialState: MySubmissionBlockState = { order: { Address: "", Phone: "" } };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      order: {
        ...this.state.order,
        [event.target.name]: event.target.value
      }
    });
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
        <input type="text" onChange={this.handleChange} name="Address" value={this.state.order.Address} onKeyPress={this.handleKeyPress} />
        <label>Phone:</label>
        <input type="text" onChange={this.handleChange} name="Phone" value={this.state.order.Phone} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }

}

export default MySubmissionBlock;