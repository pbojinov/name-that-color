declare const ntc: {
  init: () => void;
  name: (color: string) => [string, string, boolean];
  hsl: (color: string) => [number, number, number];
  rgb: (color: string) => [number, number, number];
  names: [string, string][];
};

export default ntc;
export let { name, names, rgb, hsl } = ntc;
