import CardList from "../cardList/CardList";
import Filter from "../filter/Filter";
import Summary from "../summary/Summary";
import TipCard from "../tipCard/TipCard";

export default function MainContent({ tipList }) {
  return (
    <div id="container-tips">
      <Summary />
      <Filter />
      <CardList>
        <div id="show-tips">
          {tipList.map((tip) => {
            return (
              <TipCard
                key={tip.id}
                id={tip.id}
                title={tip.title}
                language={tip.language}
                category={tip.category}
                description={tip.description}
                video={tip.video}
              />
            );
          })}
        </div>
      </CardList>
      <div class="img-background"></div>
    </div>
  );
}
