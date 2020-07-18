import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImg: [],
    };
    this.handelChange = this.handelChange.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({
          allMemeImg: memes,
        });
      });
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
