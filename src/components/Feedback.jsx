/* eslint-disable react/prop-types */
import FeedbackRating from "./FeedbackRating";

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

export default Feedback;
