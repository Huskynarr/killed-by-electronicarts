import styled from 'styled-components';

const LogoSize = 55;
export const Logo = styled.img`
  display: block;
  width: ${LogoSize}px;
  height: ${LogoSize}px;
  margin: 0 15px 0 0;
  @media screen and (max-width: 600px) {
    width: ${LogoSize - LogoSize * 0.125}px;
    height: ${LogoSize - LogoSize * 0.125}px;
  }
`;

export const Masthead = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-weight: lighter;
  text-align: center;
  margin: 0;
  font-size: 2.5em;
  padding: 10px 0;
  /* @media screen and ( max-width: 600px ) {
    font-size: 1.75em;
  } */
`;
