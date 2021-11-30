import Head from "next/head";

interface TitleProps {
  pageName: string;
}

const Title: React.FC<TitleProps> = ({ pageName }) => {
  return (
    <Head>
      <title>
        {pageName} | Venekanta
        {process.env.NODE_ENV === "development" ? " Dev" : ""}
      </title>
    </Head>
  );
};

export default Title;
