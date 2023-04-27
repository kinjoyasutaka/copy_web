import { News, news } from "@/app/date/Movies/news";
import styles from "../../style/Top.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const MoviesIntroduction = () => {
  return (
    <div>
      <div className={styles.swiper_container}>
        <div className={styles.swiper_wrapper}>
          {news.map((news: News, index) => (
            <div key={index} className={styles.swiper_slide}>
              <Link href={`/${news.type}/${news.id}`}>
                <Image
                  src={news.src}
                  alt={`/${news.type}/${news.id}`}
                  className={styles.smart_image}
                  fill
                />
              </Link>
              <div className={styles.swiper_slide_shadow_left}></div>
              <div className={styles.swiper_slide_shadow_right}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.swiper_pagination}></div>
    </div>
  );
};

export default MoviesIntroduction;
