function BtnAccordion({ isActive, setActive }){
  function accordionHandler(){
    setActive(!isActive);
  };
  return(
    <div onClick={accordionHandler}>
    <span>{isActive ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
    </div>
  )
};

export default BtnAccordion;