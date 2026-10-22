import type { Metadata } from "next";
import { Anton, Noto_Sans_JP } from "next/font/google";
import styles from "../torewaku.module.css";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  preload: false,
});

const CONTACT_EMAIL = "number191707@gmail.com";

export const metadata: Metadata = {
  title: "プライバシーポリシー | トレワク",
  description: "トレワク（パーソナルジム向けの予約・会員管理サービス）における個人情報の取扱いについて。",
  alternates: { canonical: "https://www.number07.net/torewaku/privacy" },
};

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: "1. はじめに",
    body: (
      <p>
        number（以下「当方」）は、パーソナルジム向けの予約・会員管理サービス「トレワク」（以下「本サービス」）を提供します。本サービスを利用するジム（以下「ジム」）と、ジムに登録された会員の個人情報を、個人情報の保護に関する法律その他の法令に従い、次のとおり取り扱います。
      </p>
    ),
  },
  {
    h: "2. 取得する情報",
    body: (
      <>
        <p>ジムのオーナー・スタッフについて</p>
        <ul>
          <li>氏名、メールアドレス、ジムの名称・所在地などの契約に関する情報</li>
          <li>利用料のお支払いに関する情報（カード番号は決済代行会社が管理し、当方は保持しません）</li>
        </ul>
        <p>会員について（ジムが登録し、または会員が本サービスで入力するもの）</p>
        <ul>
          <li>氏名、メールアドレス、電話番号など、ジムが登録した情報</li>
          <li>予約・キャンセル・来店の記録、回数券や料金プランの利用状況</li>
          <li>体験の申込みで入力された氏名・性別・生年月日・電話番号</li>
          <li>オンラインでのお支払いの記録（カード番号は決済代行会社が管理し、当方は保持しません）</li>
          <li>LINE でログインした場合：LINE のユーザー識別子と表示名</li>
          <li>Google でログインした場合：Google のユーザー識別子とメールアドレス</li>
          <li>パスワードを設定した場合：復元できない形に変換した値（パスワードそのものは保存しません）</li>
        </ul>
        <p>すべての利用者について</p>
        <ul>
          <li>アクセスの記録（IP アドレス、日時、ブラウザの種類など）とログインの試行の記録</li>
          <li>ログインの状態を保つための Cookie</li>
        </ul>
      </>
    ),
  },
  {
    h: "3. 利用の目的",
    body: (
      <ul>
        <li>予約の受付・変更・キャンセル、会員と回数券・料金プランの管理など、本サービスを提供するため</li>
        <li>ログインの本人確認、予約の確認メールなどの連絡のため</li>
        <li>お支払いの処理と記録のため</li>
        <li>不正な利用の防止と、障害への対応のため</li>
        <li>お問い合わせへの対応のため</li>
        <li>本サービスの改善のため（個人を特定しない形で集計したものに限ります）</li>
      </ul>
    ),
  },
  {
    h: "4. ジムとの関係",
    body: (
      <p>
        会員の個人情報は、会員が通うジムが管理するものです。当方はジムから委託を受けて、本サービスの提供に必要な範囲で取り扱います。あるジムの会員の情報を、別のジムが見ることはできません。
      </p>
    ),
  },
  {
    h: "5. 外部のサービスへの提供・委託",
    body: (
      <>
        <p>本サービスの提供のため、次の事業者のサービスを利用し、必要な範囲で情報を送ります。</p>
        <ul>
          <li>Stripe, Inc.（オンライン決済）</li>
          <li>LY Corporation（LINE ログイン）</li>
          <li>Google LLC（Google ログイン）</li>
          <li>メール配信サービス事業者（ログイン用リンクや予約の確認メールの送信）</li>
          <li>サーバーの提供事業者（本サービスのデータの保管）</li>
        </ul>
        <p>
          このうち外国にある事業者への提供は、各事業者の個人情報の保護の措置のもとで行います。このほか、法令に基づく場合を除き、ご本人の同意なく第三者に提供しません。
        </p>
      </>
    ),
  },
  {
    h: "6. 安全管理",
    body: (
      <p>
        通信の暗号化、ジムごとのデータの分離、アクセスできる者の限定、パスワードやログイン用の鍵の暗号化・変換による保存など、個人情報の漏えい・滅失・毀損を防ぐための措置をとります。
      </p>
    ),
  },
  {
    h: "7. 保存する期間",
    body: (
      <p>
        利用の目的に必要な期間、またはジムとの契約の期間中に保存します。会員の退会やジムの解約のあとは、法令で保存が求められるものを除き、相当の期間ののちに削除します。
      </p>
    ),
  },
  {
    h: "8. 開示・訂正・削除などのご請求",
    body: (
      <p>
        ご本人の個人情報の開示・訂正・利用停止・削除などをご希望の場合は、会員の方は通っているジムに、またはお問い合わせ先にご連絡ください。ご本人であることを確認したうえで、法令に従って対応します。
      </p>
    ),
  },
  {
    h: "9. 改定",
    body: <p>このポリシーは、必要に応じて改定します。重要な変更は、本ページでお知らせします。</p>,
  },
  {
    h: "10. お問い合わせ",
    body: (
      <p>
        number（トレワク）
        <br />
        メール：<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    ),
  },
];

export default function TorewakuPrivacyPage() {
  return (
    <div className={`${styles.root} ${anton.variable} ${notoSansJP.variable}`}>
      <header className={styles.header}>
        <a className={styles.logo} href="/torewaku">
          トレワク<b>.</b>
        </a>
      </header>
      <div className={styles.legal}>
        <div className={styles.kicker}>PRIVACY</div>
        <h1 className={styles.h2}>プライバシーポリシー</h1>
        <div className={styles.policy}>
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.body}
            </section>
          ))}
          <p className={styles.policyDate}>制定日：2026年10月22日</p>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>
          <a href="/torewaku">トレワク — パーソナルジム向けの予約・会員管理サービス</a>
        </span>
        <span>© number</span>
      </footer>
    </div>
  );
}
