# poliedra86.github.io

Personal portfolio website for Chiara Maria Dabusti

Il sito è visibile a [questo link](https://poliedra86.github.io/)

## Development Setup

This project uses Tailwind CSS for styling alongside custom CSS.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server with CSS watching:

```bash
npm run build-css
```

3. In another terminal, start the local server:

```bash
npm start
```

### Scripts

- `npm run build-css` - Watch for changes and build CSS (development)
- `npm run build-css-prod` - Build minified CSS for production
- `npm start` - Start local development server

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch. The GitHub Action will:

1. Install dependencies
2. Build the production CSS
3. Deploy to GitHub Pages

### Tailwind Configuration

The project includes custom colors and fonts in `tailwind.config.js` that match the existing design:

- Custom color palette (brand-pink, brand-yellow, etc.)
- Custom font families (colaborate-bold, colaborate-light, etc.)
- Custom font sizes

### File Structure

```
├── src/
│   └── input.css          # Tailwind input file with custom CSS
├── dist/
│   └── style.css          # Generated output CSS (do not edit directly)
├── tailwind.config.js      # Tailwind configuration
├── index.html             # Main HTML file
├── script.js              # JavaScript functionality
└── .github/workflows/      # GitHub Actions for deployment
```
