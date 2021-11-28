import * as S from './Main.styles';

const Main = ({
  title = 'Esdras Proj Initialzer',
  description = 'My Boilerplate for Next.js & React.js Projects using TypeScript, Styled Components, Jest, Storybook, Husky and ESLint/Prettier',
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/icons/icon-512.png"
        alt="Imagem de um átomo dentro de um hexágono representando a logo do React"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Ilustração de um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  );
};

export default Main;
