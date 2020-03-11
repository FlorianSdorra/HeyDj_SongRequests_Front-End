import React from "react";
import "../scss/App.scss";
// import FullPage from "./fullPage";
import { connect } from "react-redux";
import logo from '../assets/logo.png';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <header>
            <div className="logo-heydj">
              <img src={logo} alt="logo hey dj"></img>
            </div>
            <div className="header-right-wrap">
              {/* <button className="login-button">Login</button> */}
              {/* <i className="exit fas fa-times"></i> */}
              <i className="settings fas fa-cog"></i>
            </div>
          </header>
        <main>
          
        </main>
        <footer>
          <div>
          <a href="#">Contact &amp; Imprint</a>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(App);
