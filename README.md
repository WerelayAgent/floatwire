# Floatwire ($FWIR)

> **Micro-cap stock perpetuals powered by attested multi-source prices, adaptive risk engine, and pool-versus-trader execution on Solana.**

[![Solana](https://img.shields.io/badge/Blockchain-Solana-blueviolet.svg)](https://solana.com)
[![Token CA](https://img.shields.io/badge/pump.fun-Coming%20Soon-brightgreen.svg)](https://pump.fun/)
[![Website](https://img.shields.io/badge/Website-floatwire.app-blue.svg)](https://floatwire.app/)

---

## Overview

Traditional perpetual exchanges only list major liquid equities and top cryptocurrencies, leaving thousands of high-volatility, low-float equities unlisted. **Floatwire** changes that by introducing a decentralized derivatives protocol purpose-built for thin equity markets on **Solana**.

### Core Architecture

1. **The Floatwire Oracle**:
   - Multi-source price aggregation with TEE attestation.
   - Cryptographically signed price updates with sub-second finality on Solana.
   - Rigorous outlier rejection and confidence bands.

2. **Adaptive Risk Engine**:
   - Dynamic spreads and balanced funding rate formulas.
   - Tiered adaptive leverage scaled against real-time float and open-interest caps.
   - Mirrored market halts and gap-loss waterfall protections.

3. **Pool-versus-Trader Execution**:
   - Deep pooled liquidity settlement in USDC.
   - Transparent mark-to-market valuations and real-time verifiable on-chain vault solvency.

---

## Token Information

- **Token Name:** Floatwire
- **Ticker:** `$FWIR`
- **Network:** Solana
- **Launchpad:** Coming soon on [pump.fun](https://pump.fun/)

---

## Development & Deployment

### Local Development
```bash
npm install
npm start
```

### Static Build for Vercel
```bash
node build.js
```

---

## License

MIT © Floatwire Protocol
