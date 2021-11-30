import axios from "axios";
import type { AppProps } from "next/app";
import { Head } from "next/document";
import { SWRConfig } from "swr";
import "../styles/App.scss";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ADDRESS;
  axios.defaults.withCredentials = true;

  const fetcher = async (url: string) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err: any) {
      throw err.response.data;
    }
  };

  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 5000,
        revalidateOnReconnect: true,
        refreshInterval: 10000,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
export default MyApp;
