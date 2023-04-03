import { useState, useEffect } from "react";

export default function useRequest<T>(
  url: string,
  content: string,
  method: string
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function handleSubmit(url: string, content: string, method: string) {
    setLoading(true);
    const endpoint = url;
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    };
    const response = await fetch(endpoint, options).catch((err) => {
      setError(err);
      setLoading(false);
    });
    if (!response) return;

    const result = await response.json();
    setData(result);
    setLoading(false);
    return result;
  }

  return [handleSubmit, { data, loading, error }];
}
