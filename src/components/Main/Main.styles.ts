import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`;

export const Logo = styled.img`
  width: 15rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
