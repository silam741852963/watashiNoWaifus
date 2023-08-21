import { Quote } from "./Quote";

export const Quotes = ({ quotes }) => {
  return (
    <section
      id="quote"
      className="scroll-m-20 max-w-7xl flex flex-col flex-wrap mx-auto justify-center text-3xl italic sm:flex-row widescreen:section-min-height tallscreen:section-min-height"
    >
      {quotes.map((quote, index) => (
        <Quote key={index} quote={quote} />
      ))}
    </section>
  );
};
