import { useEffect, useState } from "react";
import { getOneQuote, type Quote } from "../../services/quotes";

const QuoteCard = () => {
  const [quote, setQuote] = useState<Quote[]>([]);

  useEffect(() => {
    getOneQuote()
      .then((result) => {
        if (!result || result.toString() == "") {
          throw new Error("Fetched quote data is empty.");
        }
        console.log("Random quotes: ", result);
        setQuote(result);
      })
      .catch(console.warn);
  }, []);

  console.log(quote);

  return (
    <div>
      <p>{quote[0].quote}</p>
      <p> - {quote[0].author}</p>
    </div>
  );
};

export default QuoteCard;
