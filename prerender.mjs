/**
 * prerender.mjs
 * Post-build static prerendering script.
 * Reads dist/index.html, for each route copies it into dist/<route>/index.html
 * so that Googlebot and CDNs receive real HTML per URL immediately.
 *
 * Blog post routes get their own unique HTML with full article metadata
 * injected into the <head> (title, description, og:title, og:description, canonical).
 *
 * Usage: node prerender.mjs  (run after `npm run build`)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');

// ─── Blog posts ───────────────────────────────────────────────────────────────
// Manually list slugs + metadata so we don't need to import TS at runtime.
const BLOG_POSTS = [
  { slug: 'ultimate-restaurant-profit-margins-2026',           title: 'Ultimate Guide to Restaurant Profit Margins 2026', description: 'Most restaurants operate on a razor-thin 3-5% margin. Here is the mathematical blueprint to optimizing your prime costs and breaking the 20% barrier.' },
  { slug: 'break-free-from-third-party-delivery-fees',         title: 'Break Free From Third-Party Delivery Fees', description: 'How to stop paying 30% commission to food delivery apps and keep more revenue in your restaurant.' },
  { slug: 'automating-the-kitchen-kds-systems',                title: 'Automating the Kitchen: KDS Systems Explained', description: 'A complete guide to Kitchen Display Systems (KDS) — how they work, why they matter, and how to choose the right one.' },
  { slug: 'restaurant-success-blueprint',                      title: 'Restaurant Success Blueprint', description: 'The complete operational playbook for running a profitable restaurant in 2026.' },
  { slug: 'restaurant-owners-ultimate-playbook',               title: 'Restaurant Owner\'s Ultimate Playbook', description: 'Everything a restaurant owner needs to know to open, run, and scale a successful food business.' },
  { slug: 'money-the-heart-of-every-restaurant',               title: 'Money: The Heart of Every Restaurant', description: 'Master restaurant financial management — from daily cash flow to annual P&L statements.' },
  { slug: 'restaurant-operations-masterclass',                 title: 'Restaurant Operations Masterclass', description: 'An in-depth masterclass on streamlining restaurant operations for efficiency and profitability.' },
  { slug: 'building-high-performance-restaurant-team',         title: 'Building a High-Performance Restaurant Team', description: 'How to hire, train, and retain top restaurant staff for consistent service quality.' },
  { slug: 'marketing-that-actually-brings-customers',          title: 'Marketing That Actually Brings Customers', description: 'Proven digital and local marketing strategies that bring real customers to your restaurant.' },
  { slug: 'increasing-sales-without-more-customers',           title: 'Increasing Sales Without More Customers', description: 'How to grow restaurant revenue through upselling, menu engineering, and operational efficiency.' },
  { slug: 'solving-biggest-restaurant-problems',               title: 'Solving the Biggest Restaurant Problems', description: 'Common restaurant problems and proven solutions — from food waste to staff turnover to low margins.' },
  { slug: 'restaurant-growth-and-expansion',                   title: 'Restaurant Growth and Expansion Strategy', description: 'When and how to expand your restaurant — opening a second location, franchising, or ghost kitchens.' },
  { slug: 'technology-and-future-of-restaurants',              title: 'Technology and the Future of Restaurants', description: 'How AI, POS systems, KDS, and automation are reshaping the restaurant industry in 2026.' },
  { slug: 'restaurant-operations-technology-faq-100',          title: '100 Restaurant Operations & Technology FAQs', description: 'Answers to 100 frequently asked questions about restaurant operations, POS systems, KDS, and technology.' },
  { slug: 'best-restaurant-pos-system-free-online-ordering',   title: 'Best Restaurant POS System with Free Online Ordering', description: 'The best restaurant POS systems that include free commission-free online food ordering in 2026.' },
  { slug: 'best-restaurant-pos-software-pakistan',             title: 'Best Restaurant POS Software in Pakistan', description: 'Top-rated restaurant POS software for Pakistan - cloud-based, affordable, and feature-rich for Pakistani restaurants.' },
  { slug: 'restaurant-pos-system-kot-kitchen-display-recipe-management', title: 'Restaurant POS System with KOT, KDS & Recipe Management', description: 'All-in-one restaurant POS with Kitchen Order Ticket (KOT), Kitchen Display System (KDS), and recipe management.' },
  { slug: 'best-restaurant-pos-system-worldwide',              title: 'Best Restaurant POS System Worldwide 2026', description: 'The best restaurant POS systems worldwide — compared on features, pricing, and value for money.' },
  // New articles: August 26, 2026
  { slug: 'cloud-based-restaurant-pos-billing-system',         title: 'Cloud-Based Restaurant POS Systems vs Legacy Billing Machines: The 2026 Operator\'s Guide', description: 'Why clunky desktop cash registers are killing restaurant profitability. Discover how cloud-based restaurant billing system software synchronizes table service, KOT, and multi-device invoicing.' },
  { slug: 'all-in-one-restaurant-management-system-rms',       title: 'The All-In-One Restaurant Management System (RMS) Blueprint', description: 'Stop paying for 5 separate software subscriptions. Learn how an all-in-one cloud restaurant management system harmonizes table layout, kitchen dispatch, inventory depletion, and profit reports.' },
  { slug: 'kitchen-order-display-kds-digital-kot-software',    title: 'Digital Kitchen Order Ticket (KOT) & KDS Guide: Slashing Kitchen Wait Times by 40%', description: 'Replace lost paper chits with a real-time kitchen order display system (KDS) and digital KOT software. Discover how automated kitchen routing eliminates order errors.' },
  { slug: 'touch-screen-tablet-pos-table-service',             title: 'Touch Screen & Tablet POS for High-Volume Table Service', description: 'Why stationary counter terminals slow down your dining room. Learn how handheld touch screen tablet POS systems enable instant tableside ordering and wireless receipt printing.' },
  { slug: 'commission-free-online-ordering-system-website-builder', title: 'Commission-Free Online Food Ordering: How We Built a Direct Website Builder for Zero Commissions', description: 'Stop losing 30% on every delivery order to third-party apps. Discover how a commission-free online ordering system and white-label website builder keeps 100% of delivery profits.' },
  { slug: 'multi-branch-restaurant-management-enterprise-pos', title: 'Multi-Branch Restaurant Management: Centralizing Menus, Inventory & P&L Across 5+ Locations', description: 'Scaling from 1 to 5+ restaurant locations without losing control. Learn how multi branch restaurant management software centralizes master recipes, staff permissions, and real-time branch sales.' },
  { slug: 'cafe-coffee-shop-billing-pos-software',             title: 'The Modern Cafe & Coffee Shop POS Guide: Rapid Drink Modifiers, Loyalty & Morning Rush Flow', description: 'How specialty coffee shops and bustling cafes maintain high throughput during the 8:00 AM rush using cafe and coffee shop billing software.' },
  { slug: 'fast-food-qsr-point-of-sale-system',               title: 'Fast Food & QSR Point of Sale: Shaving 45 Seconds Off Every Counter Transaction', description: 'In quick service restaurants (QSR), speed is king. Discover how a dedicated fast food QSR point of sale system turns high foot traffic into maximum gross sales.' },
  { slug: 'pizza-shop-pos-delivery-order-system',              title: 'Pizza Shop POS & Delivery Masterclass: Half-and-Half Toppings, Crust Modifiers & Dispatch', description: 'Pizzerias have the most complex menu customization in the food industry. Learn how a dedicated pizza shop POS and delivery system handles half-and-half toppings and driver dispatch.' },
  { slug: 'food-truck-mobile-pos-billing-app',                 title: 'Food Truck POS & Billing Guide: Running High-Speed Sales from a Single Tablet or Phone', description: 'Food trucks operate under brutal constraints. Discover how mobile food truck POS and billing software maximizes daily event revenue from a single device.' },
  { slug: 'bar-pub-brewery-pos-tab-management',               title: 'Bar & Pub POS Architecture: Open Tabs, Bottle Inventory & Fast Pour Speeds', description: 'High-tempo nightlife environments require specialized bar and pub POS systems with fast open tab management, split bills, and ounce-level inventory control.' },
  { slug: 'fine-dining-table-management-course-pacing-pos',    title: 'Fine Dining POS Systems: Course Pacing, VIP Guest Preferences & Smart Floor Management', description: 'Fine dining demands elegance and meticulous course timing. Discover how a fine dining restaurant POS system coordinates multi-course pacing and VIP table service.' },
  { slug: 'free-vs-paid-restaurant-pos-software-guide',        title: 'Free Restaurant POS vs $8/Month Cloud POS: The Hidden Traps of Free Software', description: 'Is free restaurant billing software actually free? Uncover the hidden payment processing markups, locked hardware traps, and why an honest flat $8/month cloud POS saves thousands.' },
  { slug: 'android-tablet-thermal-printer-pos-hardware-setup', title: 'Android Restaurant POS Hardware Setup: Running Cloud Billing on Low-Cost Tablets & Thermal Printers', description: 'Stop spending $3,000+ on proprietary restaurant POS hardware bundles. Learn how to set up an Android restaurant billing app with ESC/POS thermal printers for under $250.' },
  { slug: 'skewer-pos-pakistan-restaurant-billing-review',     title: 'Skewer POS Review 2026: The Best Restaurant POS System for Pakistan', description: 'Why thousands of Pakistani restaurant owners are switching to Skewer POS for cloud-based billing, digital KOT kitchen display, and commission-free online ordering at just $8 per month.' },
];


// ─── Static page routes ───────────────────────────────────────────────────────
const STATIC_ROUTES = [
  { path: '/',          title: 'Restaurant POS System | Cloud POS Software for Restaurants',       description: 'All-in-one cloud Restaurant POS System with KOT, KDS, free website builder, online food ordering, and automated restaurant accounting for just $8/month.' },
  { path: '/features',  title: 'Restaurant POS Features | Skewer Restaurant POS',                  description: 'Explore all features of Skewer POS — cloud POS billing, KOT, KDS, recipe management, table management, online ordering, and automated accounting.' },
  { path: '/pricing',   title: 'Restaurant POS Pricing — $8/Month | Skewer Restaurant POS',        description: 'Simple, transparent restaurant POS pricing. Flat $8/month, first 100 orders free every month, zero commissions, and no hidden fees.' },
  { path: '/about',     title: 'About Skewer Restaurant POS | Our Story',                          description: 'Skewer POS was built by a real restaurant operator for restaurant operators. Learn about our mission to make restaurant management affordable.' },
  { path: '/blog',      title: 'Restaurant POS Blog | Tips, Guides & Insights | Skewer POS',      description: 'Expert restaurant management tips, POS guides, KDS tutorials, and growth strategies from the Skewer Restaurant POS blog.' },
  { path: '/contact',   title: 'Contact Skewer Restaurant POS | Get Support',                      description: 'Contact the Skewer Restaurant POS team via WhatsApp, email, or our website for sales, support, and partnership inquiries.' },
];

const BASE_URL = 'https://skewer-pos.vercel.app';

// ─── Helper: patch <head> in base HTML ────────────────────────────────────────
function patchHead(baseHtml, { title, description, canonical, ogTitle, ogDescription }) {
  let html = baseHtml;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escHtml(title)}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escHtml(description)}"`
  );

  // Replace og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${escHtml(ogTitle || title)}"`
  );

  // Replace og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${escHtml(ogDescription || description)}"`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta property="twitter:title" content="[^"]*"/,
    `<meta property="twitter:title" content="${escHtml(ogTitle || title)}"`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta property="twitter:description" content="[^"]*"/,
    `<meta property="twitter:description" content="${escHtml(ogDescription || description)}"`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonical}"`
  );

  // Replace og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonical}"`
  );

  return html;
}

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
  let count = 0;

  // 1. Static routes
  for (const route of STATIC_ROUTES) {
    const routePath = route.path === '/' ? '' : route.path;
    const dir = path.join(DIST, ...routePath.split('/').filter(Boolean));
    const canonical = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;
    const patched = patchHead(baseHtml, { ...route, canonical });

    if (routePath) {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), patched, 'utf-8');
    } else {
      // Root: overwrite dist/index.html
      fs.writeFileSync(path.join(DIST, 'index.html'), patched, 'utf-8');
    }
    console.log(`✓ ${canonical}`);
    count++;
  }

  // 2. Blog post routes
  for (const post of BLOG_POSTS) {
    const dir = path.join(DIST, 'blog', post.slug);
    fs.mkdirSync(dir, { recursive: true });
    const canonical = `${BASE_URL}/blog/${post.slug}`;
    const patched = patchHead(baseHtml, {
      title: `${post.title} | Skewer Restaurant POS`,
      description: post.description,
      canonical,
    });
    fs.writeFileSync(path.join(dir, 'index.html'), patched, 'utf-8');
    console.log(`✓ ${canonical}`);
    count++;
  }

  console.log(`\n🎉 Prerendered ${count} pages into dist/`);
}

main().catch(err => { console.error(err); process.exit(1); });
