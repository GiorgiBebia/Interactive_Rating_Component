/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(null);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="max-w-[1440px] w-full h-[800px] bg-[#131518] flex">
      {submit ? (
        <ThankYou clicked={clicked} />
      ) : (
        <Feedback
          clicked={clicked}
          setClicked={setClicked}
          setSubmit={setSubmit}
        />
      )}
    </div>
  );
}

export default App;

function Feedback({ clicked, setClicked, setSubmit }) {
  function handleClick(buttonNumber) {
    setClicked(buttonNumber);
  }

  function handleSubmit() {
    if (clicked !== null) setSubmit(true);
  }

  return (
    <div className="w-[412px] mobile:w-[327px] h-[416px] mobile:h-[360px] bg-[#181E27] rounded-[30px] mx-auto mt-[188px] mobile:mt-[154px]">
      <div className="w-[48px] mobile:w-[40px] h-[48px] mobile:h-[40px] rounded-full bg-[#262E38] mt-[39px] mobile:mt-[24px] ml-[32px] mobile:ml-[24px] flex justify-center items-center">
        <img
          className="w-[16px] mobile:w-[13px] h-[16px] mobile:h-[13px]"
          src="star.png"
          alt="Star"
        />
      </div>
      <h2 className="font-overpass font-bold text-[28px] mobile:text-[24px] text-white mt-[30px] mobile:mt-[16px] ml-[32px] mobile:ml-[24px]">
        How did we do?
      </h2>
      <p className="font-overpass text-[15px] mobile:text-[14px] text-[#969FAD] w-[340px] mobile:w-[279px] mt-[15px] mobile:mt-[10px] ml-[32px] mobile:ml-[24px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="w-[341px] mobile:w-[281px] h-[51px] mobile:h-[42px] mt-[24px] ml-[32px] mobile:ml-[24px] flex justify-between">
        {[1, 2, 3, 4, 5].map((number) => (
          <FeedbackRating
            key={number}
            buttonNumber={number}
            clicked={clicked}
            handleClick={handleClick}
          />
        ))}
      </div>
      <button
        className="w-[341px] mobile:w-[279px] h-[45px] mt-[32px] mobile:mt-[24px] ml-[32px] mobile:ml-[24px] mb-[25px] mobile:mb-[32px] bg-[#FC7614] rounded-[22.5px] font-overpass font-bold text-[15px] mobile:text-[14px] text-[#131518] tracking-[2px] mobile:tracking-[1.87px] hover:bg-white"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}

function FeedbackRating({ buttonNumber, clicked, handleClick }) {
  return (
    <div
      className={`w-[51px] mobile:w-[42px] h-[51px] mobile:h-[42px] rounded-full ${
        clicked === buttonNumber ? "bg-white" : "bg-[#262E38]"
      } hover:bg-[#FC7614]`}
      onClick={() => handleClick(buttonNumber)}
    >
      <h5
        className={`font-overpass font-bold text-[16px] mobile:text-[14px] ${
          clicked === buttonNumber ? "text-[#262E38]" : "text-[#969FAD]"
        } w-full h-full flex items-center justify-center cursor-pointer`}
      >
        {buttonNumber}
      </h5>
    </div>
  );
}

function ThankYou({ clicked }) {
  return (
    <div className="w-[412px] mobile:w-[327px] h-[416px] mobile:h-[360px] bg-[#181E27] rounded-[30px] mx-auto mt-[188px] mobile:mt-[154px]">
      <img
        className="w-[162px] mobile:w-[144px] h-[108px] mobile:h-[96px] mt-[45px] mobile:mt-[34px] ml-[121px] mobile:ml-[92px]"
        src="thankYouIcon.png"
        alt=""
      />
      <div className="w-[193px] mobile:w-[168px] h-[32px] mobile:h-[32px] rounded-[22.5px] bg-[#262E38] mt-[32px] mobile:mt-[24px] mx-auto flex items-center justify-center">
        <h4 className="font-overpass text-[15px] mobile:text-[14px] text-[#FC7614] ">
          You selected {clicked} out of 5
        </h4>
      </div>
      <h2 className="font-overpass font-bold text-[28px] mobile:text-[24px] text-white mt-[32px] mobile:mt-[24px] ml-[135px] mobile:ml-[103px]">
        Thank you!
      </h2>
      <p className="w-[340px] mobile:w-[279px] text-center mt-[15px] mobile:mt-[10px] ml-[32px] mobile:ml-[24px] font-overpass text-[15px] mobile:text-[14px] text-[#969FAD]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
