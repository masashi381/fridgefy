import styled from "styled-components";

function FavoriteRecipeInfo({content, image}){
  return(
    <FlexDiv>
    <ContentP>{content}</ContentP>
    <Img src={image} alt="" />
    </FlexDiv>
  )
};

export default FavoriteRecipeInfo;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentP = styled.p`
  width: 400px;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`

