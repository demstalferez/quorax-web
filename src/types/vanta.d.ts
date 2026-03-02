declare module 'vanta/dist/vanta.clouds.min' {
  const CLOUDS: (opts: Record<string, any>) => {
    destroy: () => void;
    resize: () => void;
  };
  export default CLOUDS;
}
