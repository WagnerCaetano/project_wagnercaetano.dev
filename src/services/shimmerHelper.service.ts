export const generateShimmer = (w: number, h: number) => `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 200">

  <defs>
    <radialGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color: #bdd7ff; stop-opacity: 1" />
      <stop offset="30%" style="stop-color: #5699ff; stop-opacity: 1" />
      <stop offset="75%" style="stop-color: #1e5994; stop-opacity: 1" />
      <stop offset="100%" style="stop-color: #0d263f; stop-opacity: 1" />
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#gradient)" />

  <animateTransform
    xlink:href="#gradient"
    attributeName="gradientTransform"
    type="rotate"
    dur="1s"
    repeatCount="indefinite"
    from="0 200 100"
    to="360 200 100"
    additive="sum"
    calcMode="linear"
  />

  <animateTransform
    xlink:href="#gradient"
    attributeName="x1"
    dur="0.1s"
    values="0%; 100%; 0%"
    repeatCount="indefinite"
    additive="sum"
    calcMode="linear"
  />

  <animateTransform
    xlink:href="#gradient"
    attributeName="x2"
    dur="0.2s"
    values="100%; 200%; 100%"
    repeatCount="indefinite"
    additive="sum"
    calcMode="linear"
  />

</svg>
`;

export const generateShimmerToBase64 = (str: string) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));
