import styled from 'styled-components';
import MyFridgeCheckBox from './MyFridgeCheckBox';
import { useState, useContext } from 'react';
import { MyFridgeContext } from "../../Context/MyFridgeContext";


function MyFridgeItem({ingredient, onDelete, isChecked}) {

    const [checked, setChecked] = useState(false)
    const { handlecheck } = useContext(MyFridgeContext);


    

    return (
        <>
        <div>{ingredient}</div>
        <DeleteButton 
                onClick={()=>{
                    onDelete(ingredient)
                }}> 
                <img src="../../assets/images/deleteItemIcon.png" width={"15px"} height={"15px"}/>
        </DeleteButton>
        <MyFridgeCheckBox
            element={ingredient}
            setChecked={setChecked}
            checked={isChecked}
            handleChange={handlecheck}
            />
        </>
    );
}

export default MyFridgeItem;


const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  justify-content: space-between;
  flex-wrap: nowrap;
`