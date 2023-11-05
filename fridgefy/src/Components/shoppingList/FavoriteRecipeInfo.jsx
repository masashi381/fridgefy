import styled from 'styled-components';
import parse from 'html-react-parser';

function FavoriteRecipeInfo({ recipe }) {
  return (
    <FlexDiv>
      <p>{parse(recipe.instructions)}</p>
      <img src={recipe.image} alt='' />
    </FlexDiv>
  );
}

export default FavoriteRecipeInfo;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  p {
    width: 100%;
    font-family: 'DM Mono', monospace;
    font-weight: 400;
    font-size: 1.2rem;
    color: #1982c4;
  }
  img {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 834px) {
    flex-direction: column;
    p {
      font-size: 1.4rem;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
    p {
      order: 2;
      font-size: 1.4rem;
    }
    img {
      order: 1;
      width: 33.75rem;
    }
  }
`;
