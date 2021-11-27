import * as S from './Main.styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/icon-512.png"
        alt="Imagem de um átomo dentro de um hexágono representando a logo do React"
      />
      <S.Title>Esdras Proj Initialzer</S.Title>
      <S.Description>
        My Boilerplate for Next.js/React.js Projects using TypeScript, Styled
        Components, Jest, Storybook, Husky and ESLint/Prettier.
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Ilustração de um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  );
};

export default Main;
