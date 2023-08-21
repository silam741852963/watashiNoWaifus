import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const Send = ({ onAdd }) => {
  const waifu_ramu = [
    "Abby",
    "Shinobu",
    "Tea",
    "Sylvie",
    "Hinako",
    "Meluko",
    "Ramu",
  ];
  const [id, setId] = useState(Math.floor(Math.random() * 100000));
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    onAdd({ id, from, to, message });
    setMessage("");
  };
  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="send scroll-m-20 mx-auto text-3xl my-10 max-w-3xl border-8 border-solid border-rose-900 pt-5 pr-5 pl-5 rounded-lg widescreen:section-min-height tallscreen:section-min-height"
      id="send"
    >
      <div className="formControl__from">
        <label htmlFor="from" className="pr-10">
          From
        </label>
        <select
          defaultValue={"Abby"}
          name="from"
          id="from"
          onChange={(e) => setFrom(e.target.value)}
          className="bg-transparent w-auto indent-2 sm:w-80"
          required
        >
          {waifu_ramu.map((entry, index) => (
            <option key={index} value={entry} className="form__option">
              {entry}
            </option>
          ))}
        </select>
      </div>
      <div className="formControl__to">
        <label htmlFor="to" className="pr-10">
          To
        </label>
        <select
          defaultValue={"Ramu"}
          name="to"
          id="to"
          onChange={(e) => setTo(e.target.value)}
          className="bg-transparent w-auto indent-2 sm:w-80"
          required
        >
          {waifu_ramu.map((entry, index) => (
            <option
              key={index}
              value={entry}
              className="form__option"
            >
              {entry}
            </option>
          ))}
        </select>
      </div>
      <div className="formControl__message flex justify-center items-center flex-wrap">
        <label htmlFor="message" className="message__label py-5">
          Message
        </label>
        <textarea
          cols="90"
          rows="8"
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message__text bg-transparent indent-2 w-full"
          required
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send"
        className="submit__button w-full cursor-pointer bg-rose-900 rounded-lg hover:bg-rose-600"
      />
    </form>
  );
};

Send.propTypes = {
  onAdd: PropTypes.func,
};
