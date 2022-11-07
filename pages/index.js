import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/componenet/ItemList";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home | 차누땅땅</title>
        <meta name="description" content="차누땅땅 홈입니다." />
      </Head>
      <Header style={{ paddingTop: 40 }}>베스트 상품</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header style={{ paddingTop: 40 }}>신상품</Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}

export async function getStaticProps(context) {
  const API_URL = process.env.apiUrl;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      list: data,
    },
  };
}
