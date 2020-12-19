const decimalToHex = (number: number) => {
  const decimal = Math.round(number * 2.55);
  const hex = decimal.toString(16).padStart(2, '0').toUpperCase();

  return hex;
};

const HexWithAlphaChannel = (hex: string, alpha: number): string => {
  const alphaChannel = decimalToHex(alpha);
  const hexWithAlpha = `${hex}${alphaChannel}`;

  return hexWithAlpha;
};

export default HexWithAlphaChannel;
