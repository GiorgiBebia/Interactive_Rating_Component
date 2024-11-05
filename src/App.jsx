import { useState } from "react";
import Feedback from "./components/Feedback";
import ThankYou from "./components/ThankYou";

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
