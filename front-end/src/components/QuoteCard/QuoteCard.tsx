import { useEffect, useState } from "react";
import { getOneQuote, type Quote } from "../../services/quotes";

const QuoteCard = () => {
  const [quote, setQuote] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOneQuote()
      .then((result) => {
        if (!result || result.toString() == "") {
          throw new Error("Fetched quote data is empty.");
        }
        // console.log("Random quotes: ", result);
        setQuote(result);
        setIsLoading(false);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      {!isLoading && <p>{quote[0].quote}</p>}
      {!isLoading && <p> - {quote[0].author}</p>}
    </div>
  );
};

export default QuoteCard;
