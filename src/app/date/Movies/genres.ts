export type Genre = {
  id: string; //ジャンルのid
  value: string; //ジャンルが選ばれた際の値
  name: string; //ジャンル名
  checkd: boolean; //ジャンルの選択有無判定
};

export const genres: Array<Genre> = [
  {
    id: "genre-all",
    value: "all",
    name: "全て",
    checkd: true,
  },
  {
    id: "genre-1",
    value: "1",
    name: "アクション",
    checkd: false,
  },
  {
    id: "genre-2",
    value: "2",
    name: "SF/ファンタジー",
    checkd: false,
  },
  {
    id: "genre-3",
    value: "3",
    name: "サスペンス/ミステリー",
    checkd: false,
  },
  {
    id: "genre-4",
    value: "4",
    name: "ホラー",
    checkd: false,
  },
  {
    id: "genre-5",
    value: "5",
    name: "ドラマ/感動/歴史",
    checkd: false,
  },
  {
    id: "genre-6",
    value: "6",
    name: "ラブ/青春",
    checkd: false,
  },
  {
    id: "genre-7",
    value: "7",
    name: "コメディ",
    checkd: false,
  },
  {
    id: "genre-8",
    value: "8",
    name: "アニメ",
    checkd: false,
  },
  {
    id: "genre-10",
    value: "10",
    name: "ドキュメンタリー",
    checkd: false,
  },
  {
    id: "genre-11",
    value: "11",
    name: "キッズ/ファミリー",
    checkd: false,
  },
];
