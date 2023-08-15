function BtnDelete({ setDeleteActive }){
  function deleteHandler(){
    localStorage.removeItem("data");
    setDeleteActive(false);
  };
  return(
    <>
    <button onClick={deleteHandler}>Delete</button>
    </>
  )
};

export default BtnDelete;