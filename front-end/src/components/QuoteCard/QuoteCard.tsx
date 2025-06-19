import { useEffect, useState } from "react";
import { getOneQuote, type Quote } from "../../services/quotes";

const QuoteCard = () => {
  const [quote, setQuote] = useState<Quote[]>([]);

  useEffect(() => {
    getOneQuote()
      .then((result) => {
        console.log("HERE");
        console.log("Random quote: ", result);
        setQuote(result);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      <p>{quote[0].fact}</p>
    </div>
  );
};

export default QuoteCard;
