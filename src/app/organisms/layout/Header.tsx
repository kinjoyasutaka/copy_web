import Head from "next/head";
import Link from "next/link";
import styles from "../../style/Header.module.css";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const { title } = props;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrap}>
          <div>
            <Link href="/">Topにもどるロゴ</Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/pages/areas" className={styles.link}>
                  <div>
                    <div className={styles.label1}>劇場一覧</div>
                    <div className={styles.label2}>THEATERS</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/pages/movies" className={styles.link}>
                  <div>
                    <div className={styles.label1}>作品一覧</div>
                    <div className={styles.label2}>MOVIE</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/pages/advance-ticket" className={styles.link}>
                  <div>
                    <div className={styles.label1}>前売券情報</div>
                    <div className={styles.label2}>ADVANCETICKET</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/pages/qa" className={styles.link}>
                  <div>
                    <div className={styles.label1}>よくあるご質問</div>
                    <div className={styles.label2}>Q&A</div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header_links}>
            <Link href="" className={styles.haader_qrcode}>
              QR発行
            </Link>
            <Link href="" className={styles.haader_new}>
              新規登録
            </Link>
            <Link href="" className={styles.haader_login}>
              ログイン
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
