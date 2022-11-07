import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import Item from "../../src/componenet/Item";

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    <div style={{ padding: "300px 0" }}>
      <Loader active inline="centered">
        Loading
      </Loader>
    </div>;
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          {name}환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const API_URL = process.env.apiUrl;
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: "495" } },
    //   { params: { id: "488" } },
    //   { params: { id: "477" } },
    // ],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
