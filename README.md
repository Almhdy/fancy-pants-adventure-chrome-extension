# Fancy Pants Adventure

`Fancy Pants Unblocked` is a Chrome extension package for launching **Fancy Pants Adventure** in a dedicated browser tab with bundled local game files and a local Ruffle runtime.

## Features

- One-click launch from the Chrome toolbar
- Dedicated full-tab game experience
- Bundled local Ruffle runtime
- Local SWF game file included in the extension
- Opens `unblocked-games.org` once on first install

## Project Structure

- `manifest.json` - Chrome extension manifest
- `service-worker.js` - toolbar click handling and first-install site open
- `game.html`, `game.css`, `game.js` - full-tab game player
- `ruffle-config.js` - Ruffle player configuration
- `game/fancypants.swf` - bundled game asset
- `vendor/ruffle/` - local Ruffle runtime files
- `icons/` - extension icons

## Load The Extension Locally

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `fancy-pants-unblocked` folder
5. Click the extension icon to launch the game

## Notes

- This repository is focused on the Chrome extension package and related store assets.
- Game, character, and brand rights belong to their respective owners.

## Website

- Main site: https://unblocked-games.org/
- Game page: https://unblocked-games.org/game/fancy-pants/
- Privacy policy: https://unblocked-games.org/privacy-policy/
- Support: https://unblocked-games.org/contact-us/
