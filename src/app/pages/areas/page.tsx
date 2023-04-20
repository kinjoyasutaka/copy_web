import Layout from "@/app/templetes/Layout";
import Link from "next/link";
import styles from "../../style/areas.module.css";
import { theaters } from "@/app/date/Theaters/theaters";

const Areas = () => {
  const title = "劇場一覧";
  return (
    <>
      <Layout title={title}>
        <div className={styles.theater_list__container}>
          <h1>{title}</h1>
          <div className={styles.theater_list_item}>
            <div className={styles.title}></div>
            <div className={styles.theater}>
              {theaters.map((theater) => (
                <Link
                  key={theater.url}
                  href={`/theaters/${theater.url}`}
                  className={styles.button}
                >
                  {theater.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Areas;
