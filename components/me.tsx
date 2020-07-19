import React from 'react';

const Me = React.memo(() => (
  <div className="content whoami">
    <h2>whoami</h2>
    <p>
      <a href="https://twitter.com/_horotter" target="twitter">Keisuke Horota</a>
      <br />
      Software developer
      <br />
      Based in Tokyo
    </p>

    <style jsx>{`
      .whoami {
        margin-top: 5em;
      }
      .whoami h2 {
        text-align: center;
      }
      .whoami p {
        text-align: center;
      }
      .whoami a {
        color: white;
      }
    `}</style>
  </div>
));

export default Me;