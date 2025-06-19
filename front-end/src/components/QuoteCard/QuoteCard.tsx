import { useEffect, useState } from "react";
import { getOneQuote, type Quote } from "../../services/quotes";

const QuoteCard = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    getOneQuote()
      .then((result) => {
        console.log("Random quotes: ", result);
        setQuotes(result);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      <p>{quotes[0].quote}</p>
      <p> - {quotes[0].author}</p>
    </div>
  );
};

export default QuoteCard;
