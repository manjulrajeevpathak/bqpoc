import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 

class App extends Component {

constructor(props) {
    super(props);
    this.state = {items: [{},{},{},{}], myItem: [{}]};

  }

  componentDidMount() {
    this.UserList("NSE");
  }

  UserList(name){
    return $.getJSON('https://dawndeal-manjulrajeevpathak.c9users.io/api/v1/getQuint/' + name)
     .then((data) => {
        console.log(data);
        this.setState({ items: data, myItem: data[0]});
      });
  }


handleClick(event) {

    console.log(event);
    this.setState({ myItem: event});
}

  handleChange(event) {

    let value = event.target.value;
    console.log(value);

    return $.getJSON('https://dawndeal-manjulrajeevpathak.c9users.io/api/v1/getQuint/' + value)
     .then((data) => {
        console.log(data);
        this.setState({ items: data, myItem: data[0]});
      });
}


  render() {

    const item = this.state.items;
    const myItem = this.state.myItem;

    return (

      <div className="App">

        <nav>
    <div className="top-nav-container">
      <div className="top-nav">
        Bloomberg the Company & Its Products
      </div>
    </div>
    <div className="nav-container">
      <div className="logo"></div>
      <div className="menu_right">
        <ul>
          <li>India's BQ</li>
          <li> Markets</li>
          <li> Business</li>
          <li> Law And Policy</li>
          <li> Politics</li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="realtime">
    <div className="real-status">
    <span className="share-type">SENSEX</span>
      <span className="price">31524.68</span>
      <div className="tileset__cell">
        <span className="cell-change-value is-bad">-270.78</span>
        <span className="cell-change-value-per is-good">-270.78</span>
      </div>
    </div>
    <div className="real-status">
    <span className="share-type">SENSEX</span>
      <span className="price">31524.68</span>
      <div className="tileset__cell">
        <span className="cell-change-value is-bad">-270.78</span>
        <span className="cell-change-value-per is-good">-270.78</span>
      </div>
    </div>
    <div className="real-status">
    <span className="share-type">SENSEX</span>
      <span className="price">31524.68</span>
      <div className="tileset__cell">
        <span className="cell-change-value is-bad">-270.78</span>
        <span className="cell-change-value-per is-good">-270.78</span>
      </div>
    </div>
    <div className="real-status">
    <span className="share-type">SENSEX</span>
      <span className="price">31524.68</span>
      <div className="tileset__cell">
        <span className="cell-change-value is-bad">-270.78</span>
        <span className="cell-change-value-per is-good">-270.78</span>
      </div>
    </div>
    <div className="real-status">
    <span className="share-type">SENSEX</span>
      <span className="price">31524.68</span>
      <div className="tileset__cell">
        <span className="cell-change-value is-bad">-270.78</span>
        <span className="cell-change-value-per is-good">-270.78</span>
      </div>
    </div>
    
  </div>
  

      <div className= "wrapper">
      <div className="realtime-container">
    </div>
        <div className="dropdown-container">
     <select ref="selectOption" onChange={(e) => this.handleChange(e)}>
               <option selected value="NSE" >NSE</option>
               <option value="BSE" >BSE</option>
            </select>
      </div>
  <div className="futures__summary-details">
      <div className="futures-spot-price">
        <span className="futures-details-label">Spot Price</span>
        <span className="futures-details-value">{myItem.spotprice}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">Basis</span>
        <span className="futures-details-value">{myItem.basis}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">1M Futures</span>
        <span className="futures-details-value">{myItem.basis}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">2M Futures</span>
        <span className="futures-details-value">{myItem.putcallratio}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">Rollover Spread</span>
        <span className="futures-details-value">{myItem.rolloverspread}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">Rollover %</span>
        <span className="futures-details-value">{myItem.putcallratio}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">Open Interest</span>
        <span className="futures-details-value">{myItem.openinterest}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">OI % Chg</span>
        <span className="futures-details-value">{myItem.oichg}</span>
      </div>
      <div className="futures-spot-price">
        <span className="futures-details-label">Put Call Ratio</span>
        <span className="futures-details-value">{myItem.putcallratio}</span>
      </div>
    </div>


  <div className="futures-detail container">
    
<main>
  
        <input id="tab1" type="radio" name="tabs" checked/>
        <label for="tab1">Open Interest Most Up</label>

        <input id="tab2" type="radio" name="tabs"/>
        <label for="tab2">Open Interest Most Down</label>
    
  <section id="content1">
    <div className="main-table">
      <div className="table-head">
        <div className="table-head-contents">Security</div>
        <div className="table-head-contents">Expiry</div>
        <div className="table-head-contents">Spot Price</div>
        <div className="table-head-contents">Premium / Discount</div>
        <div className="table-head-contents">Volume in contracts</div>
        <div className="table-head-contents">Open Interest in contracts</div>
        <div className="table-head-contents">OI (% Chg)</div>
        <div className="table-head-contents">Turnover</div>
        <div className="table-head-contents">Open Interest Turnover</div>
      </div>
      <div className="table-content">
        <div className="table-content-row" onClick={this.handleClick.bind(this, item[0])}>
          <div className="table-body-contents">{item[0].security}</div>
          <div className="table-body-contents">{item[0].expiry}</div>
          <div className="table-body-contents">{item[0].spotprice}</div>
          <div className="table-body-contents">{item[0].premium}</div>
          <div className="table-body-contents">{item[0].volumeincontracts}</div>
          <div className="table-body-contents">{item[0].openintrincontracts}</div>
          <div className="table-body-contents">{item[0].oichg}</div>
          <div className="table-body-contents">{item[0].turnover}</div>
          <div className="table-body-contents">{item[0].openturnover}</div>
        </div>
        <div className="table-content-row" onClick={this.handleClick.bind(this, item[1])}>
          <div className="table-body-contents">{item[1].security}</div>
          <div className="table-body-contents">{item[1].expiry}</div>
          <div className="table-body-contents">{item[1].spotprice}</div>
          <div className="table-body-contents">{item[1].premium}</div>
          <div className="table-body-contents">{item[1].volumeincontracts}</div>
          <div className="table-body-contents">{item[1].openintrincontracts}</div>
          <div className="table-body-contents">{item[1].oichg}</div>
          <div className="table-body-contents">{item[1].turnover}</div>
          <div className="table-body-contents">{item[1].openturnover}</div>
        </div>
        <div className="table-content-row" onClick={this.handleClick.bind(this, item[2])}>
          <div className="table-body-contents">{item[2].security}</div>
          <div className="table-body-contents">{item[2].expiry}</div>
          <div className="table-body-contents">{item[2].spotprice}</div>
          <div className="table-body-contents">{item[2].premium}</div>
          <div className="table-body-contents">{item[2].volumeincontracts}</div>
          <div className="table-body-contents">{item[2].openintrincontracts}</div>
          <div className="table-body-contents">{item[2].oichg}</div>
          <div className="table-body-contents">{item[2].turnover}</div>
          <div className="table-body-contents">{item[2].openturnover}</div>
        </div>
        <div className="table-content-row" onClick={this.handleClick.bind(this, item[3])}>
          <div className="table-body-contents">{item[3].security}</div>
          <div className="table-body-contents">{item[3].expiry}</div>
          <div className="table-body-contents">{item[3].spotprice}</div>
          <div className="table-body-contents">{item[3].premium}</div>
          <div className="table-body-contents">{item[3].volumeincontracts}</div>
          <div className="table-body-contents">{item[3].openintrincontracts}</div>
          <div className="table-body-contents">{item[3].oichg}</div>
          <div className="table-body-contents">{item[3].turnover}</div>
          <div className="table-body-contents">{item[3].openturnover}</div>
        </div>
      </div>
    </div>
  </section>
    
  <section id="content2">
    <p>demo content</p>
  </section>
    
</main>
  </div>
</div>

      </div>
    );
  }
}

export default App;
