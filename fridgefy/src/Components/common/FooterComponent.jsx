import React from 'react'
import { styled } from 'styled-components'

function FooterComponent() {
  return (
    <FooterDiv>
        <div>
        <p>Created by: </p>
        <h4><a href='https://github.com/diogoka'target='blank'>Diogo</a>,<a href='https://github.com/masashi381'target='blank'> Masashi</a>, <a href='https://github.com/DaisukeSK'target='blank'>Daisuke </a> & <a href='https://github.com/GerardoAz'target='blank'>Gerardo </a></h4>
        </div>
        <p className='copy'>&copy;2023 Fridgefy Project</p>
    </FooterDiv>
  )
};

const FooterDiv = styled.div`
    position: absolute;
    background-color: #40b5c9;
    bottom: -15%;
    height: 15%;
    width: 100%;

    p, h4{
        color: black;
    
    }
    p{
        margin-bottom: 0;
    }
    h4{
        margin-left: 1rem;
        margin-bottom: 5px;
    }
    a{
        text-decoration: none;
        color: black; 
    }
    .copy{
        font-size: .7rem;
        text-align: center;
        margin: 0;
        margin-top: 1rem;
        padding: 0;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;

    }
`

export default FooterComponent
