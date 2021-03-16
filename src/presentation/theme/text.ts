export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'black' | 'thin';

export const font: Readonly<Record<FontWeight, string>> = {
  regular: 'Montserrat',
  medium: 'Montserrat-Medium',
  semibold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold',
  black: 'Montserrat-Black',
  thin: 'Montserrat-Thin'
};
