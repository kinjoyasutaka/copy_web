import Link from "next/link";
import styles from "../../style/Top.module.css";
import { theaters } from "@/app/date/Theaters/theaters";

const SubHeader = () => {
  return (
    <div className={styles.subheader}>
      <div className={styles.subheader_body}>
        {theaters.map((theater) => (
          <Link key={theater.id} href={`/theaters/${theater.id}`}>
            <p className={styles.subheader_logo}>{theater.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
