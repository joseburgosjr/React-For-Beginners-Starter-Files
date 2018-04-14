import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = e => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;