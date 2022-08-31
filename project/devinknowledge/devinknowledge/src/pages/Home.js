import { useState } from "react";
import MainContent from "../components/maincontent/MainContent";
import SideBar from "../components/sidebar/SideBar";
import "./Style.css";

export default function Home() {
  const [tipList, setTipList] = useState([]);

  return (
    <div>
      <main>
        <SideBar tipList={tipList} setTipList={setTipList} />
        <MainContent tipList={tipList} />
      </main>
    </div>
  );
}
