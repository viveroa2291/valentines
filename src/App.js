import React, { useState } from 'react';
import './App.css';

function App() {
  const [envelopeState, setEnvelopeState] = useState({
    isInnerOpen: false,
    isOuterOpen: false,
    isHeartBtnHidden: false,
    isCloseBtnVisible: false,
    isMessage1Hidden: false,
    isMessage2Visible: false,
    isYesButton: false,
    isNoButton: false
  });

  const toggleEnvelope = () => {
    setEnvelopeState((prevState) => ({
      isInnerOpen: !prevState.isInnerOpen,
      isOuterOpen: !prevState.isOuterOpen,
      isHeartBtnHidden: !prevState.isHeartBtnHidden,
      isCloseBtnVisible: !prevState.isCloseBtnVisible,
      isMessage1Hidden: !prevState.isMessage1Hidden,
      isMessage2Visible: !prevState.isMessage2Visible,
      isYesButtonVisible: !prevState.isYesButtonVisible,
      isNoButtonVisible: !prevState.isNoButtonVisible
    }));
  const toggleYes = () => {

  }
  const toggleNo = () => {
    
  }
  };

  return (
    <div className="App">
      <article>
        <div className="envelope-container">
          <p className={`message message-1 ${envelopeState.isMessage1Hidden ? 'hide' : ''}`}>
            <strong>Happy Valentine's Day!</strong>
            <br/><br/>Click on the heart seal to open the envelope.
          </p>
          <p className={`message message-2 ${envelopeState.isMessage2Visible ? 'show' : ''}`}>Will You be my Valentine?</p>
          <div className='options'>
            <button className={`yesBtn ${envelopeState.isYesButtonVisible ? 'show' : ''}`}>Yes</button>
            <button className={`noBtn ${envelopeState.isNoButtonVisible ? 'show' : ''}`}>No</button>  
          </div>
          <button className={`close-btn otherButton ${envelopeState.isCloseBtnVisible ? 'show' : ''}`} onClick={toggleEnvelope}>close envelope</button>
          <button className={`heart-btn otherButton ${envelopeState.isHeartBtnHidden ? 'hide' : ''}`} onClick={toggleEnvelope}>&#10084;</button>
          <div className="envelope-flap">
            <svg className="inner">
              <polygon className={`inner-polygon ${envelopeState.isInnerOpen ? 'inner-open' : ''}`} points="5,0 345,0 175,145"></polygon>
            </svg>
            <svg className="outer" id="outer">
              <polygon
                className={`outer-polygon ${envelopeState.isOuterOpen ? 'outer-open' : ''}`}
                points="5,150 345,150 175,0"
              ></polygon>
            </svg>
          </div>
          <div className="envelope-base"></div>
        </div>
      </article>
    </div>
  );
}

export default App;
