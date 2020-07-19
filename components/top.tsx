import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const Top = React.memo(() => (
  <div className="top content">
    <div className="left">
      <h1 className="title">
        PhotoGraph
      </h1>
      <div className="download">
        <a className="downloadApple" target="downloadApple" href="https://storage.googleapis.com/photograph-d8011.appspot.com/dist/PhotoGraph-0.1.0.dmg">
          <FontAwesomeIcon style={{ fontSize: '2em', marginRight: '0.3em', top: 3, position: 'relative' }} icon={faApple} />
          Download .dmg
        </a>
      </div>       
    </div>
    <div className="right">
      <img src="../mac.png" />
    </div>

    <style jsx>{`
      img {
        width: 100%;
        display: block;
      }

      .top {
        display: flex;
        align-items: center;
      }
      .left {
        flex: 1;
      }
      .right {
        flex: 2;
      }

      .title {
        font-family: 'Noto Serif', serif;
        letter-spacing: 0.2em;
      }

      .download {
        display: flex;
        justify-content: center;
      }
      .downloadApple {
        border: 1px white solid;
        padding: 0.5em 2em 0.7em 2em;
        font-weight: bold;
        background-color: white;
        color: black;
        text-decoration: none;
      }

      @media screen and (max-width: 700px) {
        .top {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
));

export default Top;