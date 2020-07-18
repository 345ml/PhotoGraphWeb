import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>PhotoGraph</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>

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
        <img src="./mac.png" />
      </div>
    </div>

    <div className="content">
      <h2 className="tagline">写真の管理、これ1本</h2>
      <p className="subtitle">〜 もうファイルのリネームしなくていいよ 〜</p>
    </div>

    <div className="content about">
      <h3>🥺</h3>
      <p>
        写真管理アプリを探してみたけど、どれも微妙なものばかりという経験はありませんか？
        そんなあなたに最適なアプリです。
      </p>
    </div>

    <div className="content">
      <div className="point">
        <h3>😎</h3>
        <p>パソコンに保存されているファイルを自動で認識します。面倒な作業は一切必要ありません。</p>
      </div>
      <div className="point">
        <h3>🧐</h3>
        <p>ファイルのEXIF情報を解析し、日付を元に並べて確認することができます。</p>
      </div>
      <div className="point">
        <h3>🤐</h3>
        <p>もとのファイルに修正を加えることは一切ありません。</p>
      </div>
      <div className="point">
        <h3>🤑</h3>
        <p>ただいまベータ期間中につき、無料でご利用いただけます。</p>
      </div>
      <div className="point">
        <h3>🤥</h3>
        <p>今後も様々な機能が追加され、アプリは自動でアップグレードされます。（される予定です。）</p>
      </div>
    </div>

    <div className="content review">
      <h2>ユーザの声的なもの</h2>
      <div className="user">
        <img src="./user.jpg" />
      </div>
      <p className="userName">ニューヨーク在住　30代男性</p>
      <p className="userVoice">本当に驚いたよ。これは最高にクールなアプリだ。例えるなら、ジャスティン・ビーバーがクリスティアーノ・ロナウド並にサッカーが上手いようなもんだね。これのおかげでガールフレンドもできたんだ。毎週使ってるよ。</p>
    </div>

    <div className="content whoami">
      <h2>whoami</h2>
      <p>
        <a href="https://twitter.com/_horotter" target="twitter">Keisuke Horota</a>
        <br />
        Software developer
        <br />
        Based in Tokyo
      </p>
      <p>お気軽にお問い合わせください。</p>
    </div>
      

    <style jsx>{`
      img {
        width: 100%;
        display: block;
      }

      h2 {
        font-size: 1.7em;
      }

      .content {
        max-width: 700px;
        margin: 2em auto;
        padding: 0 1em;
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
        // font-size: 2em;
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

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media screen and (max-width: 700px) {
        .top {
          flex-direction: column;
        }
        .tagline {
          font-size: 8vw;
        }
      }
    `}</style>
  </div>
)

export default Home
