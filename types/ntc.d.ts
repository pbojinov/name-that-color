declare const ntc: {
  init: () => void;
  name: (color: any) => [string, string, boolean];
  hsl: (color: any) => [number, number, number];
  rgb: (color: any) => [number, number, number];
  names: [string, string][];
};

export default ntc;
export let { name, names, rgb, hsl } = ntc;
