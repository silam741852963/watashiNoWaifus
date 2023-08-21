import { useState, useEffect } from "react";
import { Waifus } from "./Waifus";
import { Quotes } from "./Quotes";
import { Send } from "./Send";
import hero from "../assets/hero.png";

export const Main = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const getQuotes = async () => {
      const quotesFromServer = await fetchQuotes();
      setQuotes(quotesFromServer);
    };
    getQuotes();
  }, []);
  const fetchQuotes = async () => {
    const res = await fetch(`https://my-json-hazel.vercel.app/quotes`);
    const data = res.json()
    return data;
  };
  const addQuote = async (quote) => {
    const res = await fetch(`https://my-json-hazel.vercel.app/quotes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(quote),
    });
    const data = await res.json()
    setQuotes([...quotes, data])
  };
  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-64">
      <section
        className="scroll-m-20 flex flex-col-reverse justify-center items-center sm:flex-row widescreen:section-min-height tallscreen:section-min-height"
        id="hero"
      >
        <article>
          <h2 className="main__h2 max-w-8xl font-bold text-center text-slate-900 dark:text-white">
            <span className="text-rose-900 dark:text-rose-600">全</span>
            にして一、一にして
            <span className="text-rose-900 dark:text-rose-600">全</span>
            なる者
          </h2>
        </article>
        <img src={hero} alt="Tituba holding Abby" className="w-1/4" />
      </section>
      <Waifus />
      <Quotes quotes={quotes} />
      <Send onAdd={addQuote} />
    </main>
  );
};
