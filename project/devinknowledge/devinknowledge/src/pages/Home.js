import MainContent from "../components/maincontent/MainContent";
import SideBar from "../components/sidebar/SideBar";
import "./Style.css";

export default function Home() {
  return (
    <div>
      <main>
        <SideBar />
        <MainContent />
      </main>
    </div>
  );
}
