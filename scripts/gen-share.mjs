import fs from "fs";
import sharp from "sharp";

const findFont = (dir, re) => {
  const f = fs.readdirSync(dir).find((x) => re.test(x) && x.endsWith(".woff2"));
  return fs.readFileSync(`${dir}/${f}`).toString("base64");
};
const orb = findFont("node_modules/@fontsource-variable/orbitron/files", /latin-wght-normal/);
const inter = findFont("node_modules/@fontsource-variable/inter/files", /latin-wght-normal/);

const defs = `
  <defs>
    <linearGradient id="pg" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0" stop-color="#9cc0ff"/><stop offset="0.5" stop-color="#3b82f6"/><stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
    <radialGradient id="g1" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#3b82f6" stop-opacity="0.55"/><stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.5"/><stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
  </defs>`;
const style = `<style>
  @font-face{font-family:'Orbitron';src:url(data:font/woff2;base64,${orb}) format('woff2');font-weight:700;}
  @font-face{font-family:'Inter';src:url(data:font/woff2;base64,${inter}) format('woff2');font-weight:600;}
  text{font-family:'Inter';}
</style>`;

// ── OG (1200×630) ──
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">${defs}${style}
  <rect width="1200" height="630" fill="#0a0a0b"/>
  <ellipse cx="330" cy="150" rx="520" ry="420" fill="url(#g1)"/>
  <ellipse cx="960" cy="560" rx="560" ry="440" fill="url(#g2)"/>
  <text x="600" y="188" font-size="22" fill="#a8a8b0" text-anchor="middle" letter-spacing="7">EARLY ACCESS · COACHING SOFTWARE</text>
  <text x="600" y="330" font-family="Orbitron" font-weight="700" font-size="104" text-anchor="middle" letter-spacing="4"><tspan fill="#3b82f6">[</tspan><tspan fill="url(#pg)"> PROTOCOL </tspan><tspan fill="#3b82f6">]</tspan></text>
  <text x="600" y="418" font-size="38" font-weight="600" fill="#f5f5f7" text-anchor="middle">Coaching software, built by coaches.</text>
  <rect x="452" y="474" width="296" height="66" rx="14" fill="#3b82f6"/>
  <text x="600" y="516" font-size="27" font-weight="600" fill="#ffffff" text-anchor="middle">Join the waitlist  →</text>
  <text x="600" y="588" font-size="24" fill="#8a8a93" text-anchor="middle" letter-spacing="1">protocolapp.uk</text>
</svg>`;

// ── Story (1080×1920) — content kept in the safe middle band ──
const story = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920">${defs}${style}
  <rect width="1080" height="1920" fill="#0a0a0b"/>
  <ellipse cx="300" cy="520" rx="620" ry="520" fill="url(#g1)"/>
  <ellipse cx="820" cy="1360" rx="640" ry="560" fill="url(#g2)"/>
  <text x="540" y="640" font-size="26" fill="#a8a8b0" text-anchor="middle" letter-spacing="8">EARLY ACCESS OPENING SOON</text>
  <text x="540" y="830" font-family="Orbitron" font-weight="700" font-size="108" text-anchor="middle" letter-spacing="4"><tspan fill="#3b82f6">[</tspan><tspan fill="url(#pg)"> PROTOCOL </tspan><tspan fill="#3b82f6">]</tspan></text>
  <text x="540" y="960" font-size="52" font-weight="600" fill="#f5f5f7" text-anchor="middle">Coaching software,</text>
  <text x="540" y="1028" font-size="52" font-weight="600" fill="#f5f5f7" text-anchor="middle">built by coaches.</text>
  <text x="540" y="1150" font-size="30" fill="#a8a8b0" text-anchor="middle" letter-spacing="2">Program · Track · Nutrition · Payments</text>
  <rect x="330" y="1280" width="420" height="88" rx="18" fill="#3b82f6"/>
  <text x="540" y="1336" font-size="34" font-weight="600" fill="#ffffff" text-anchor="middle">Join the waitlist  →</text>
  <text x="540" y="1440" font-size="34" fill="#8a8a93" text-anchor="middle" letter-spacing="1">protocolapp.uk</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile("src/app/opengraph-image.png");
await sharp(Buffer.from(story)).png().toFile("public/brand/protocol-story.png");
console.log("OG:", Math.round(fs.statSync("src/app/opengraph-image.png").size/1024)+"KB");
console.log("Story:", Math.round(fs.statSync("public/brand/protocol-story.png").size/1024)+"KB");
