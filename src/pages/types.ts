export type ArticleContent = {
  type: "paragraphs" | "list" | "bigHeader" | "smallHeader" | "quote" | "link";
  content: string[];
  link?: string;
};

export type Image = {
  src: string;
  caption: string;
};

export type Page = {
  id: string;
  title: string;
  sourceCode?: string;
  homepage?: string;
  article: ArticleContent[];
  images?: Image[];
  hideFromMenu?: boolean;
};
