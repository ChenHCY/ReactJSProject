import data from './data.json';
import './App.css';
import React, { useState, useEffect } from 'react';
//{ useState, useEffect } is used fro function component

//class component
class App2 extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dataList: [],
        visibleItems: 0,
      }
      this.showMore = this.showMore.bind(this);
    }

    componentDidMount(){
      if(Array.isArray(data)){
        this.setState({dataList: data})
      }
    }


    showMore(){
      this.setState({visibleItems: this.state.visibleItems + 10})
    };
  

    render(){
      const { dataList, visibleItems } = this.state; //get the value from state()

      return (
        <div>
          <button onClick={this.showMore}>Show More</button>
          {dataList.slice(0, visibleItems).map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
            </div>
          ))}
    
        </div>
      );
    }
}


//function componenet
function App() {
  const [jsonData, setJsonData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    setJsonData(data);
  }, []);


  const showMore = () => {
    setVisibleItems(visibleItems + 10);
  };


  return (
    <div>
      <button onClick={showMore}>Show More</button>
      {jsonData.slice(0, visibleItems).map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        </div>
      ))}

    </div>
  );

}

export default App;
