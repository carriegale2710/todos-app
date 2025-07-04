export const fetchHandler = async <T>(
  fn: () => Promise<T>,
  setStatus: any,
  setError: any
) => {
  try {
    setStatus("LOADING");
    const result = await fn();
    setStatus("SUCCESS");
    return result;
  } catch (err) {
    setStatus("FAILURE");
    setError(err);
    throw err;
  }
};
