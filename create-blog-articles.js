/**
 * Seeds 4 mock blog articles into your Shopify store.
 *
 * Usage:
 *   1. Set your Admin API token below (see instructions)
 *   2. node create-blog-articles.js
 *
 * How to get an Admin API token:
 *   1. Go to https://devexpe.myshopify.com/admin/settings/apps/development
 *   2. Click "Create an app"  →  name it "Dev Scripts"
 *   3. Click "Configure Admin API scopes"
 *   4. Enable: write_content, read_content
 *   5. Click "Save"  →  "Install app"  →  "Reveal token once"
 *   6. Paste the token in ADMIN_TOKEN below
 */

const SHOP    = 'devexpe.myshopify.com';
const ADMIN_TOKEN = 'YOUR_ADMIN_API_TOKEN_HERE'; // ← paste here

// ─── Article content ──────────────────────────────────────────────────────────

const articles = [
  {
    title: 'How to Style a Capsule Wardrobe for Every Season',
    author: 'Emma Laurent',
    tags: ['Style', 'Fashion'],
    summary_html: '<p>A capsule wardrobe doesn\'t have to feel minimal or boring. Done right, it gives you more outfit options with fewer pieces — and less decision fatigue every morning.</p>',
    body_html: `
<p>A capsule wardrobe doesn't have to feel minimal or boring. Done right, it gives you more outfit options with fewer pieces — and less decision fatigue every morning. The key is choosing items that work across seasons with small adjustments.</p>

<h2>Start with neutrals</h2>
<p>Neutral tones — ivory, camel, slate, and warm grey — are the foundation of a capsule wardrobe that transitions effortlessly. These colours pair with almost anything and don't feel outdated season after season. Aim for at least 70% of your closet to sit in the neutral family.</p>

<h2>Invest in fabric quality</h2>
<p>A well-cut linen shirt in summer is the same silhouette as a thick cotton shirt in autumn — only the weight changes. Prioritising natural fibres like linen, wool, and cotton means pieces age beautifully and layer naturally rather than fighting each other.</p>

<blockquote>The goal isn't to wear the same thing every day — it's to never stare at a full wardrobe and feel like you have nothing to wear.</blockquote>

<h2>The 10-piece core</h2>
<ul>
  <li>A relaxed white or ivory shirt</li>
  <li>A tailored blazer in camel or charcoal</li>
  <li>Dark straight-leg jeans</li>
  <li>A merino crew-neck sweater</li>
  <li>Wide-leg trousers</li>
  <li>A slip dress that works over a turtleneck</li>
  <li>A trench coat</li>
  <li>A knitwear cardigan</li>
  <li>A striped or textured tee</li>
  <li>Tailored shorts for warm months</li>
</ul>

<h2>Layer for seasons, not separate wardrobes</h2>
<p>The slip dress worn alone in July, belted over a slim turtleneck in October, and under an oversized blazer in November — that's three distinct outfits from one piece. Think about layering potential when you shop, not just how a piece looks standing alone in a fitting room.</p>

<p>With just these ten anchoring pieces, most people find they can build 30 or more distinct looks without buying anything new. The result isn't a uniform — it's a deliberate, personal style that feels effortless every day.</p>
    `.trim()
  },
  {
    title: 'The Slow Home Movement: Why Less Really Is More',
    author: 'Mateo Delgado',
    tags: ['Home', 'Lifestyle'],
    summary_html: '<p>The slow home movement isn\'t about austerity or living with nothing. It\'s about surrounding yourself only with objects that earn their place — things that are either genuinely useful or genuinely beautiful.</p>',
    body_html: `
<p>The slow home movement isn't about austerity or living with nothing. It's about surrounding yourself only with objects that earn their place — things that are either genuinely useful or genuinely beautiful. Ideally both.</p>

<h2>Where it started</h2>
<p>Rooted in the slow food movement of the 1980s, "slow living" as a broader philosophy began gaining mainstream attention in the early 2010s as a counter to fast fashion, disposable furniture, and the endless churn of trend-driven home decor. The premise is simple: buy fewer things, but buy them well.</p>

<h2>What it looks like in practice</h2>
<p>A slow home doesn't have a specific aesthetic. It can be Scandinavian minimalism, Japanese wabi-sabi, rustic Mediterranean, or something entirely personal. What ties it together is intentionality: every object was chosen deliberately, not grabbed because it was on sale or algorithmically suggested.</p>

<blockquote>When you buy an object you'll keep for 20 years, the cost-per-use calculation changes everything.</blockquote>

<h2>Three questions before every purchase</h2>
<ol>
  <li>Do I already own something that does this job well enough?</li>
  <li>Is this something I'd still want in five years?</li>
  <li>Do I know where it came from and how it was made?</li>
</ol>

<h2>Starting the edit</h2>
<p>You don't need to clear out your entire home in a weekend. Start with one surface — a kitchen counter, a shelf, a side table — and remove everything. Put back only what you genuinely use or love. Notice how the space feels. That feeling is what the slow home movement is chasing, room by room.</p>

<p>The result isn't a sparse, magazine-worthy interior (though it might become one). It's a home that feels genuinely like yours — calm, considered, and easy to live in.</p>
    `.trim()
  },
  {
    title: 'A Beginner\'s Guide to Natural Jewellery Care',
    author: 'Saoirse Connelly',
    tags: ['Jewellery', 'Care Guide'],
    summary_html: '<p>Gold, silver, and semi-precious stones don\'t need expensive specialist products to stay looking their best. Most of what your jewellery needs is already in your kitchen.</p>',
    body_html: `
<p>Gold, silver, and semi-precious stones don't need expensive specialist products to stay looking their best. Most of what your jewellery needs is already in your kitchen — and a little knowledge about what to avoid goes a long way.</p>

<h2>Understanding why jewellery tarnishes</h2>
<p>Tarnish on silver is caused by a chemical reaction between the metal and sulphur compounds in the air and on skin. Gold tarnishes far more slowly, but lower karat golds (9k, 14k) contain other metals that can react. Knowing this means you can prevent tarnish, not just clean it off after the fact.</p>

<h2>Daily habits that make a difference</h2>
<ul>
  <li>Put jewellery on last when getting ready (perfume, hairspray, and moisturiser all accelerate tarnish)</li>
  <li>Remove rings and bracelets before washing dishes or using cleaning products</li>
  <li>Take off fine chains before sleep — they kink, knot, and wear faster than you'd expect</li>
  <li>Store each piece separately in a soft pouch or lined box to prevent scratching</li>
</ul>

<h2>The warm water and dish soap method</h2>
<p>For gold and most gemstones, a bowl of warm water with a few drops of mild dish soap and a soft toothbrush is all you need. Gently scrub, rinse with clean water, and pat dry with a lint-free cloth. Do this once a month and most pieces will never need professional cleaning.</p>

<blockquote>Never use toothpaste on jewellery. It's abrasive enough to scratch gold and silver, and the damage is permanent.</blockquote>

<h2>Stones that need extra care</h2>
<p>Porous stones — pearls, opals, turquoise, and malachite — should never be submerged in water or exposed to ultrasonic cleaners. A very slightly damp cloth is all they need. Harder stones like diamonds, sapphires, and rubies can handle the warm water method without issue.</p>

<h2>When to see a jeweller</h2>
<p>Deep tarnish, loose settings, broken clasps, and re-sizing are all jobs for a professional. Most independent jewellers charge very little for simple repairs and a proper clean — and it's worth doing every year or two for pieces you wear regularly.</p>
    `.trim()
  },
  {
    title: 'Sustainable Gift Wrapping Ideas That Actually Look Beautiful',
    author: 'Iris Nakamura',
    tags: ['Sustainability', 'Gifting'],
    summary_html: '<p>Single-use wrapping paper accounts for millions of tonnes of waste each year — most of it can\'t be recycled because of the metallic inks and laminate finishes. The good news: the alternatives genuinely look better.</p>',
    body_html: `
<p>Single-use wrapping paper accounts for millions of tonnes of waste each year — most of it can't be recycled because of the metallic inks and laminate finishes. The good news: the alternatives genuinely look better, last longer, and add an extra layer of thoughtfulness to a gift.</p>

<h2>Furoshiki: the Japanese art of fabric wrapping</h2>
<p>Furoshiki is a traditional Japanese technique for wrapping objects in cloth. A single square of fabric — 50cm to 70cm covers most gift sizes — can be folded and knotted into dozens of different forms. The fabric becomes part of the gift: a scarf, a tea towel, a reusable shopping bag. There are no scissors, no tape, and no waste.</p>

<h2>Brown kraft paper done properly</h2>
<p>Plain brown kraft paper gets a bad reputation for looking corporate, but that's usually a styling problem rather than a paper problem. Paired with natural twine, a sprig of dried eucalyptus or rosemary, and a handwritten tag, it looks genuinely luxurious. The paper is usually fully recyclable too.</p>

<blockquote>The most thoughtful wrapping is often the simplest. A plain box, a beautiful ribbon, and a personal note will always outlast a printed bag in the recipient's memory.</blockquote>

<h2>Newspaper and magazine pages</h2>
<p>Vintage newspaper makes for genuinely beautiful wrapping — especially for books. Pages from illustrated magazines, old maps, and sheet music work just as well. These materials were going to be recycled anyway, so there's truly zero additional footprint.</p>

<h2>The gift bag rethink</h2>
<p>A good linen or cotton tote bag used as a gift bag is itself a second gift. Tissue paper inside can be the same tissue paper unpacked and refolded from a previous gift — most tissue paper can be reused four or five times before it starts to look tired.</p>

<h2>Natural decoration</h2>
<p>Dried flowers, pine cones, cinnamon sticks, and seed pods from the garden all make beautiful, compostable decoration. They take seconds to add and make even a simply-wrapped gift look considered and personal.</p>
    `.trim()
  }
];

// ─── API helpers ──────────────────────────────────────────────────────────────

async function request(path, method, body) {
  const res = await fetch(`https://${SHOP}/admin/api/2024-04/${path}`, {
    method,
    headers: {
      'X-Shopify-Access-Token': ADMIN_TOKEN,
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(json.errors || json));
  return json;
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (ADMIN_TOKEN === 'YOUR_ADMIN_API_TOKEN_HERE') {
    console.error('✗  Paste your Admin API token into ADMIN_TOKEN at the top of this file.');
    process.exit(1);
  }

  // Get or create the "News" blog
  const { blogs } = await request('blogs.json', 'GET');
  let blog = blogs.find(b => b.handle === 'news') || blogs[0];

  if (!blog) {
    const result = await request('blogs.json', 'POST', {
      blog: { title: 'News', commentable: 'no' }
    });
    blog = result.blog;
    console.log(`✓  Created blog: "${blog.title}" (handle: ${blog.handle})`);
  } else {
    console.log(`✓  Using existing blog: "${blog.title}" (handle: ${blog.handle})`);
  }

  // Create articles
  for (const article of articles) {
    const { article: created } = await request(`blogs/${blog.id}/articles.json`, 'POST', {
      article: {
        title:        article.title,
        author:       article.author,
        tags:         article.tags.join(', '),
        summary_html: article.summary_html,
        body_html:    article.body_html,
        published:    true
      }
    });
    console.log(`✓  Created: "${created.title}"  →  /blogs/${blog.handle}/${created.handle}`);
  }

  console.log('\nDone! Visit https://devexpe.myshopify.com?preview_theme_id=185657753891/blogs/' + blog.handle);
}

main().catch(err => { console.error('✗  Error:', err.message); process.exit(1); });
