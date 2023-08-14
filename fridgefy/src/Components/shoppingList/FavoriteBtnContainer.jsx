import BtnDelete from "./BtnDelete";
import BtnAccordion from "./BtnAccordion";

function FavoriteBtnContainer({isActive, setActive, setDeleteActive}){
  return(
    <>
    <BtnDelete setDeleteActive={setDeleteActive}/>
    <BtnAccordion isActive={isActive} setActive={setActive}/>
    </>
  )
};

export default FavoriteBtnContainer;