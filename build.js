const fs = require('fs');
const path = require('path');

const outDir = path.join('.vercel', 'output');
const staticDir = path.join(outDir, 'static');

// Clean and recreate .vercel/output
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(staticDir, { recursive: true });

// Write Build Output API v3 config.json
const config = {
  version: 3,
  routes: [
    {
      handle: 'filesystem'
    },
    {
      src: '^/(?!assets/|favicon\\.png|og-image\\.jpg|robots\\.txt|manifest\\.json).*$',
      dest: '/index.html'
    }
  ]
};

fs.writeFileSync(
  path.join(outDir, 'config.json'),
  JSON.stringify(config, null, 2)
);

// Items to copy into static output
const items = [
  'index.html',
  'manifest.json',
  'robots.txt',
  'favicon.png',
  'og-image.jpg',
  'assets'
];

for (const item of items) {
  if (fs.existsSync(item)) {
    const dest = path.join(staticDir, item);
    fs.cpSync(item, dest, { recursive: true });
    console.log(`Copied ${item} -> ${dest}`);
  }
}

console.log('Floatwire build successfully generated for Vercel Output API v3!');
