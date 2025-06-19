const apiKey = import.meta.env.VITE_API_KEY;

export interface Quote {
  fact: String;
}

export const getOneQuote = async (): Promise<Quote[]> => {
  const response = await fetch("https://api.api-ninjas.com/v1/facts", {
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
