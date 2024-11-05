/* eslint-disable react/prop-types */
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

export default FeedbackRating;
