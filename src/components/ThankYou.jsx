/* eslint-disable react/prop-types */
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

export default ThankYou;
