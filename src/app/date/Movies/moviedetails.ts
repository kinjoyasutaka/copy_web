import { theaters, Theaters } from "../Theaters/theaters";

export type Movie = {
  movieId: string; //映画の個別のURLに使用されている数字
  src: string; //画像を取得するURL
  title: string; //映画のタイトル
  subtitle: string; //映画詳細情報
  theaterId: Array<String>; //映画館のid。番号の配列で指定。1:シネマQ、2:シネマライカム、3:ミハマ7プレックス、4:サザンプレックス、5:シネマパレット、6:シネマプラザハウス。
  theaterName: Array<String>; //映画館名。メソッドの引数にtheaterIdを指定し取得。
  genres: Array<String>; //ジャンル。番号の配列で指定。1:アクション、2:SF/ファンタジー、3:サスペンス/ミステリー、4:ホラー、
  //5:ドラマ/感動/歴史、6:ラブ/青春、7:コメディ、8:アニメ、10:ドキュメンタリー、11:キッズ/ファミリー
  releaseDate: string; //映画公開時期。メソッドの引数に公開日を指定。now:公開中、will:公開予定のいずれかを格納。※月は-1して指定!!
  copyright: string; //著作権を表す表示
};

const getTheaterName = (theaterId: Array<String>) => {
  const theaterArray: Array<Theaters> = theaters.filter((t) =>
    theaterId.includes(t.id)
  );

  const nameArray: Array<string> = theaterArray.map((t) => t.name);
  return nameArray;
};

const getReleaseDate = (date: Date) => {
  const currentDate = new Date();
  return currentDate > date ? "now" : "will";
};

export const movieDetails: Array<Movie> = [
  //仮データ10個　4/24時点上映中、上映予定5個ずつ
  {
    movieId: "100",
    src: "https://source.unsplash.com/mqKKCsZgzXQ",
    title: "カンフー映画",
    subtitle: "シネマQにて上映中　4/20(木)〜",
    theaterId: ["1"],
    theaterName: getTheaterName(["1"]),
    genres: ["1", "7"],
    releaseDate: getReleaseDate(new Date(2023, 3, 20)),
    copyright: "(C)2023映画「カンフー」製作委員会",
  },
  {
    movieId: "110",
    src: "https://source.unsplash.com/LPylXWfMpgE",
    title: "刑事映画",
    subtitle: "ミハマ7プレックス、シネマプラザハウスにて上映中　4/15(土)〜",
    theaterId: ["3", "6"],
    theaterName: getTheaterName(["3", "6"]),
    genres: ["1", "3"],
    releaseDate: getReleaseDate(new Date(2023, 3, 15)),
    copyright: "(C)2023映画「刑事」製作委員会",
  },
  {
    movieId: "120",
    src: "https://source.unsplash.com/JINPheIkUek",
    title: "アニメ映画",
    subtitle: "シネマQ、シネマライカム、シネマパレットにて上映中　4/16(日)〜",
    theaterId: ["1", "2", "5"],
    theaterName: getTheaterName(["1", "2", "5"]),
    genres: ["5", "8", "11"],
    releaseDate: getReleaseDate(new Date(2023, 3, 16)),
    copyright: "(C)2023映画「アニメ」製作委員会",
  },
  {
    movieId: "130",
    src: "https://source.unsplash.com/dCgbRAQmTQA",
    title: "宇宙ロケット映画",
    subtitle: "サザンプレックスにて上映中　4/17(月)〜",
    theaterId: ["4"],
    theaterName: getTheaterName(["4"]),
    genres: ["2", "5", "10"],
    releaseDate: getReleaseDate(new Date(2023, 3, 17)),
    copyright: "(C)2023映画「宇宙ロケット」製作委員会",
  },
  {
    movieId: "140",
    src: "https://source.unsplash.com/NMk1Vggt2hg",
    title: "ゾンビ映画",
    subtitle: "シネマプラザハウスにて上映中4/18(火)〜",
    theaterId: ["6"],
    theaterName: getTheaterName(["6"]),
    genres: ["3", "4"],
    releaseDate: getReleaseDate(new Date(2023, 3, 18)),
    copyright: "(C)2023映画「ゾンビ」製作委員会",
  },
  {
    movieId: "150",
    src: "https://source.unsplash.com/oBkd8Kd5naw",
    title: "コメディ映画",
    subtitle: "シネマQ、ミハマ7プレックスにて上映予定　5/20(土)〜",
    theaterId: ["1", "3"],
    theaterName: getTheaterName(["1", "3"]),
    genres: ["7", "11"],
    releaseDate: getReleaseDate(new Date(2023, 4, 20)),
    copyright: "(C)2023映画「コメディ」製作委員会",
  },
  {
    movieId: "160",
    src: "https://source.unsplash.com/x42abhUJz5M",
    title: "ノンフィクション映画",
    subtitle: "シネマライカム、シネマパレットにて上映予定　5/21(日)〜",
    theaterId: ["2", "5"],
    theaterName: getTheaterName(["2", "5"]),
    genres: ["5", "10"],
    releaseDate: getReleaseDate(new Date(2023, 4, 21)),
    copyright: "(C)2023映画「ノンフィクション」製作委員会",
  },
  {
    movieId: "170",
    src: "https://source.unsplash.com/Sj0iMtq_Z4w",
    title: "青春映画",
    subtitle: "全映画館にて上映予定　5/22(月)〜",
    theaterId: ["1", "2", "3", "4", "5", "6"],
    theaterName: getTheaterName(["1", "2", "3", "4", "5", "6"]),
    genres: ["5", "6", "11"],
    releaseDate: getReleaseDate(new Date(2023, 4, 22)),
    copyright: "(C)2023映画「青春」製作委員会",
  },
  {
    movieId: "180",
    src: "https://source.unsplash.com/L8-0SAy-aoQ",
    title: "恋愛映画",
    subtitle:
      "シネマライカム、サザンプレックス、シネマパレット上映予定　5/23(火)〜",
    theaterId: ["2", "4", "5"],
    theaterName: getTheaterName(["2", "4", "5"]),
    genres: ["5", "6"],
    releaseDate: getReleaseDate(new Date(2023, 4, 23)),
    copyright: "(C)2023映画「恋愛」製作委員会",
  },
  {
    movieId: "190",
    src: "https://source.unsplash.com/nRW4I8kuyd8",
    title: "ヤクザ映画",
    subtitle: "全映画館にて上映予定　5/24(水)〜",
    theaterId: ["1", "2", "3", "4", "5", "6"],
    theaterName: getTheaterName(["1", "2", "3", "4", "5", "6"]),
    genres: ["1", "3", "10"],
    releaseDate: getReleaseDate(new Date(2023, 4, 24)),
    copyright: "(C)2023映画「ヤクザ」製作委員会",
  },
];
