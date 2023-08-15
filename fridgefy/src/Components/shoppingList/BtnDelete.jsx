import styled from "styled-components"

function BtnDelete({ setDeleteActive }){
  function deleteHandler(){
    localStorage.removeItem("data");
    setDeleteActive(false);
  };
  return(
    <>
    <DeleteSpan onClick={deleteHandler}><i class="fa-solid fa-trash"></i></DeleteSpan>
    </>
  )
};

export default BtnDelete;

const DeleteSpan = styled.span`
  margin-right: 10px;
`