import { useState, useEffect } from "react";

const Masthead = () =>{
  const [opacity, setOpacity] = useState(0.2);
  const [isScrolled,setIsScrolled] = useState(false);
  const [scrollBlocked,setScrollBlocked] = useState(true);
  const [buttonVisible,setButtonVisible] = useState(false);

  useEffect(()=> {
    const handleWheel = (e) => {
      if(isScrolled) return;
      e.preventDefault();

      setOpacity((prev)=> {
        const newOpacity = Math.min(1,prev+0.1);
        if(newOpacity >= 1){
          setIsScrolled(true);
          setScrollBlocked(false);
          setButtonVisible(true);
          window.removeEventListener("wheel",handleWheel);
        }
        return newOpacity;
      });
    };
    const preventScroll = (e) => {
      if(scrollBlocked) e.preventDefault();
      };
      window.addEventListener("wheel", handleWheel,{passive:false});
      window.addEventListener("touchmove", preventScroll,{passive:false});

      return ()=> {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchmove", preventScroll);
      };
  },[isScrolled,scrollBlocked]);
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center select-none text-white">
       <div className="absolute top-[180px] text-sm opacity-100  animate-bounce">
    ↓ 스크롤하여 진행해주세요.
  </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-wide leading-tight font-['KakaoBigSans-ExtraBold'] text-center transition-opacity duration-300" style={{opacity}}>
      Backend Developer
      </h1>
      <h2 className="text-2xl sm:text-4xl font-semibold text-center mt-4 trasition-opacity duration-300
      "style={{opacity
      }}>
      지식과 경험을 가진
      <div className="my-2" />
      개발자 소화경 입니다.
      </h2>
     { buttonVisible && <a href="#about" className="mt-8 bg-transparent border-2 border-white rounded-full py-2 px-6 hover:bg-white hover:text-black transition-all duration-300">
  저를 조금 더 알아보고 싶나요?
</a>}
    </div>
  )
}

export default Masthead;

