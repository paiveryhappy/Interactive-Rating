import { useState } from "react";
import "./App.css";
import GiveRating from "./components/Rating";
import ThankYou from "./components/Thankyou";
import Footer from "./components/Footer";

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);

  const handleRatingSubmit = (score) => {
    setRatingScore(score);
    setShowThankYou(true);
  };

  return (
    <>
      {!showThankYou && <GiveRating onSubmit={handleRatingSubmit} />}
      {showThankYou && <ThankYou selectedScore={ratingScore} />}
      <Footer />
    </>
  );
}

export default App;
