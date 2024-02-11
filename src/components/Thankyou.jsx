import thankyouIcon from "../images/illustration-thank-you.svg";

function ThankYou({ selectedScore }) {
  return (
    <div className="thankyou-container max-w-sm rounded-2xl p-8 overflow-hidden">
      <img src={thankyouIcon} alt="illustration-thank-you" className="m-auto" />
      <p className="text-center mt-3 select-score rounded-2xl p-2 m-auto">
        You selected <span>{selectedScore}</span> out of 5
      </p>
      <h3 className="text-white text-2xl text-center mt-3">Thank you!</h3>
      <p className="text-color text-center mt-3">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
