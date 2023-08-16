function BtnAccordion({ isActive, setActive }){
  function accordionHandler(){
    setActive(!isActive);
  };
  return(
    <div onClick={accordionHandler}>
    <span>{isActive ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span>
    </div>
  )
};

export default BtnAccordion;