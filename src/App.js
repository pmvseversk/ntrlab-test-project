import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchNum: '',
      array: [1, 2, 4, 44, 50 , 10, 13],
      arraySum: [-1, 2, -4, 44, 50 , 10, 13],
      sumPositive:0,
      sumNegative: 1
    };

    this.binarySearch = this.binarySearch.bind(this);
    this.sum = this.sum.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  binarySearch = (value) => {
    let arr = [...this.state.array];
    let max = this.state.array.length;
    let mid = Math.floor(arr.length / 2);
    let val = parseInt(value);
    if (arr[mid] === val) {
      this.setState({array: [arr[mid]]});
    } else if (arr[mid] < val) {
      this.setState({array: arr.splice(mid, max)})
    } else if (arr[mid] > val) {
      this.setState({array: [arr[mid-1]]});
    } else {
      this.setState({array: ["Пусто."]});
      return -1;
    }
  };

  sum = () => {
    let arraySum = [...this.state.arraySum];
    let sumPositive = 0;
    let sumNegative = 1;

    arraySum.map((item) =>  {
      console.log(sumNegative)
      if(item < 0){
        sumNegative = sumNegative + item;
        sumPositive = sumPositive + (item * (-1));
      } else {
        sumPositive = sumPositive + item;
        sumNegative = sumNegative + (item * (-1));
      }
    });
    this.setState({sumPositive: sumPositive, sumNegative: sumNegative});
  };

  handleChange = (e) => {
    this.setState({searchNum: e.target.value})
  };

  render() {
    const {array, searchNum, arraySum, sumPositive, sumNegative} = this.state;
    return (
        <div className="App">
          <header className="App-header"/>
          <main>
            <section>
              <h2>1.</h2>
              Array example: <code> [{array.map((item, key) => (<span key={key}>{item}  </span>))}] </code>
              <input value={searchNum} onChange={this.handleChange}/>
              <button onClick={() => this.binarySearch(searchNum)}>search</button>
            </section>
            <section>
              <h2>2.</h2>
              Array example: <code> [{arraySum.map((item, key) => (<span key={key}>{item}  </span>))}] </code>
              <button onClick={() => this.sum(arraySum)}>search</button>
              <div>
                {
                  sumPositive !== 0 && <span>POSITIVE SUM: {sumPositive} </span>
                }
                {
                  sumNegative <= 0 && <span>NEGATIVE SUM: {sumNegative}</span>
                }
              </div>
            </section>

          </main>
          <footer/>
        </div>
    );
  }
}

export default App;
