import { useState } from "react";
import { HomeCardComponent } from "../components/HomeComponents/HomeCardComponent";
import { homeCards as cards } from "../data/homeCards";

export const HomePage = () => {
  const [currentCards, setCurrentCards] = useState(cards);
  return (
    <>
      <div className="bg-gray-200 h-screen relative">
        {currentCards.map((card) => (
          <HomeCardComponent
            key={card.id}
            customCSS={`${card.css.color} ${card.css.size} ${card.css.position}`}
            cardSize={card.cardSize}
            image={card.content.image}
            title={card.content.title}
            description={card.content.description}
            icons={card.icons}
          />
        ))}
      </div>
    </>
  );
};
