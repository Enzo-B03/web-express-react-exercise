import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state = {
    response: {}
  };

  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
      console.log("from api " + res.data[0].question);
      response.map(item=>{
        console.log(item[0].question)
      });
    });
  };


  // renderAnswerOptions(key) {
  //   return (
  //     <AnswerOption
  //       key={key.content}
  //       answerContent={key.content}
  //       answerType={key.type}
  //       answer={props.answer}
  //       questionId={props.questionId}
  //       onAnswerSelected={props.onAnswerSelected}
  //     />
  //   );
  // }

    render() {
    return (
      <div className="App">
        <h1>Hello from the front-end</h1>
        <h1>{this.state.response}</h1>
      </div>
    )
  }
};

export default App;


