const apiKey = import.meta.env.VITE_API_KEY;

export interface Quote {
  quote: String;
  author: String;
  category: String;
}

export const getOneQuote = async (): Promise<Quote[]> => {
  console.log("HERE");
  if (!apiKey) {
    throw new Error(
      "API key is missing. Please set VITE_API_KEY in your environment."
    );
  }
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET", // or 'POST', etc.
    headers: {
      "X-Api-Key": apiKey, // or use another header name if required
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Could not fetch quote from API");
  }
  console.log("response: ", response);
  const quote = await response.json();
  console.log("fetched quote: ", quote);

  return quote;
};
