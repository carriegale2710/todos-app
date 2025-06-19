const apiKey = import.meta.env.VITE_API_KEY;

export interface Quote {
  quote: String;
  author: String;
  category: String;
}

export const getOneQuote = async (): Promise<Quote[]> => {
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET", // or 'POST', etc.
    headers: {
      "X-Api-Key": apiKey, // or use another header name if required
      "Content-Type": "application/json",
    },
  });
  if (!response.ok || response == undefined) {
    throw new Error("Could not fetch quote from API");
  }
  const quotes = await response.json();
  console.log(quotes);
  return quotes;
};
