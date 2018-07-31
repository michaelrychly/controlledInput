import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const root = document.getElementById('root');

function isValidPostalCode(entry){
  const postalCodeRegularExpression = /[A-Z]\d[A-Z]\s?\d[A-Z]\d/gi
  return postalCodeRegularExpression.test(entry);
}

class PostalCode extends React.Component {
  /* Implement Me! */
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  changeValue(inputValue){
    this.setState({inputValue});
  }

  render() {
    const onChange = evt => {
      this.changeValue(evt.target.value);
    }

    const validation = isValidPostalCode(this.state.inputValue) ? (
      <div className="valid">
    <label>Postal Code <small>Valid</small></label><br/>
    <input type='text'value={this.state.inputValue} onChange={onChange} />
  </div>
    ) : (
    <div className="error">
    <label>Postal Code <small>Error</small></label><br/>
    <input type='text' value={this.state.inputValue} onChange={onChange}/>
  </div>
    )

    const isRequired = this.state.inputValue === "" ? (
      <div>
    <label>Postal Code <small>Required</small></label><br/>
    <input type='text' value={this.state.inputValue} onChange={onChange}/>
  </div>
    ) : (
      validation
    )

    return(
      <div id='root'>
        {isRequired}
        </div>
    );
  }
}

ReactDOM.render(<PostalCode/>, root);