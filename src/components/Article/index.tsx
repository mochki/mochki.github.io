import { Fragment, FC } from "react";
// import { Arrows } from "./Arrows";
import { ActivePage, ArticleContent } from "../../pages";

const pageVerb = (type: ActivePage["type"]) =>
  type === "project" ? "を作りました" : type === "work" ? "で働きました" : "私";

const Subheader: FC<Pick<ActivePage, "title" | "type">> = ({ title, type }) => (
  <div className="relative flex flex-wrap p-6 sm:p-8">
    <h2 className="absolute hidden md:block font-light text-2xl left-3 top-7">&</h2>
    <h2 className="font-display text-4xl leading-tight sm:text-5xl">
      {title} <span className="font-japanese text-nowrap">{pageVerb(type)}</span>{" "}
    </h2>
  </div>
);

const Content: FC<ArticleContent> = ({ type, content, link }) =>
  content.map((paragraph, i) => {
    switch (type) {
      case "bigHeader":
        return (
          <h3 className="text-2xl mt-4" key={`p-${i}`}>
            {paragraph}
          </h3>
        );
      case "smallHeader":
        return (
          <h4 className="text-xl mt-2" key={`p-${i}`}>
            {paragraph}
          </h4>
        );
      case "paragraphs":
        return <p key={`p-${i}`}>{paragraph}</p>;
      case "list":
        return <p key={`p-${i}`}>- {paragraph}</p>;
      case "quote":
        return (
          <blockquote className="font-light text-lg m-4 text-gray-400" key={`p-${i}`}>
            "{paragraph}"
          </blockquote>
        );
      case "link":
        return (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline hover:text-gray-600 duration-100 ease-in-out"
            key={`p-${i}`}
          >
            {paragraph}
          </a>
        );
      default:
        return null;
    }
  });

export const Article: FC<ActivePage> = ({ title, type, homepage, sourceCode, article, images }) => (
  <>
    <Subheader title={title} type={type} />
    <div className="p-6 sm:p-8 flex gap-10 md:flex-row-reverse flex-wrap ">
      <section className="flex flex-col items-start gap-3 md:flex-1 md:w-1/2 tracking-wide break-words overflow-hidden">
        {sourceCode && (
          <a className="underline hover:no-underline hover:text-gray-600 duration-100 ease-in-out" href={sourceCode}>
            Source Code
          </a>
        )}
        {homepage && (
          <a className="underline hover:no-underline hover:text-gray-600 duration-100 ease-in-out" href={homepage}>
            Homepage
          </a>
        )}
        {article.map((articleContent) => (
          <Content key={articleContent.content[0]} {...articleContent} />
        ))}
      </section>
      {images && (
        <section className="flex flex-col gap-2 md:flex-1 md:w-1/2 break-words overflow-hidden">
          {images.map(({ src, caption }) => (
            <Fragment key={src}>
              <img src={src} alt={caption} />
              <div className="mb-6 font-light">{caption}</div>
            </Fragment>
          ))}
        </section>
      )}
    </div>
  </>
);

// <nav {...fade} className="absolute flex gap-8 bottom-64 right-32 cursor-pointer">
//   <Arrows />
// </nav>
