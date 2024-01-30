import { useEffect, useState } from "react";
import { HomeCardComponent } from "../components/HomeComponents/HomeCardComponent";
import { homeCards as cards, orderCardCSS } from "../data/homeCards";

export const HomePage = () => {
  const [currentCards] = useState(cards);
  const [orderCard, setOrderCard] = useState([1, 2, 3]);
  const handleChangeCard = (id) => {
    setOrderCard((prevOrderCard) =>
      prevOrderCard
        .filter((el) => el !== id) // Filtra los elementos diferentes al id
        .concat(id)
    );
  };
  const getOrderCardCSS = (cardId) => {
    const index = orderCard.indexOf(cardId);
    if (index !== -1) return orderCardCSS[index];
  };
  useEffect(() => {}, [orderCard]);
  return (
    <div className="bg-gray-200 min-h-screen h-full py-5 flex flex-col items-center gap-3 sm:relative">
      {currentCards.map((card) => (
        <HomeCardComponent
          key={card.id}
          customCSS={`${card.css.size} ${card.css.position}`}
          cardSize={card.cardSize}
          image={card.content.image}
          title={card.content.title}
          description={card.content.description}
          icons={card.icons}
          changeCard={() =>
            card.id === orderCard[orderCard.length - 1]
              ? ""
              : handleChangeCard(card.id)
          }
          orderCardCSS={getOrderCardCSS(card.id)}
        />
      ))}
    </div>
  );
};
