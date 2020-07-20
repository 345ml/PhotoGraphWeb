import Head from 'next/head'
import Top from '../components/top';
import Me from '../components/me';

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>PhotoGraph</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="google-site-verification" content="ILXa7xcbAN955uEOcQCuocYJ5wv_IaOEMCwbVurbuHM" />
    </Head>

    <Top />

    <div className="content">
      <h2 className="tagline">Photo management, just one.</h2>
      <p className="subtitle">〜 Don't have to rename the files anymore 〜</p>
    </div>

    <div className="content about">
      <h3>🥺</h3>
      <p>
        Have you ever tried to find a photo management app, but all of them are too subtle?
        This is the perfect app for you.
      </p>
    </div>

    <div className="content">
      <div className="point">
        <h3>😎</h3>
        <p>Automatically recognizes files stored on your computer. You don't need to do any troublesome work at all.</p>
      </div>
      <div className="point">
        <h3>🧐</h3>
        <p>The EXIF information of the files can be analyzed and viewed side by side based on the date.</p>
      </div>
      <div className="point">
        <h3>🤐</h3>
        <p>No modifications will be made to the original file.</p>
      </div>
      <div className="point">
        <h3>🤑</h3>
        <p>We are currently in the beta phase and it's free to use.</p>
      </div>
      <div className="point">
        <h3>🤥</h3>
        <p>Various features will continue to be added and the app will be automatically upgraded. (Maybe...!)</p>
      </div>
    </div>

    <div className="content review">
      <h2>Users voice (?)</h2>
      <div className="user">
        <img src="./user.jpg" />
      </div>
      <p className="userName">Male in his 30s living in New York City.</p>
      <p className="userVoice">I was really surprised. This is the coolest app ever. To use an analogy, it's like Justin Bieber is as good a soccer player as Cristiano Ronaldo. That's what it's all about. It's also helped me get a girlfriend. I use it every week.</p>
    </div>

    <Me />

    <p className="text center">Please feel free to contact us for more information.</p>

    <style jsx>{`
      h2 {
        font-size: 1.7em;
      }

      .tagline {
        text-align: center;
        font-size: 3em;
      }
      .subtitle {
        font-style: italic;
        text-align: center;
        top: -2em;
        position: relative;
      }

      .about h3 {
        text-align: center;
        font-size: 3em;
      }

      .point {
        display: flex;
      }
      .point h3 {
        font-size: 2em;
        margin-bottom: 0;
      }
      .point p {
        // font-size: 1.2em;
        margin: 3em 0 0 1em;
        top: 0.2em;
        position: relative;
      }

      .review {
        margin-top: 5em;
      }
      .review h2 {
        text-align: center;
      }
      .user {
        border-radius: 50%;
        overflow: hidden;
        max-width: 150px;
        margin: 0 auto;
      }
      .user img {
        display: block;
        width: 100%;
      }
      .userName {
        font-size: 1.1em;
        text-align: center;
        font-weight: bold;
      }
      .userVoice {
        font-style: italic;
      }

      @media screen and (max-width: 700px) {
        .tagline {
          font-size: 6vw;
        }
      }
    `}</style>
  </div>
)

export default Home
