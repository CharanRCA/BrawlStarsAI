// ── Sidebar toggle ───────────────────────────────────────────────────────────
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('sidebarClose');
  if (!sidebar) return;
  function open()  { sidebar.classList.add('open'); if(overlay) overlay.style.display='block'; }
  function close() { sidebar.classList.remove('open'); if(overlay) overlay.style.display='none'; }
  if (menuBtn)  menuBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay)  overlay.addEventListener('click', close);
}

// ── Brawler data ─────────────────────────────────────────────────────────────
const BRAWLER_COLORS = {
  '8-Bit':'#6366f1','Alli':'#22c55e','Amber':'#f97316','Angelo':'#14b8a6','Ash':'#78716c',
  'Barley':'#84cc16','Bea':'#eab308','Belle':'#06b6d4','Berry':'#ef4444','Bibi':'#a855f7',
  'Bo':'#10b981','Bolt':'#3b82f6','Bonnie':'#ec4899','Brock':'#f59e0b','Bull':'#ef4444',
  'Buster':'#6366f1','Buzz':'#f97316','Buzz Lightyear':'#8b5cf6','Byron':'#14b8a6',
  'Carl':'#f59e0b','Charlie':'#ec4899','Chester':'#a855f7','Chuck':'#22c55e','Clancy':'#3b82f6',
  'Colette':'#ef4444','Colt':'#3b82f6','Cordelius':'#8b5cf6','Crow':'#a855f7','Damian':'#f97316',
  'Darryl':'#6366f1','Doug':'#22c55e','Draco':'#ef4444','Dynamike':'#f59e0b','Edgar':'#ef4444',
  'El Primo':'#f97316','Emz':'#ec4899','Eve':'#06b6d4','Fang':'#f59e0b','Finx':'#22c55e',
  'Frank':'#78716c','Gale':'#06b6d4','Gene':'#a855f7','Gigi':'#ec4899','Glowy':'#eab308',
  'Gray':'#6b7280','Griff':'#f59e0b','Grom':'#ef4444','Gus':'#10b981','Hank':'#f97316',
  'Jacky':'#f59e0b','Jae-yong':'#3b82f6','Janet':'#ec4899','Jessie':'#f59e0b','Juju':'#a855f7',
  'Kaze':'#06b6d4','Kenji':'#ef4444','Kit':'#f97316','Larry & Lawrie':'#6366f1','Leon':'#a855f7',
  'Lily':'#ec4899','Lola':'#ef4444','Lou':'#06b6d4','Lumi':'#eab308','Maisie':'#3b82f6',
  'Mandy':'#ef4444','Max':'#f59e0b','Meeple':'#22c55e','Meg':'#6366f1','Melodie':'#ec4899',
  'Mico':'#f97316','Mina':'#a855f7','Moe':'#78716c','Mortis':'#a855f7','Mr. P':'#3b82f6',
  'Nani':'#f59e0b','Najia':'#06b6d4','Nita':'#f97316','Ollie':'#22c55e','Otis':'#3b82f6',
  'Pam':'#ef4444','Pearl':'#eab308','Penny':'#f59e0b','Pierce':'#6366f1','Piper':'#ec4899',
  'Poco':'#22c55e','R-T':'#6b7280','Rico':'#3b82f6','Rosa':'#ef4444','Ruffs':'#f59e0b',
  'Sam':'#ef4444','Sandy':'#eab308','Shade':'#a855f7','Shelly':'#a855f7','Sirius':'#f59e0b',
  'Spike':'#22c55e','Sprout':'#10b981','Squeak':'#a855f7','Starr Nova':'#eab308','Stu':'#ef4444',
  'Surge':'#3b82f6','Tara':'#a855f7','Tick':'#22c55e','Trunk':'#78716c','Willow':'#a855f7',
  'Ziggy':'#f59e0b',
};

const BRAWLER_IMAGES = {
  '8-Bit':'8bit_portrait.png','Alli':'alli_portrait.png','Amber':'amber_portrait.png',
  'Angelo':'angelo_portrait.png','Ash':'ash_portrait.png','Barley':'barley_portrait.png',
  'Bea':'bea_portrait.png','Belle':'belle_portrait.png','Berry':'berry_portrait.png',
  'Bibi':'bibi_portrait.png','Bo':'bo_portrait.png','Bolt':'BS_Portrait_BOLT_Export_V2.png',
  'Bonnie':'bonnie_portrait.png','Brock':'brock_portrait.png','Bull':'bull_portrait.png',
  'Buster':'buster_portrait.png','Buzz':'buzz_portrait.png','Buzz Lightyear':'buzz_lightyear_portrait.png',
  'Byron':'byron_portrait.png','Carl':'carl_portrait.png','Charlie':'charlie_portrait.png',
  'Chester':'chester_portrait.png','Chuck':'chuck_portrait.png','Clancy':'clancy_portrait.png',
  'Colette':'colette_portrait.png','Colt':'colt_portrait.png','Cordelius':'cordelius_portrait.png',
  'Crow':'crow_portrait.png','Damian':'BS_Portrait_DAMIAN.png','Darryl':'darryl_portrait.png',
  'Doug':'doug_portrait.png','Draco':'draco_portrait.png','Dynamike':'dynamike_portrait.png',
  'Edgar':'edgar_portrait.png','El Primo':'elprimo_portrait.png','Emz':'emz_portrait.png',
  'Eve':'eve_portrait.png','Fang':'fang_portrait.png','Finx':'finx_portrait.png',
  'Frank':'frank_portrait.png','Gale':'gale_portrait.png','Gene':'gene_portrait.png',
  'Gigi':'BS_Portrait_GIGI_Export_V2.png','Gray':'gray_portrait.png','Griff':'griff_portrait.png',
  'Grom':'grom_portrait.png','Gus':'gus_portrait.png','Hank':'hank_portrait.png',
  'Jacky':'jacky_portrait.png','Jae-yong':'Jae-Yong_portrait.png','Janet':'janet_portrait.png',
  'Jessie':'jessie_portrait.png','Juju':'juju_portrait.png','Kaze':'Kaze_portrait.png',
  'Kenji':'kenji_portrait.png','Kit':'kit_portrait.png','Larry & Lawrie':'larry&lawrie_portrait.png',
  'Leon':'leon_portrait.png','Lily':'lily_portrait.png','Lola':'lola_portrait.png',
  'Lou':'lou_portrait.png','Lumi':'lumi_portrait.png','Maisie':'maisie_portrait.png',
  'Mandy':'mandy_portrait.png','Max':'max_portrait.png','Meeple':'meeple_portrait.png',
  'Meg':'meg_portrait.png','Melodie':'melodie_portrait.png','Mico':'mico_portrait.png',
  'Mina':'Mina_portrait.png','Moe':'moe_portrait.png','Mortis':'mortis_portrait.png',
  'Mr. P':'mrp_portrait.png','Najia':'portrait_brawler_najia.png','Nani':'nani_portrait.png',
  'Nita':'nita_portrait.png','Ollie':'ollie_portrait.png','Otis':'otis_portrait.png',
  'Pam':'pam_portrait.png','Pearl':'pearl_portrait.png','Penny':'penny_portrait.png',
  'Pierce':'BS_Portrait_PIERCE_Export_V1.png','Piper':'piper_portrait.png','Poco':'poco_portrait.png',
  'R-T':'rt_portrait.png','Rico':'rico_portrait.png','Rosa':'rosa_portrait.png',
  'Ruffs':'ruffs_portrait.png','Sam':'sam_portrait.png','Sandy':'sandy_portrait.png',
  'Shade':'shade_portrait.png','Shelly':'Shelly_portrait.png','Sirius':'portrait_brawler_sirius.png',
  'Spike':'spike_portrait.png','Sprout':'sprout_portrait.png','Squeak':'squeak_portrait.png',
  'Starr Nova':'BS_Portrait_STARNOVA 2.png','Stu':'stu_portrait.png','Surge':'surge_portrait.png',
  'Tara':'tara_portrait.png','Tick':'tick_portrait.png','Trunk':'trunk_portrait.png',
  'Willow':'willow_portrait.png','Ziggy':'Ziggy_portrait.png',
};

const BRAWLER_ROLES = {
  '8-Bit':'Damage Dealer','Alli':'Support','Amber':'Damage Dealer','Angelo':'Support','Ash':'Tank',
  'Barley':'Damage Dealer','Bea':'Damage Dealer','Belle':'Damage Dealer','Berry':'Support','Bibi':'Assassin',
  'Bo':'Controller','Bolt':'Damage Dealer','Bonnie':'Damage Dealer','Brock':'Damage Dealer','Bull':'Tank',
  'Buster':'Tank','Buzz':'Assassin','Buzz Lightyear':'Damage Dealer','Byron':'Support',
  'Carl':'Damage Dealer','Charlie':'Damage Dealer','Chester':'Assassin','Chuck':'Controller','Clancy':'Damage Dealer',
  'Colette':'Damage Dealer','Colt':'Damage Dealer','Cordelius':'Assassin','Crow':'Assassin','Damian':'Damage Dealer',
  'Darryl':'Tank','Doug':'Support','Draco':'Tank','Dynamike':'Damage Dealer','Edgar':'Assassin',
  'El Primo':'Tank','Emz':'Damage Dealer','Eve':'Damage Dealer','Fang':'Assassin','Finx':'Damage Dealer',
  'Frank':'Tank','Gale':'Controller','Gene':'Support','Gigi':'Support','Glowy':'Support',
  'Gray':'Damage Dealer','Griff':'Support','Grom':'Damage Dealer','Gus':'Support','Hank':'Tank',
  'Jacky':'Tank','Jae-yong':'Damage Dealer','Janet':'Damage Dealer','Jessie':'Damage Dealer','Juju':'Support',
  'Kaze':'Damage Dealer','Kenji':'Assassin','Kit':'Support','Larry & Lawrie':'Damage Dealer','Leon':'Assassin',
  'Lily':'Assassin','Lola':'Damage Dealer','Lou':'Controller','Lumi':'Support','Maisie':'Support',
  'Mandy':'Damage Dealer','Max':'Support','Meeple':'Damage Dealer','Meg':'Tank','Melodie':'Assassin',
  'Mico':'Assassin','Mina':'Damage Dealer','Moe':'Support','Mortis':'Assassin','Mr. P':'Controller',
  'Nani':'Damage Dealer','Najia':'Damage Dealer','Nita':'Damage Dealer','Ollie':'Damage Dealer','Otis':'Damage Dealer',
  'Pam':'Support','Pearl':'Tank','Penny':'Damage Dealer','Pierce':'Damage Dealer','Piper':'Damage Dealer',
  'Poco':'Support','R-T':'Controller','Rico':'Damage Dealer','Rosa':'Tank','Ruffs':'Support',
  'Sam':'Tank','Sandy':'Controller','Shade':'Assassin','Shelly':'Damage Dealer','Sirius':'Damage Dealer',
  'Spike':'Damage Dealer','Sprout':'Controller','Squeak':'Damage Dealer','Starr Nova':'Damage Dealer','Stu':'Damage Dealer',
  'Surge':'Damage Dealer','Tara':'Controller','Tick':'Damage Dealer','Trunk':'Tank','Willow':'Controller',
  'Ziggy':'Support',
};

const BRAWLER_RANGES = {
  '8-Bit':'long','Alli':'medium','Amber':'long','Angelo':'long','Ash':'short',
  'Barley':'long','Bea':'long','Belle':'long','Berry':'medium','Bibi':'short',
  'Bo':'long','Bolt':'medium','Bonnie':'long','Brock':'long','Bull':'short',
  'Buster':'short','Buzz':'short','Buzz Lightyear':'long','Byron':'long',
  'Carl':'short','Charlie':'long','Chester':'short','Chuck':'medium','Clancy':'short',
  'Colette':'short','Colt':'long','Cordelius':'short','Crow':'short','Damian':'medium',
  'Darryl':'short','Doug':'short','Draco':'short','Dynamike':'long','Edgar':'short',
  'El Primo':'short','Emz':'medium','Eve':'medium','Fang':'short','Finx':'medium',
  'Frank':'short','Gale':'medium','Gene':'medium','Gigi':'medium','Glowy':'medium',
  'Gray':'medium','Griff':'short','Grom':'long','Gus':'medium','Hank':'short',
  'Jacky':'short','Jae-yong':'medium','Janet':'long','Jessie':'medium','Juju':'long',
  'Kaze':'medium','Kenji':'short','Kit':'short','Larry & Lawrie':'short','Leon':'short',
  'Lily':'short','Lola':'long','Lou':'medium','Lumi':'long','Maisie':'long',
  'Mandy':'long','Max':'medium','Meeple':'medium','Meg':'short','Melodie':'short',
  'Mico':'short','Mina':'medium','Moe':'medium','Mortis':'short','Mr. P':'medium',
  'Nani':'long','Najia':'long','Nita':'medium','Ollie':'short','Otis':'medium',
  'Pam':'medium','Pearl':'short','Penny':'long','Pierce':'long','Piper':'long',
  'Poco':'medium','R-T':'medium','Rico':'long','Rosa':'short','Ruffs':'long',
  'Sam':'short','Sandy':'medium','Shade':'short','Shelly':'short','Sirius':'long',
  'Spike':'long','Sprout':'long','Squeak':'medium','Starr Nova':'long','Stu':'short',
  'Surge':'medium','Tara':'medium','Tick':'long','Trunk':'short','Willow':'medium',
  'Ziggy':'long',
};

const BRAWLER_NAMES = Object.keys(BRAWLER_COLORS).sort();

function getBrawlerImageUrl(name) {
  const file = BRAWLER_IMAGES[name];
  if (!file) return null;
  return `brawlers/${encodeURIComponent(file)}`;
}

function getBrawlerInitials(name) {
  const parts = name.split(' ');
  let init = parts[0][0];
  if (parts.length > 1 && parts[0].length <= 3) init += parts[1][0];
  return init.toUpperCase();
}

function makeBrawlerPortrait(playerOrName, size, isStarPlayer) {
  const name = typeof playerOrName === 'string' ? playerOrName : playerOrName.brawler.name;
  const power = typeof playerOrName === 'object' ? playerOrName.brawler.power : null;
  const playerName = typeof playerOrName === 'object' ? playerOrName.name : name;
  const img = getBrawlerImageUrl(name);
  const color = BRAWLER_COLORS[name] || '#3b82f6';

  const starBadge = isStarPlayer
    ? `<div style="background:#facc15;color:#000;font-size:9px;font-weight:900;padding:2px 7px;border-radius:99px;margin-bottom:3px;display:inline-block;">⭐ STAR</div>`
    : '';

  const imgOrFallback = img
    ? `<img src="${img}" alt="${name}" style="width:${size}px;height:${size}px;object-fit:cover;border-radius:10px;border:2px solid rgba(255,255,255,.1);display:block;"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';

  const fallback = `<div style="width:${size}px;height:${size}px;border-radius:10px;background:${color}20;color:${color};font-weight:900;font-size:${size*.32}px;display:${img?'none':'flex'};align-items:center;justify-content:center;border:2px solid rgba(255,255,255,.1);">${getBrawlerInitials(name)}</div>`;

  const level = power ? `<div style="text-align:center;font-size:9px;font-weight:700;color:rgba(255,255,255,.5);margin-top:2px;">Lv${power}</div>` : '';
  const pname = `<div style="font-size:10px;font-weight:600;color:${isStarPlayer?'#fde68a':'rgba(255,255,255,.65)'};text-align:center;max-width:${size+8}px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">${playerName}</div>`;

  return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
    ${starBadge}
    <div style="position:relative;">${imgOrFallback}${fallback}${power?`<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.65);text-align:center;font-size:8px;font-weight:700;border-radius:0 0 8px 8px;">Lv${power}</div>`:''}</div>
    ${pname}
  </div>`;
}

// ── AI (g4f.dev) ─────────────────────────────────────────────────────────────
const PRIMARY_MODEL = 'deepseek-ai/DeepSeek-V4-Flash';
const FALLBACK_MODEL = 'XiaomiMiMo/MiMo-V2.5';

let _g4fClient = null;
let _g4fReady = null;

function loadG4f() {
  if (_g4fReady) return _g4fReady;
  _g4fReady = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `import { createClient } from 'https://g4f.dev/dist/js/providers.js'; window.__g4fCreateClient = createClient;`;
    const poll = setInterval(() => { if (window.__g4fCreateClient) { clearInterval(poll); resolve(); } }, 100);
    setTimeout(() => { clearInterval(poll); reject(new Error('g4f timeout')); }, 20000);
    document.head.appendChild(script);
  });
  return _g4fReady;
}

async function getAIClient() {
  if (_g4fClient) return _g4fClient;
  await loadG4f();
  if (!window.__g4fCreateClient) throw new Error('g4f not available');
  _g4fClient = window.__g4fCreateClient('deepinfra');
  return _g4fClient;
}

async function callAI(messages, model) {
  const client = await getAIClient();
  const res = await client.chat.completions.create({ model, messages });
  const content = res.choices?.[0]?.message?.content;
  if (!content) throw new Error('Empty response');
  return content;
}

async function sendAI(messages) {
  try { return await callAI(messages, PRIMARY_MODEL); }
  catch { return await callAI(messages, FALLBACK_MODEL); }
}

// ── Battlelog fetch ──────────────────────────────────────────────────────────
async function fetchBattlelog(rawTag) {
  const cleanTag = rawTag.replace(/[#\s]/g, '').toUpperCase();
  const apiUrl = 'https://api.brawlstars.com/v1/players/' + encodeURIComponent('#' + cleanTag) + '/battlelog';

  const proxies = [
    url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    url => `https://cors-anywhere.herokuapp.com/${url}`,
  ];

  let lastErr;
  for (const makeProxy of proxies) {
    try {
      const res = await fetch(makeProxy(apiUrl), { signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const items = data.items || data.battle_log || [];
      return items.filter(b => b.battle?.teams?.length === 2).slice(0, 25);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('All proxies failed');
}

// ── Time formatting ───────────────────────────────────────────────────────────
function timeAgo(iso) {
  try {
    const y=+iso.slice(0,4),mo=+iso.slice(4,6)-1,d=+iso.slice(6,8);
    const h=+iso.slice(9,11),mi=+iso.slice(11,13),s=+iso.slice(13,15);
    const diff = Math.floor((Date.now() - new Date(Date.UTC(y,mo,d,h,mi,s)).getTime()) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
    return `${Math.floor(diff/86400)}d ago`;
  } catch { return ''; }
}

function formatMode(raw) {
  return (raw || '').replace(/([A-Z])/g, ' $1').trim().toUpperCase();
}

// ── Maps data ─────────────────────────────────────────────────────────────────
const MAPS = [
  {name:'Double Swoosh',type:'mixed',mode:'Gem Grab'},{name:'Gem Fort',type:'closed',mode:'Gem Grab'},
  {name:'Hard Rock Mine',type:'mixed',mode:'Gem Grab'},{name:'Undermine',type:'open',mode:'Gem Grab'},
  {name:'Bridge Too Far',type:'open',mode:'Heist'},{name:'Hot Potato',type:'closed',mode:'Heist'},
  {name:'Kaboom Canyon',type:'mixed',mode:'Heist'},{name:'Safe Zone',type:'closed',mode:'Heist'},
  {name:'Dry Season',type:'open',mode:'Bounty'},{name:'Hideout',type:'closed',mode:'Bounty'},
  {name:'Layer Cake',type:'open',mode:'Bounty'},{name:'Shooting Star',type:'open',mode:'Bounty'},
  {name:'Center Stage',type:'mixed',mode:'Brawl Ball'},{name:'Pinball Dreams',type:'closed',mode:'Brawl Ball'},
  {name:'Sneaky Fields',type:'open',mode:'Brawl Ball'},{name:'Triple Dribble',type:'mixed',mode:'Brawl Ball'},
  {name:'Dueling Beetles',type:'closed',mode:'Hot Zone'},{name:'Open Business',type:'open',mode:'Hot Zone'},
  {name:'Parallel Plays',type:'mixed',mode:'Hot Zone'},{name:'Ring of Fire',type:'closed',mode:'Hot Zone'},
  {name:"Belle's Rock",type:'mixed',mode:'Knockout'},{name:'Flaring Phoenix',type:'open',mode:'Knockout'},
  {name:'Flowing Springs',type:'open',mode:'Knockout'},{name:'Goldarm Gulch',type:'mixed',mode:'Knockout'},
  {name:'New Horizons',type:'closed',mode:'Knockout'},{name:'Out in the Open',type:'open',mode:'Knockout'},
];

const MAP_EMOJIS = {
  'Gem Grab':'💎','Heist':'💣','Bounty':'⭐','Brawl Ball':'⚽','Hot Zone':'🔥','Knockout':'💀',
};
