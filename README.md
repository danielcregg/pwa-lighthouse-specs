# PWA Lighthouse Specs

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

A minimal Progressive Web App (PWA) that meets all Google Chrome Lighthouse minimum PWA requirements. This project serves as a reference implementation demonstrating the essential components needed to pass a Lighthouse PWA audit.

## Overview

This repository provides a bare-bones PWA that satisfies the three core Lighthouse PWA criteria:

1. **HTTPS Enabled** -- Required to register a service worker.
2. **Web App Manifest** -- A JSON file (`manifest.webmanifest`) that defines app name, icons, start URL, display mode, and theme colors.
3. **Service Worker** -- A JavaScript file that intercepts fetch requests and provides offline caching capabilities.

The project includes a GitHub Actions workflow for automated deployment to a remote server via SSH/rsync.

## Features

- Passes all Chrome Lighthouse minimum PWA requirements
- Service worker with install, activate, and fetch event handling
- Offline-first caching strategy
- Web app manifest with maskable and standard icons (192x192 and 512x512)
- Automated CI/CD deployment pipeline via GitHub Actions
- PHP-based index page for server-side rendering support

## Prerequisites

- A web server with PHP support (e.g., Apache, Nginx)
- HTTPS certificate configured on the server (free certificates available via [Let's Encrypt / Certbot](https://certbot.eff.org/))
- A modern web browser that supports service workers

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danielcregg/pwa-lighthouse-specs.git
   cd pwa-lighthouse-specs
   ```

2. Deploy to a PHP-enabled web server with HTTPS configured.

### Usage

1. Navigate to the deployed application URL in a modern browser.
2. Open Chrome DevTools and run a Lighthouse audit to verify PWA compliance.
3. The app can be installed to the home screen on supported devices via the browser's "Add to Home Screen" prompt.

## Tech Stack

- **HTML5** -- Page structure and semantic markup
- **JavaScript** -- Service worker and PWA registration logic
- **PHP** -- Server-side rendering in `index.php`
- **Web App Manifest** -- PWA metadata and configuration
- **GitHub Actions** -- CI/CD deployment automation

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
