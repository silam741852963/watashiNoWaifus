export const Quote = ({ quote }) => {
  return (
    <figure className="quote text-center flex flex-col sm:flex-col-reverse justify-center sm:max-w-none max-w-full pt-10 gap-5 items-start mx-5 sm:mx-auto">
      <blockquote className="w-full sm:w-auto">
        <p className="pt-10 text-center sm:text-start">
          {quote.message}
        </p>
      </blockquote>
      <figcaption className="text-right sm:text-2xl text-2sm self-end sm:self-start whitespace-nowrap">
        {"From " + quote.from + " to " + quote.to}
      </figcaption>
    </figure>
  );
};
