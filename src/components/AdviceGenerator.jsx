//import { Advice } from "../Services/DataServices";
import { useEffect, useState } from "react";
import Sound from "/audio/SoundFX.ogg"

const AdviceScreen = () => {

   function play()
    {
        new Audio(Sound).play()
    }
    
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
          play()
    }

    useEffect(() => {
        Advice();
    }, [])

    return(
        <>
        <div className='absolute inset-0 flex items-center justify-center font-manrope font-extrabold'>
            <div className="w-[500px] bg-[#323A49] text-center rounded-2xl mx-5">
                <p className="text-[#52FFA8] pt-8 tracking-widest text-[12px]">ADVICE: #{number}</p>
                <h2 className="text-[#CEE3E9] text-[28px] p-8">"{display}"</h2>
                <div className="hidden sm:hidden md:block">
                    <div className="flex justify-center pb-5">
                    <img src="images/pattern-divider-desktop.svg" alt="pattern-divider" />
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="flex justify-center pb-5">
                    <img src="images/pattern-divider-mobile.svg" alt="pattern-divider" />
                    </div>
                </div>
                <div className="flex justify-center">
                <div onClick={displayTxt} className="relative top-7 rounded-full bg-[#52FFA8] w-[60px] h-[60px] flex justify-center items-center hover:shadow-[0px_0px_25px_5px_rgba(82,255,168,1)]">
                    <img src="images/icon-dice.svg" className="h-7 w-7" alt="dice" />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdviceScreen