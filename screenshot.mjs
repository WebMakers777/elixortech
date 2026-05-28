import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  // Wait a bit for SplashCursor to appear (it has a 2000ms delay)
  await new Promise(r => setTimeout(r, 3000));
  
  await page.screenshot({ path: '/Users/nikhil__mittal/.gemini/antigravity/brain/d6d4f2cc-4319-4ddc-9e2e-9bb7e672ce6c/screenshot.png' });
  await browser.close();
})();
