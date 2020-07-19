import React, { Component } from "react";
import '../App.css';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImg: [],
    };
    this.handelChange = this.handelChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const {memes}   = response.data;
        console.log(memes[0]);
        this.setState({
          allMemeImg: memes,
        });
      });
  }

  handelChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handelSubmit=(event)=>{
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
    const ranadMemeImg = this.state.allMemeImg[randNum].url
    this.setState({ randomImage: ranadMemeImg})

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handelChange}
            placeholder="Top text here..."
          />
          <br />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handelChange}
            placeholder="Bottom text here..."
          />
          <button>Gen</button>
        </form>
        <div>
          <img src={this.state.randomImage} alt="Something gonna wrong...." />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
export default MemeGenerator;
