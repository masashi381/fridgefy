function BtnAccordion({ isActive, setActive }){
  function accordionHandler(){
    setActive(!isActive);
  };
  return(
    <div onClick={accordionHandler}>
    <span>{isActive ? "-" : "+"}</span>
    </div>
  )
};

export default BtnAccordion;