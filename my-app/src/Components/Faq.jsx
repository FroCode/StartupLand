import React from 'react';
import { faq } from '../Assets/icons';

function Faq() {
  const firstPart = faq.slice(0, 5);
  const secondPart = faq.slice(5);

  return (
    <div>
      <div className="container mx-auto">
      <div className="container m-auto pb-20">
                    <div className="texts text-center pt-20">
                        <h3 className="text-[#5B2B9D] mb-5 font-bold text-lg">
                        Get yours question answer
                        </h3>
                        <h3 className="text-[#0F2137] font-black text-[16px] text-xl">
                        Frequantly asked question
                        </h3>
                    </div>
                </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 m-5 ">
            {firstPart.map((qst) => {
              return (
                <div className="texts border-b-2 border-indigo-500 pb-5 mt-5 border-bottom" key={qst.question}>
                  <h2 className="font-bold text-[#000000e3] mb-5">{qst.question}</h2>
                  <h2>{qst.answer}</h2>
                </div>
              );
            })}
          </div>
          <div className=" p-4 m-5 ">
            {secondPart.map((qst) => {
              return (
                <div className="texts border-b-2 border-indigo-500 pb-5 mt-5 border-bottom" key={qst.question}>
                  <h2 className="font-bold text-[#000000e3] mb-5">{qst.question}</h2>
                  <h2>{qst.answer}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
