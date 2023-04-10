import React, { useState } from 'react';
import data from './data';
import Card from './Card';


function App() {

  const [visibleCards, SetVisibleCards] = useState(data);
  const [allCardsCleared, setAllCardsCleared] = useState(false);

  const handleVisibility = (id) => {
      const updated = visibleCards.filter(x => x.id != id);
      SetVisibleCards(updated);
      if (updated.length === 0) setAllCardsCleared(true);
  };

  const refreshClick = () => {
    SetVisibleCards(data);
    setAllCardsCleared(false);
  }

  const cards = visibleCards.map((x) => {
    return (
      <Card
        key={x.id}
        id={x.id}
        img={x.image}
        name={x.name}
        price={x.price}
        info={x.info}
        onNotInterested={handleVisibility}
      />
    );
  });

  return (
    <div className="App">
    {visibleCards.length > 0 ? (
      cards
    ) : (
      <div className="refresh-container">
        <div className="refresh-box">
          <p>All cards have been cleared. Press the button below to refresh.</p>
          <button className="refresh-button" onClick={refreshClick}>
            Refresh
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default App;