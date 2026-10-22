import type { Metadata } from "next";
import Image from "next/image";
import { Anton, Noto_Sans_JP } from "next/font/google";
import styles from "./torewaku.module.css";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  preload: false,
});

const CONTACT_EMAIL = "number191707@gmail.com";
const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("トレワクについてのお問い合わせ")}`;

export const metadata: Metadata = {
  title: "トレワク | パーソナルジム向けの予約・会員管理サービス",
  description:
    "トレワクは、1 人〜少人数のトレーナーで運営するパーソナルジムのための予約・会員管理サービスです。月額 6,500 円（税別）。",
  openGraph: {
    title: "トレワク | パーソナルジム向けの予約・会員管理サービス",
    description:
      "トレワクは、1 人〜少人数のトレーナーで運営するパーソナルジムのための予約・会員管理サービスです。",
    url: "https://www.number07.net/torewaku",
    locale: "ja_JP",
    type: "website",
  },
};

const memberFeatures = [
  "スマホで空き枠を見て 3 タップで予約",
  "前日 21 時までのキャンセル",
  "回数券・月額プランの購入",
  "お支払いカードの変更や継続プランの解約",
];

const ownerFeatures = [
  "週のカレンダーで予約を確認",
  "会員の管理と代理予約",
  "営業時間・臨時休業の設定",
  "料金プランの管理（回数券・期限・月額）",
  "店頭払い（現金・エアペイ）の記録",
];

const legal: [string, React.ReactNode][] = [
  ["販売事業者", "number"],
  ["運営責任者", "請求があった場合に遅滞なく開示します"],
  ["所在地", "請求があった場合に遅滞なく開示します"],
  ["電話番号", "請求があった場合に遅滞なく開示します"],
  [
    "お問い合わせ",
    <>
      メール（<a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>）
    </>,
  ],
  ["販売価格", "月額 6,500 円（税別）／年額 70,000 円（税別）"],
  ["商品代金以外の必要料金", "インターネット接続にかかる通信料はお客様のご負担となります"],
  ["支払方法", "クレジットカード"],
  ["支払時期", "月額は毎月前払い、年額は契約時に一括前払い"],
  ["提供時期", "お支払いの確認後、アカウントを発行した時点から利用できます"],
  ["解約", "いつでも解約できます。月額は当月末、年額は契約期間の末日で終了します"],
  ["返金", "支払い済みの料金の日割りでの返金は行いません"],
  ["動作環境", "最新版の Chrome / Safari / Edge"],
  ["個人情報の取扱い", <a key="privacy" href="/torewaku/privacy">プライバシーポリシー</a>],
];

const Phone = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={`/torewaku/${src}.png`}
    alt={alt}
    width={780}
    height={1688}
    sizes="(max-width: 900px) 45vw, 330px"
  />
);

export default function TorewakuPage() {
  return (
    <div className={`${styles.root} ${anton.variable} ${notoSansJP.variable}`}>
      <header className={styles.header}>
        <div className={styles.logo}>
          トレワク<b>.</b>
        </div>
        <nav className={styles.nav}>
          <a href="#features">できること</a>
          <a href="#money">お支払い</a>
          <a href="#price">料金</a>
          <a href="#legal">特定商取引法に基づく表記</a>
        </nav>
        <a className={styles.cta} href={CONTACT_MAILTO}>
          お問い合わせ
        </a>
      </header>

      <div className={styles.hero}>
        <div className={`${styles.big} ${styles.num}`} aria-hidden="true">
          3<small>TAP</small>
        </div>
        <div className={styles.phones}>
          <div className={`${styles.ph} ${styles.phB}`}>
            <Phone src="member-01-venue-menu" alt="会員画面: メニューを選ぶ" />
          </div>
          <div className={`${styles.ph} ${styles.phA}`}>
            <Phone src="member-02-date-time" alt="会員画面: 日時を選ぶ" />
          </div>
          <div className={styles.tag}>空き枠 → 確認 → 完了</div>
        </div>
        <div className={styles.copy}>
          <h1>
            予約も会員も、
            <br />
            ひとつで回す。
          </h1>
          <p>
            トレワクは、1 人〜少人数のトレーナーで運営する
            <br className={styles.pcOnly} />
            パーソナルジムのための予約・会員管理サービスです。
          </p>
        </div>
        <div className={styles.band} aria-hidden="true">
          <span>BOOK</span>
          <i>スマホで予約</i>
          <span>3 TAP</span>
          <i>回数券・月額プラン</i>
          <span>CANCEL 21:00</span>
          <i>週のカレンダー</i>
          <span>CARD PAY</span>
          <i>代理予約</i>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.n}>
            3<em>タップ</em>
          </div>
          <div className={styles.l}>スマホで空き枠を見て予約</div>
          <div className={styles.s}>会員の予約</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.n}>21:00</div>
          <div className={styles.l}>前日 21 時までキャンセル</div>
          <div className={styles.s}>会員がスマホで手続き</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.n}>
            0<em>円</em>
          </div>
          <div className={styles.l}>トレワクが代金に上乗せする手数料</div>
          <div className={styles.s}>売上はジムの口座へ直接</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.n}>
            6,500<em>円</em>
          </div>
          <div className={styles.l}>月額（税別）</div>
          <div className={styles.s}>年額 70,000 円（税別）</div>
        </div>
      </div>

      <div id="features" className={styles.section}>
        <div className={styles.kicker}>WHAT YOU CAN DO</div>
        <h2 className={styles.h2}>会員も、オーナーも。</h2>
        <div className={styles.two}>
          <div className={styles.card}>
            <h3>
              <span className={styles.num}>01</span>会員ができること
            </h3>
            <ul>
              {memberFeatures.map((f, i) => (
                <li key={f}>
                  <b>{"ABCD"[i]}</b>
                  {f}
                </li>
              ))}
            </ul>
            <div className={styles.shots}>
              <Phone src="member-03-confirm-pay" alt="会員画面: 予約の確認" />
              <Phone src="member-08-buy-tickets" alt="会員画面: 回数券の購入" />
              <Phone src="member-05-bookings" alt="会員画面: 予約一覧" />
            </div>
          </div>
          <div className={styles.card}>
            <h3>
              <span className={styles.num}>02</span>オーナーができること
            </h3>
            <ul>
              {ownerFeatures.map((f, i) => (
                <li key={f}>
                  <b>{"ABCDE"[i]}</b>
                  {f}
                </li>
              ))}
            </ul>
            <div className={styles.shots}>
              <Image
                src="/torewaku/owner-03-calendar-week.png"
                alt="オーナー画面: 週のカレンダー"
                width={2160}
                height={1350}
                sizes="(max-width: 900px) 90vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="money" className={styles.money}>
        <div className={styles.kicker}>EASY PAYMENT</div>
        <h2 className={styles.h2}>お支払いも、スマホでかんたん。</h2>
        <div className={styles.flow}>
          <div className={styles.node}>
            <div className={styles.t}>STEP 1</div>
            <div className={styles.h}>会員がスマホでカード払い</div>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.node}>
            <div className={styles.t}>STEP 2</div>
            <div className={styles.h}>回数券・プランに自動で反映</div>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.node}>
            <div className={styles.t}>STEP 3</div>
            <div className={styles.h}>売上はジムの口座へ</div>
          </div>
        </div>
        <p>
          回数券や月額プランは、会員がスマホからその場で購入できます。
          <br className={styles.pcOnly} />
          集金や回数の書き換えは不要。店頭での現金・エアペイ払いもまとめて記録できます。
        </p>
      </div>

      <div id="price" className={styles.section}>
        <div className={styles.kicker}>PRICE</div>
        <h2 className={styles.h2}>料金</h2>
        <div className={styles.price}>
          <div className={`${styles.plan} ${styles.hot}`}>
            <div className={styles.p}>月額プラン</div>
            <div className={`${styles.v} ${styles.num}`}>
              6,500<small>円 / 月</small>
            </div>
            <div className={styles.tax}>税別</div>
          </div>
          <div className={styles.plan}>
            <div className={styles.p}>年額プラン</div>
            <div className={`${styles.v} ${styles.num}`}>
              70,000<small>円 / 年</small>
            </div>
            <div className={styles.tax}>税別</div>
          </div>
        </div>
        <p className={styles.note}>
          お支払いはクレジットカード。月額は毎月前払い、年額は契約時に一括前払いです。いつでも解約できます。
        </p>
      </div>

      <div id="legal" className={styles.legal}>
        <div className={styles.kicker}>LEGAL</div>
        <h2 className={styles.h2}>特定商取引法に基づく表記</h2>
        <table>
          <tbody>
            {legal.map(([k, v]) => (
              <tr key={k}>
                <th>{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.contact}>
        <h2 className={styles.h2}>まずは、お問い合わせから。</h2>
        <div className={styles.contactAction}>
          <a className={styles.cta} href={CONTACT_MAILTO}>
            メールでお問い合わせ →
          </a>
          <p className={styles.mail}>{CONTACT_EMAIL}</p>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>トレワク — パーソナルジム向けの予約・会員管理サービス</span>
        <span>
          <a href="/torewaku/privacy">プライバシーポリシー</a>　© number
        </span>
      </footer>
    </div>
  );
}
