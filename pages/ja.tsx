import Head from 'next/head'
import Top from '../components/top';
import Me from '../components/me';

export const Ja = (): JSX.Element => (
  <div>
    <Head>
      <title>PhotoGraph</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="google-site-verification" content="ILXa7xcbAN955uEOcQCuocYJ5wv_IaOEMCwbVurbuHM" />
    </Head>

    <Top />

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

    <Me />

    <p className="text center">お気軽にお問い合わせください。</p>      

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

export default Ja
