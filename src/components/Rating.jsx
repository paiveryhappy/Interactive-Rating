import Star from "../images/icon-star.svg";
import "../App.css";
import { useState } from "react";

function GiveRating({ onSubmit }) {
  const [ratingScore, setRatingScore] = useState(0);

  const handleRatingClick = (score) => {
    setRatingScore(score);
  };

  const handleSubmit = () => {
    onSubmit(ratingScore); // ส่งค่า ratingScore ไปยังฟังก์ชัน onSubmit ที่ถูกส่งผ่าน Props
  };

  return (
    <div className="rating-container max-w-sm rounded-2xl p-8">
      <img src={Star} alt="icon-star" />
      <h2 className="text-white mt-4 text-2xl">How did we do?</h2>
      <p className="text-color">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="flex gap-8 items-center justify-center mt-4">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <li
              className={`hover:text-orange-500 cursor-pointer ${
                item === ratingScore
                  ? "bg-orange-500  text-white"
                  : "text-gray-400 hover:bg-white hover:text-orange-500  bg-zinc-900"
              }`}
              key={item}
              onClick={() => handleRatingClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <button
        className="btn mt-5 w-80 ml-auto mr-auto rounded-3xl"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default GiveRating;
