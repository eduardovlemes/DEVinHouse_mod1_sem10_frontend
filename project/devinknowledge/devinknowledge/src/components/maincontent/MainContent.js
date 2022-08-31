import Filter from "../filter/Filter";
import Summary from "../summary/Summary";
import SummaryCard from "../summaryCard/SummaryCard";
import TipCard from "../tipCard/TipCard";

export default function MainContent() {
  return (
    <div id="container-tips">
      <Summary />
      <Filter />
      <div id="show-tips">
        <TipCard title="" language="" category="" description="" video="" />
      </div>
      <div class="img-background"></div>
    </div>
  );
}
