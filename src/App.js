import React, { useState } from 'react';
import './App.css';
import over from './images/over.jpg';
import pikachu from './images/pikachu.jpg';
function App() {
  const [envelopeState, setEnvelopeState] = useState({
    isInnerOpen: false,
    isOuterOpen: false,
    isHeartBtnHidden: false,
    isCloseBtnVisible: false,
    isMessage1Hidden: false,
    isMessage2Visible: false,
    isYesButtonVisible: false,
    isNoButtonVisible: false,
    isImageVisible: false
  });
  const openEnvelope = () => {
      setEnvelopeState((prevState) => ({
        ...prevState, 
        isInnerOpen: true,
        isOuterOpen: true,
        isHeartBtnHidden: true,
        isCloseBtnVisible: true,
        isMessage1Hidden: true,
        isMessage2Visible: true,
        isYesButtonVisible: true,
        isNoButtonVisible: true,
        isImageVisible: false
      }))
    }
  const closeEnvelope = () => {
    setEnvelopeState((prevState) => ({ 
      ...prevState, 
      isInnerOpen: false,
      isOuterOpen: false,
      isHeartBtnHidden: false,
      isCloseBtnVisible: false,
      isMessage1Hidden: false,
      isMessage2Visible: false,
      isYesButtonVisible: false,
      isNoButtonVisible: false,
      isImageVisible: false
  }));
}
  const toggleYes = () => {
    setEnvelopeState((prevState) => ({
      ...prevState,
      isYesButtonVisible: false,
      isNoButtonVisible: false,
      isImageVisible: true,
      selectedImage: pikachu
    }));
  };
  const toggleNo = () => {
    setEnvelopeState((prevState) => ({
      ...prevState,
      isYesButtonVisible: false,
      isNoButtonVisible: false,
      isImageVisible: true, 
      selectedImage: over
    }));
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
            <button className={`yesBtn ${envelopeState.isYesButtonVisible ? 'show' : ''}`} onClick={toggleYes}>Yes</button>
            <button className={`noBtn ${envelopeState.isNoButtonVisible ? 'show' : ''}`} onClick={toggleNo}>No</button>  
          </div>
          <img className={`imageChosen ${envelopeState.isImageVisible ? 'show' : ''}`} src={envelopeState.selectedImage} alt=''/>
          <button className={`heart-btn otherButton ${envelopeState.isHeartBtnHidden ? 'hide' : 'show'}`} onClick={openEnvelope}>&#10084;</button>
          <button className={`close-btn otherButton ${envelopeState.isCloseBtnVisible ? 'show' : ''}`} onClick={closeEnvelope}>close envelope</button>
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
