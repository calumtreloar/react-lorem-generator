import { useState } from "react";
import textArray from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = e => {
    setCount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let amount = Number(count);
    const newParagraphs = textArray.slice(0, amount);
    setText(newParagraphs);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input type="number" id="amount" name="amount" value={count} min={1} max={8} step={1} onChange={handleChange} />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map(item => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
