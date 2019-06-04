import React from 'react';

class About extends React.Component {
  render() {
    const appIconPath = `file://${window.dirname}/icons/${
      window.mistMode
    }/icon2x.png`;
    const appName = window.mistMode === 'mist' ? 'Mist' : 'XinFin Network';

    return (
      <div className="row popup-windows about">
        <div className="col col-4 ">
          <img
            className={`left-overlay ${window.mistMode}`}
            src={appIconPath}
            style={{
              position: 'relative',
              top: '-40px',
              left: '-132%',
              width: '255%'
            }}
          />
        </div>
        <div className="col col-8 ">
          <h1>{appName}</h1>
          <p>
            Version {window.mist.version}
            <br />
            License {window.mist.license}
            <br />
            GitHub{' '}
            <a href="https://github.com/xinfinorg/Node-Setup" target="_blank">
            github.com/xinfinorg/Node-Setup
            </a>
          </p>
          <small>Copyright 2019 XinFin</small>
        </div>
      </div>
    );
  }
}

export default About;
