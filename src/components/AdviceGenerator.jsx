//import { Advice } from "../Services/DataServices";
import { useState } from "react";

const AdviceScreen = () => {
    const [display, setDisplay] = useState('')
    const [number, setNumber] = useState('')

    const Advice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setDisplay(data.slip.advice)
        setNumber(data.slip.id)

      };

      const displayTxt = () => {
        Advice()
    }
    Advice()

    return(
        <>
        <div className='absolute inset-0 flex items-center justify-center font-manrope font-extrabold'>
            <div className="w-[500px] bg-[#323A49] text-center rounded-2xl">
                <p className="text-[#52FFA8] pt-8 tracking-widest text-[12px]">ADVICE: #{number}</p>
                <h2 className="text-[#CEE3E9] text-[28px] p-8">"{display}"</h2>
                <div className="flex justify-center pb-5">
                <img src="images/pattern-divider-desktop.svg" alt="" />
                </div>
                <div className="flex justify-center">
                <div onClick={displayTxt} className="relative top-6 rounded-full bg-[#52FFA8] w-12 h-12 flex justify-center items-center hover:shadow-[0px_0px_25px_5px_rgba(82,255,168,1)]">
                    <img src="images/icon-dice.svg" className="h-5 w-5" alt="" />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdviceScreen