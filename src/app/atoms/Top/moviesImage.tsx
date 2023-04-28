import Link from "next/link";
import styles from "../../style/Top.module.css";
import Image from "next/image";

type Props = {
  href: string;
  src: string;
  alt: string;
  title: string;
};

const MoviesImage = (props: Props) => {
  const { href, src, alt, title } = props;
  return (
    <div className={styles.movie_list}>
      <Link href={href}>
        <div className={styles.movie_wrap}>
          <div className={styles.movie_image_wrap}>
            <Image src={src} alt={alt} className={styles.movie_image} fill />
          </div>
          <div className={styles.movie_title}>{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesImage;
