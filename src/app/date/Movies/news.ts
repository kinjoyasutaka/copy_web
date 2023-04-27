export type News = {
  type: string; //ニュースか映画かの種別
  id: string; //ニュース、映画のid
  src: string; //表示する画像
};

export const news: Array<News> = [
  {
    type: "news",
    id: "100",
    src: "https://source.unsplash.com/nPoizl27jZI",
  },
  {
    type: "news",
    id: "110",
    src: "https://source.unsplash.com/MAYsdoYpGuk",
  },

  {
    type: "news",
    id: "120",
    src: "https://source.unsplash.com/atsUqIm3wxo",
  },

  {
    type: "news",
    id: "130",
    src: "https://source.unsplash.com/iFSvn82XfGo",
  },

  {
    type: "news",
    id: "140",
    src: "https://source.unsplash.com/_Zua2hyvTBk",
  },

  {
    type: "movies",
    id: "100",
    src: "https://source.unsplash.com/mqKKCsZgzXQ",
  },

  {
    type: "movies",
    id: "110",
    src: "https://source.unsplash.com/LPylXWfMpgE",
  },

  {
    type: "movies",
    id: "120",
    src: "https://source.unsplash.com/JINPheIkUek",
  },

  {
    type: "movies",
    id: "130",
    src: "https://source.unsplash.com/dCgbRAQmTQA",
  },

  {
    type: "movies",
    id: "140",
    src: "https://source.unsplash.com/NMk1Vggt2hg",
  },

  {
    type: "movies",
    id: "150",
    src: "https://source.unsplash.com/oBkd8Kd5naw",
  },

  {
    type: "movies",
    id: "160",
    src: "https://source.unsplash.com/x42abhUJz5M",
  },
];
