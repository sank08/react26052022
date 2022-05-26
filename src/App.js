import './App.css';
import { useState } from 'react'

function App() {
  return (
    <div className='main-container'>
      <Sidebar />
      <Section />
    </div>
  );
}

function Sidebar() {
  return (
    <div className='sideBar'>

    </div>
  );
}


function Header() {
  return (
    <div className='header'>
      <div className='menuShow'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" /></svg>
      </div>

    </div>
  );
}

function Section() {
  return (
    <div className='page-container'>
      <Header />
      <MainContainer />
    </div>
  );
}


function MainContainer() {
  return (
    <div className='main'>
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  const [state, setState] = useState("product");
  let getActive = (div) => {
    return state == div ? "active" : ""
  }

  let setActive = (val) => {
    setState(val);
  }

  let convertMoney = (val) => {
    let value = "";
    let round = Math.floor(val).toString();
    value = round.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "Rs. " + value;
  }

  let convertPer = (val) => {
    val = parseFloat(val);
    if (val)
      return parseFloat(val).toFixed(2);
    else
      return 0;
  }

  let data = [
    {
      "name": "Mutual Funds",
      "investment": "278024.00",
      "absolute": "20.52",
      "currentValue": "335087.00",
      "XIRR": "12.7229"
    },
    {
      "name": "Fixed Deposit",
      "investment": "10000.00",
      "absolute": "18.21",
      "currentValue": "11821.00",
      "XIRR": "0",
    },
    {
      "name": "NPS",
      "investment": "40200.00",
      "absolute": "-0.01",
      "currentValue": "40195.00",
      "XIRR": "0"
    },
    {
      "name": "Bond",
      "investment": "1516455.00",
      "absolute": "17.69",
      "currentValue": "1784717.00",
      "XIRR": "10"
    },
    {
      "name": "Capital Gain Bond",
      "investment": "200000.00",
      "absolute": "1.65",
      "currentValue": "203306.00",
      "XIRR": "0"
    },
    {
      "name": "Non Convertible Debentures",
      "investment": "200000.00",
      "absolute": "0.37",
      "currentValue": "200740.00",
      "XIRR": "0"
    },
    {
      "name": "Digital Gold",
      "investment": "51310.00",
      "absolute": "-13.33",
      "currentValue": "44472.00",
      "XIRR": "0"
    },
    {
      "name": "Sovereign Gold Bond",
      "investment": "98322.00",
      "absolute": "0",
      "currentValue": "98322.00",
      "XIRR": "0"
    }
  ];
  const [list, setList] = useState(data);

  return (
    <>
      <div className='row'>
        <div className='investment-dashboard'>
          <div className='title'>
            <span>Investment Summary</span>
          </div>
          <div className='invest-content'>
            <div className='row'>
              <div className='col-lg-3 col-md-3 item'>
                <strong>Rs. 23,94,311</strong>
                <span>Total Investment</span>
              </div>
              <div className='col-lg-3 col-md-3 item'>
                <strong>Rs. 27,18,660</strong>
                <span>Current Value</span>
              </div>
              <div className='col-lg-3 col-md-3 item'>
                <strong>12.72%
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ "marginLeft": "12px" }} width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M11.0005 6.61914L6.00049 1.61914L1.00049 6.61914" stroke="#22DB3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </strong>
                <span>XIRR</span>
              </div>
              <div className='col-lg-3 col-md-3 item'>
                <strong>13.55%
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ "marginLeft": "12px" }} width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M11.0005 6.61914L6.00049 1.61914L1.00049 6.61914" stroke="#22DB3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </strong>
                <span>Return</span>
              </div>
            </div>
            <div className='row invest-content-border'>
              <div className='col-lg-3 col-md-3 item'>
                <div className='in-value'>
                  <strong>Rs. 40,511</strong>
                  <span>Realised Gain <br /> (A)</span>
                </div>
                <div className='in-operator'>
                  <span>+</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-3 item'>
                <div className='in-value'>
                  <strong>Rs. 3,24,349</strong>
                  <span>Unrealised Gain <br /> (B)</span>
                </div>
                <div className='in-operator'>
                  <span>+</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-3 item'>
                <div className='in-value'>
                  <strong>Rs. 26,846</strong>
                  <span>Div/Int Paid <br /> (C)</span>
                </div>
                <div className='in-operator'>
                  <span>=</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-3 item'>
                <strong>Rs. 3,91,705</strong>
                <span>Total Profit <br /> (A+B+C)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <ul className='nav nav-tabs tabs'>
          <li onClick={() => setActive('product')} className={"nav-item " + getActive("product")}>
            <span className='nav-link'>Product Wise</span>
          </li>
          <li onClick={() => setActive('goal')} className={"nav-item " + getActive("goal")}>
            <span className='nav-link'>Goal Wise</span>
          </li>
        </ul>
        <div className='tab-content'>
          {state == "product" ?
            <div className="tab-panel">
              <div className='cls-title'>
                <span>Invested in</span>
              </div>
              <div className='list-container'>
                {
                  data.map(elm =>
                    <div key={elm.name} className='cls-list'>
                      <div className='cls-name' style={{ "width": "30%" }}>
                        <span >{elm.name}</span>
                      </div>
                      <div style={{ "width": "20%", "textAlign": "left" }}>
                        <strong>{convertMoney(elm.currentValue)}</strong>
                        <span>Current Value</span></div>
                      <div style={{ "width": "15%", "textAlign": "left" }}>
                        <strong>{convertMoney(elm.investment)}</strong>
                        <span>Invested Value</span>
                      </div>
                      <div style={{ "width": "15%", "textAlign": "left" }}>
                        <strong>{convertPer(elm.XIRR)}% {convertPer(elm.XIRR) ? <svg xmlns="http://www.w3.org/2000/svg" style={{ "marginLeft": "12px" }} width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M11.0005 6.61914L6.00049 1.61914L1.00049 6.61914" stroke="#22DB3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> : null} </strong>
                        <span>XIRR</span>
                      </div>
                      <div style={{ "width": "15%", "textAlign": "left" }}>
                        <strong>{convertPer(elm.absolute)}%  {convertPer(elm.absolute) > 0 ? <svg xmlns="http://www.w3.org/2000/svg" style={{ "marginLeft": "12px" }} width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M11.0005 6.61914L6.00049 1.61914L1.00049 6.61914" stroke="#22DB3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                          <path d="M1 1L7 7L13 1" stroke="#ED1F24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>}
                        </strong>
                        <span>Absolute</span>
                      </div>
                      <div style={{ "width": "5%", "textAlign": "right" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 16V12" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 16V12" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 8H12.01" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 8H12.01" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            :
            <div className="tab-panel">

            </div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
