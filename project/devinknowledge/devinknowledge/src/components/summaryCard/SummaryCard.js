import Proptypes, { string } from "prop-types";
export default function SummaryCard({ id, title, count }) {
  return (
    <div>
      <div class="category-statistics-unity">
        <h3 class="subtitle-statistics-unity">{title}</h3>
        <span id="number-stats-total">{count}</span>
      </div>
    </div>
  );
}
SummaryCard.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  count: Proptypes.number.isRequired,
};
