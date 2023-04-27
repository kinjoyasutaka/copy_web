import Link from "next/link";
import styles from "../../style/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__wrap}>
          <div className={styles.footer_logo}>
            <Link href="/">Topにもどるロゴ</Link>
          </div>
          <small>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/pages/company" className={styles.link}>
                  会社概要
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/pages/commerce" className={styles.link}>
                  特定商法取引法に基づく表記
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/pages/terms" className={styles.link}>
                  利用規約
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/pages/privacy-policy" className={styles.link}>
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </small>
          <div className={styles.footer_copyright}>
            <small>
              copyright&copy;2009 STAR THEATERS.All Rights Reserved.
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
