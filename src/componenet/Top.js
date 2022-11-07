import Image from "next/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Image
            src="/images/angma.png"
            alt="logo"
            width={80}
            height={65}
            style={{ display: "block" }}
          />
        </div>
        <Header>차누땅땅</Header>
      </div>
      <Gnb />
    </div>
  );
}
