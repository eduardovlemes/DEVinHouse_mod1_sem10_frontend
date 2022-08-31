import SummaryCard from "../summaryCard/SummaryCard";

export default function Summary() {
  return (
    <div id="category-statistics-all">
      <SummaryCard id="number-stats-total" title="Total" count={0} />
      <SummaryCard id="number-stats-frontend" title="FrontEnd" count={0} />
      <SummaryCard id="number-stats-backend" title="BackEnd" count={0} />
      <SummaryCard id="number-stats-fullstack" title="FullStack" count={0} />
      <SummaryCard id="number-stats-softskill" title="Soft" count={0} />
    </div>
  );
}
