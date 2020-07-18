import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
    };
    this.handelChange = this.handelChange.bind(this)
  }

  handelChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handelChange}
            placeholder="Top text here..."
          />
          <br/>
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handelChange}
            placeholder="Bottom text here..."
          />
          <button>Gen</button>
        </form>
        {this.state.topText}
        <br/>
        {this.state.bottomText}
      </div>
    );
  }
}
export default MemeGenerator;
