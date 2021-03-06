import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";

import logo from "../assets/logo.png";

import {setDirection,resetDirection, fetchData} from '../actions';
class EventSearchResult extends React.Component {
    constructor(){
        super();
        this.handleDirection = this.handleDirection.bind(this);
    }
    

    componentDidMount(){
        return [this.props.resetDirection(), this.props.fetchData()]
        // then list the events here with event components,

        // 

        // then implement search from landing page
    };

    componentDidUpdate(){
        console.log(this.props.fetch.map(el => el.title));
    }
    

    handleDirection = (e) =>{
        // const direction = e.target.value;
        // console.log(e.target);
        this.props.setDirection("eventoverview")  // need to find a solution for this sloppy solution / making divs button?
    }
    

    render() {
        
        const {direction} = this.props;
        return direction === "eventoverview" ? (
            <Redirect push to="/eventoverview"/>) : 
            direction === "logout"? (
            <Redirect push to="/"/>
            ):
            (<ReactFullpage
                //full page options
                licenseKey={"YOUR_KEY_HERE"}
                scrollingSpeed={1000}
                loopBottom={true}
                navigation
                navigationPosition={"left"} /* Options here */
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className="container ">
                                    <header className="links">
                                        <img src={logo} alt="Hej Dj Logo" />
                                        {/* <button className="fs16 red">
                                            Login
                                        </button> */}
                                        <button className="fs16 red">
                                            Logout
                                        </button>
                                        {/* <i className="exit fas fa-times"></i> */}
                                        {/* <i className="settings fas fa-cog"></i> */}
                                    </header>

                                    <div className="logo-section-wrapper fs24 reg">
                                        <div className="event-search">
                                            <form>
                                                <label>
                                                    <div className="search-form-input-border">
                                                        <input
                                                            className="center search-form-input"
                                                            placeholder="Event, DJ, Date ..."
                                                            type="text"
                                                            defaultValue="Berlin King Kong Kicks"
                                                        ></input>
                                                    </div>
                                                </label>
                                            </form>
                                        </div>
                                        <div className="center fs24 reg">
                                            <button className="black">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="result-list-wrap">
                                        <div className="result-list-item">
                                            <div className="result-image-container">
                                                <div className="result-image event-03"></div>
                                            </div>
                                            <div onClick={this.handleDirection} value="eventoverview" className="result-info-container">
                                                <p>23/04/20</p>
                                                <p>Fvck Genres</p>
                                                <hr />
                                                <p>Musik&#38;Frieden</p>
                                            </div>
                                        </div>

                                        <div className="result-list-item">
                                            <div className="result-image-container">
                                                <div className="result-image event-02"></div>
                                            </div>
                                            <div className="result-info-container">
                                                <p>24/04/20</p>
                                                <p>Lass Zocken</p>
                                                <hr />
                                                <p>Lido Berlin</p>
                                            </div>
                                        </div>

                                        <div className="result-list-item">
                                            <div className="result-image-container">
                                                <div className="result-image event-01"></div>
                                            </div>
                                            <div className="result-info-container">
                                                <p>01/05/20</p>
                                                <p>The early days</p>
                                                <hr />
                                                <p>Lido Berlin</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="center">
                                        <button
                                            className="fs16 white"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            More results
                                        </button>
                                        <div
                                            className="arrow"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            <i className="bt-down"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section">
                                <div className="container">
                                    <div className="result-list-wrap">
                                        <div className="result-list-item">
                                            <div className="result-image-container">
                                                <div className="result-image ghost"></div>
                                            </div>
                                            <div className="result-info-container">
                                                <p>00/00/00</p>
                                                <p>This is a result</p>
                                                <hr />
                                                <p>Some info</p>
                                            </div>
                                        </div>

                                        <div className="result-list-item">
                                            <div className="result-image-container">
                                                <div className="result-image ghost"></div>
                                            </div>
                                            <div className="result-info-container">
                                                <p>24/04/20</p>
                                                <p>Lass Zocken</p>
                                                <hr />
                                                <p>Lido Berlin</p>
                                            </div>
                                        </div>

                                        <div className="result-list-item">
                                            <div className="result-image-container">
                                                <div className="result-image ghost"></div>
                                            </div>
                                            <div className="result-info-container">
                                                <p>00/00/00</p>
                                                <p>This is a result</p>
                                                <hr />
                                                <p>Some info</p>
                                            </div>
                                        </div>

                                        <div className="result-list-item">
                                            <div className="result-image-container">
                                                <div className="result-image ghost"></div>
                                            </div>
                                            <div className="result-info-container">
                                                <p>00/00/00</p>
                                                <p>This is a result</p>
                                                <hr />
                                                <p>Some info</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="center">
                                        <button
                                            className="fs16 white"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            Back to search
                                        </button>
                                    </div>
                                    <footer className="fs16 center">
                                        <a href="#">Contact &amp; Imprint</a>
                                    </footer>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetDirection: () => {dispatch(resetDirection())},
        setDirection: (direction) => {dispatch(setDirection(direction))},
        fetchData: () => {dispatch(fetchData())}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventSearchResult);
