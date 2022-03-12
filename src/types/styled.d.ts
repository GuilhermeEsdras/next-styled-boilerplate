import theme from '@src/styles/theme';
import 'styled-components';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
