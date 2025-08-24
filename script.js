/* ==== DATA SETUP ==== */
const CLASSES = [
  { name: 'Human', subclasses: [
      { name:'Knight', abilities:['Shield Block','Sword Slash','Rally','Heavy Armor'] },
      { name:'Mage', abilities:['Fireball','Ice Shard','Mana Shield','Teleport'] },
      { name:'Assassin', abilities:['Backstab','Poison Blade','Smoke Bomb','Evasion'] },
      { name:'Scholar', abilities:['Identify','Heal','Inspire','Quick Study'] }
    ]
  },
  { name: 'Elf', subclasses: [
      { name:'High Elf', abilities:['Arcane Bolt','Barrier','Mana Surge','Blink'] },
      { name:'Dark Elf', abilities:['Shadow Step','Curse','Life Drain','Dagger Throw'] },
      { name:'Wood Elf', abilities:['Arrow Shot','Camouflage','Beast Call','Vine Trap'] },
      { name:'Sea Elf', abilities:['Water Jet','Bubble Shield','Tide Pull','Swim Speed'] }
    ]
  },
  { name: 'Dwarf', subclasses: [
      { name:'Mountain Dwarf', abilities:['Hammer Smash','Stone Skin','Sturdy Stance','Earthquake'] },
      { name:'Hill Dwarf', abilities:['Axe Throw','Endurance','Shield Bash','Taunt'] },
      { name:'Deep Dwarf', abilities:['Dark Vision','Tunnel Strike','Ambush','Rock Armor'] },
      { name:'Rune Dwarf', abilities:['Rune Blast','Rune Shield','Rune Trap','Rune Heal'] }
    ]
  },
  { name: 'Orc', subclasses: [
      { name:'Berserker', abilities:['Rage','Cleave','War Cry','Charge'] },
      { name:'Shaman', abilities:['Totem','Lightning Bolt','Spirit Heal','Earth Bind'] },
      { name:'War Chief', abilities:['Command','Battle Roar','Heavy Swing','Rally Troops'] },
      { name:'Hunter', abilities:['Spear Throw','Trap','Beast Bond','Tracking'] }
    ]
  },
  { name: 'Undead', subclasses: [
      { name:'Skeleton Warrior', abilities:['Bone Slash','Shield Block','Undead Resilience','Bone Wall'] },
      { name:'Vampire', abilities:['Life Drain','Bat Form','Hypnosis','Night Speed'] },
      { name:'Lich', abilities:['Frost Nova','Necro Blast','Summon Skeleton','Mana Drain'] },
      { name:'Ghoul', abilities:['Claw Swipe','Leap','Infect','Frenzy'] }
    ]
  },
  { name: 'Demon', subclasses: [
      { name:'Hell Knight', abilities:['Fire Slash','Inferno Armor','Flame Strike','Fear Aura'] },
      { name:'Succubus', abilities:['Charm','Shadow Whip','Drain Life','Dark Kiss'] },
      { name:'Flame Caster', abilities:['Fireball','Fire Shield','Flame Wave','Ignite'] },
      { name:'Shadow Stalker', abilities:['Stealth','Backstab','Shadow Bind','Smoke Cloud'] }
    ]
  },
  { name: 'Angel', subclasses: [
      { name:'Seraphim', abilities:['Holy Light','Radiant Beam','Shield of Light','Flight'] },
      { name:'Guardian', abilities:['Smite','Barrier','Heal','Divine Protection'] },
      { name:'Fallen Angel', abilities:['Dark Slash','Shadow Wing','Corrupt Heal','Fear Wave'] },
      { name:'Messenger', abilities:['Speed Dash','Inspire','Light Arrow','Blessing'] }
    ]
  },
  { name: 'Beastfolk', subclasses: [
      { name:'Werewolf', abilities:['Claw Swipe','Howl','Pounce','Regeneration'] },
      { name:'Catfolk', abilities:['Quick Slash','Leap','Agility','Scratch'] },
      { name:'Lizardfolk', abilities:['Tail Whip','Scale Armor','Bite','Water Breath'] },
      { name:'Birdfolk', abilities:['Wing Gust','Dive Attack','Flight','Keen Sight'] }
    ]
  },
  { name: 'Elemental', subclasses: [
      { name:'Fireborn', abilities:['Flame Punch','Heat Wave','Fireball','Ignite'] },
      { name:'Waterborn', abilities:['Water Jet','Heal Water','Ice Shard','Whirlpool'] },
      { name:'Earthborn', abilities:['Rock Throw','Stone Skin','Quake','Root Bind'] },
      { name:'Airborn', abilities:['Lightning Strike','Gust','Dash','Levitate'] }
    ]
  },
  { name: 'Fae', subclasses: [
      { name:'Trickster Sprite', abilities:['Illusion','Blink','Confuse','Quick Step'] },
      { name:'Nymph', abilities:['Charm','Vine Bind','Heal','Water Whip'] },
      { name:'Dryad', abilities:['Tree Bind','Root Heal','Bark Skin','Vine Whip'] },
      { name:'Fairy Knight', abilities:['Light Slash','Shield','Flight','Spark Shot'] }
    ]
  }
];

const SPECIALS = [
  'Double Attack','Critical Strike','Life Steal','Regeneration','Shield Breaker','Piercing Arrow',
  'Fire Breath','Ice Nova','Lightning Chain','Earthquake','Wind Dash','Poison Cloud','Summon Wolf',
  'Summon Golem','Summon Spirit','Time Slow','Blink Strike','Invisibility','Stone Armor','Magic Absorb',
  'Reflect Damage','Berserk Mode','Rage Heal','Meteor Strike','Shadow Clone','Fear Aura','Charm Enemy',
  'Flight','Water Heal','Curse'
];

const WEAPONS = [
  'Sword','Greatsword','Dagger','Twin Daggers','Axe','Warhammer','Spear','Halberd','Bow','Crossbow',
  'Staff','Wand','Scythe','Whip','Claws','Shield','Mace','Flail','Throwing Knives','Chakram'
];

const STRENGTH_TIERS = ['Justin Bieber','Kid with Stick','Gym Bro','Soldier','Bear','Hulk','Titan'];
const SPEED_TIERS = ['Snail','Grandma\'s Jog','Jogger','Cheetah','Lightning Bolt','Sonic','Teleporter'];
const DURABILITY_TIERS = ['Paper','Glass','Wood','Stone','Iron','Diamond','Adamantium'];
const INTELLIGENCE_TIERS = ['Rock','Goldfish','Average Joe','Bookworm','Scientist','Einstein','Alien Mind'];

/* ==== DOM REFS ==== */
const refs = id => document.getElementById(id);
const canv = {
  class: refs('canvas-class'),
  subclass: refs('canvas-subclass'),
  ability: refs('canvas-ability'),
  special: refs('canvas-special'),
  weapon: refs('canvas-weapon'),
  strength: refs('canvas-strength'),
  speed: refs('canvas-speed'),
  durability: refs('canvas-durability'),
  intelligence: refs('canvas-intelligence'),
};
const wraps = {
  class: refs('wrap-class'),
  subclass: refs('wrap-subclass'),
  ability: refs('wrap-ability'),
  special: refs('wrap-special'),
  weapon: refs('wrap-weapon'),
  strength: refs('wrap-strength'),
  speed: refs('wrap-speed'),
  durability: refs('wrap-durability'),
  intelligence: refs('wrap-intelligence'),
};
const buttons = {
  class: refs('spin-class'),
  subclass: refs('spin-subclass'),
  ability: refs('spin-ability'),
  special: refs('spin-special'),
  weapon: refs('spin-weapon'),
  strength: refs('spin-strength'),
  speed: refs('spin-speed'),
  durability: refs('spin-durability'),
  intelligence: refs('spin-intelligence'),
  all: refs('spin-all'),
  download: refs('download-card')
};
const results = {
  class: refs('result-class'),
  subclass: refs('result-subclass'),
  ability: refs('result-ability'),
  special: refs('result-special'),
  weapon: refs('result-weapon'),
  strength: refs('result-strength'),
  speed: refs('result-speed'),
  durability: refs('result-durability'),
  intelligence: refs('result-intelligence'),
};
const card = {
  class: refs('card-class'),
  subclass: refs('card-subclass'),
  ability: refs('card-ability'),
  special: refs('card-special'),
  weapon: refs('card-weapon'),
  strength: refs('card-strength'),
  speed: refs('card-speed'),
  durability: refs('card-durability'),
  intelligence: refs('card-intelligence'),
};

/* ==== STATE ==== */
let state = {
  classIndex: null,
  subclassIndex: null,
  abilityIndex: null,
  specialIndex: null,
  weaponIndex: null,
  strengthIndex: null,
  speedIndex: null,
  durabilityIndex: null,
  intelligenceIndex: null,
  specialWasNone: false,
  weaponWasNone: false
};

/* ==== DRAW / SPIN UTILITIES ==== */
function drawWheelOnCanvas(canvas, segments, colors){
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const cx = w/2, cy = h/2, radius = Math.min(w,h)/2 - 8;
  ctx.clearRect(0,0,w,h);
  ctx.save();
  ctx.translate(cx,cy);
  const segCount = segments.length;
  const angle = 2*Math.PI/segCount;
  for(let i=0;i<segCount;i++){
    const start = i*angle - Math.PI/2;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.arc(0,0,radius,start,start+angle);
    ctx.closePath();
    ctx.fillStyle = colors ? colors[i % colors.length] : (i%2? '#1f4b66':'#2d6a85');
    ctx.fill();
    // text
    ctx.save();
    ctx.rotate(start + angle/2);
    ctx.translate(radius*0.62,0);
    ctx.rotate(Math.PI/2);
    ctx.fillStyle = '#fff';
    ctx.font = (canvas.width<200? '11px Arial':'14px Arial');
    wrapText(ctx, segments[i], 0, 0, radius*0.9, 16);
    ctx.restore();
  }
  // center
  ctx.beginPath(); ctx.arc(0,0,36,0,2*Math.PI); ctx.fillStyle = '#08121a'; ctx.fill();
  ctx.restore();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(' ');
  let line = '', dy=0;
  for(let n=0;n<words.length;n++){
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if(metrics.width > maxWidth && n > 0){
      ctx.fillText(line, x, y + dy);
      line = words[n] + ' ';
      dy += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y + dy);
}

// spin animation: rotates parent wrapper element
function spinCanvasWrapper(wrapperEl, segments, duration=2800){
  return new Promise(resolve=>{
    const segCount = segments.length;
    const anglePer = 360/segCount;
    const chosen = Math.floor(Math.random()*segCount);
    const extra = Math.floor(Math.random()*3)+3; // 3-5 full spins
    const finalAngle = extra*360 + (chosen*anglePer + anglePer/2);
    wrapperEl.style.transition = `transform ${duration}ms cubic-bezier(.17,.91,.3,1)`;
    wrapperEl.style.transform = `rotate(-${finalAngle}deg)`;
    function onEnd(){
      wrapperEl.style.transition = '';
      const normalized = finalAngle % 360;
      wrapperEl.style.transform = `rotate(-${normalized}deg)`;
      wrapperEl.removeEventListener('transitionend', onEnd);
      resolve(chosen);
    }
    wrapperEl.addEventListener('transitionend', onEnd);
  });
}

function resetRotation(wrapperEl){
  wrapperEl.style.transition = '';
  wrapperEl.style.transform = 'rotate(0deg)';
}

/* ==== INITIAL DRAW ==== */
const classNames = CLASSES.map(c=>c.name);
const palette = ['#d97706','#16a34a','#0ea5b6','#7c3aed','#ef4444','#f97316','#06b6d4','#8b5cf6','#10b981','#f43f5e'];
drawWheelOnCanvas(canv.class, classNames, palette);
drawWheelOnCanvas(canv.subclass, ['—','—','—','—'], ['#334155','#475569']);
drawWheelOnCanvas(canv.ability, ['—','—','—','—'], ['#2a3b4a','#1f5a6a']);
drawWheelOnCanvas(canv.special, SPECIALS.slice(0,12), ['#6d28d9','#0891b2','#b91c1c']);
drawWheelOnCanvas(canv.weapon, WEAPONS.slice(0,12), ['#4b5563','#06b6d4','#7c3aed']);
drawWheelOnCanvas(canv.strength, STRENGTH_TIERS, ['#ef4444','#f97316','#10b981']);
drawWheelOnCanvas(canv.speed, SPEED_TIERS, ['#06b6d4','#8b5cf6','#f97316']);
drawWheelOnCanvas(canv.durability, DURABILITY_TIERS, ['#525252','#4b5563','#065f46']);
drawWheelOnCanvas(canv.intelligence, INTELLIGENCE_TIERS, ['#7c3aed','#06b6d4','#ef4444']);

/* ==== BUTTON HANDLERS ==== */
function disableAll(val){
  Object.values(buttons).forEach(b => { if(b) b.disabled = val; });
  // keep download enabled
  buttons.download.disabled = false;
}

async function spinClass(){
  disableAll(true);
  resetRotation(wraps.class);
  drawWheelOnCanvas(canv.class, classNames, palette);
  const idx = await spinCanvasWrapper(wraps.class, classNames, 3500);
  state.classIndex = idx;
  const chosen = classNames[idx];
  results.class.textContent = chosen;
  card.class.textContent = chosen;
  // prepare subclass wheel
  const subs = CLASSES[idx].subclasses.map(s=>s.name);
  drawWheelOnCanvas(canv.subclass, subs, ['#065f46','#0ea5b6','#047857','#083344']);
  resetRotation(wraps.subclass);
  buttons.subclass.disabled = false;
  // clear dependent fields
  results.subclass.textContent = '—';
  results.ability.textContent = '—';
  card.subclass.textContent = '—';
  card.ability.textContent = '—';
  state.subclassIndex = state.abilityIndex = null;
  disableAll(false);
  return idx;
}

async function spinSubclass(){
  if(state.classIndex === null) { alert('Spin Class first'); return; }
  disableAll(true);
  const subs = CLASSES[state.classIndex].subclasses.map(s=>s.name);
  resetRotation(wraps.subclass);
  const idx = await spinCanvasWrapper(wraps.subclass, subs, 3000);
  state.subclassIndex = idx;
  const chosen = subs[idx];
  results.subclass.textContent = chosen;
  card.subclass.textContent = chosen;
  // prepare ability wheel for this subclass
  const abilities = CLASSES[state.classIndex].subclasses[state.subclassIndex].abilities;
  drawWheelOnCanvas(canv.ability, abilities, ['#1f4b66','#2d6a85','#065f46','#7c3aed']);
  resetRotation(wraps.ability);
  buttons.ability.disabled = false;
  // clear ability display
  results.ability.textContent = '—';
  card.ability.textContent = '—';
  state.abilityIndex = null;
  disableAll(false);
  return idx;
}

async function spinAbility(){
  if(state.classIndex===null || state.subclassIndex===null){ alert('Spin Class and Subclass first'); return; }
  disableAll(true);
  const abilities = CLASSES[state.classIndex].subclasses[state.subclassIndex].abilities;
  resetRotation(wraps.ability);
  const idx = await spinCanvasWrapper(wraps.ability, abilities, 2600);
  state.abilityIndex = idx;
  const chosen = abilities[idx];
  results.ability.textContent = chosen;
  card.ability.textContent = chosen;
  disableAll(false);
  return idx;
}

async function spinSpecial(){
  disableAll(true);
  resetRotation(wraps.special);
  // draw a shuffled sample so wheel looks varied
  drawWheelOnCanvas(canv.special, SPECIALS, ['#7c3aed','#0891b2','#b91c1c','#06b6d4']);
  const idx = await spinCanvasWrapper(wraps.special, SPECIALS, 3000);
  // implement 25% chance of None (independent of slice)
  const noneRoll = Math.random() < 0.25;
  if(noneRoll){
    state.specialIndex = null;
    state.specialWasNone = true;
    results.special.textContent = 'None';
    card.special.textContent = 'None';
  } else {
    state.specialWasNone = false;
    state.specialIndex = idx;
    results.special.textContent = SPECIALS[idx];
    card.special.textContent = SPECIALS[idx];
  }
  disableAll(false);
  return noneRoll ? null : idx;
}

async function spinWeapon(){
  disableAll(true);
  resetRotation(wraps.weapon);
  drawWheelOnCanvas(canv.weapon, WEAPONS, ['#4b5563','#06b6d4','#7c3aed']);
  const idx = await spinCanvasWrapper(wraps.weapon, WEAPONS, 3000);
  const noneRoll = Math.random() < 0.25;
  if(noneRoll){
    state.weaponIndex = null;
    state.weaponWasNone = true;
    results.weapon.textContent = 'None';
    card.weapon.textContent = 'None';
  } else {
    state.weaponWasNone = false;
    state.weaponIndex = idx;
    results.weapon.textContent = WEAPONS[idx];
    card.weapon.textContent = WEAPONS[idx];
  }
  disableAll(false);
  return noneRoll ? null : idx;
}

async function spinStatWrapped(stateKey, segments, wrapperEl, canvasEl, duration=1700){
  disableAll(true);
  // redraw wheel with proper colors
  drawWheelOnCanvas(canvasEl, segments, ['#06b6d4','#8b5cf6','#f97316','#10b981']);
  resetRotation(wrapperEl);
  const idx = await spinCanvasWrapper(wrapperEl, segments, duration);
  // store in state
  state[stateKey] = idx;
  // update displays
  const key = stateKey.replace('Index',''); // e.g. 'strengthIndex' -> 'strength'
  results[key].textContent = segments[idx];
  // For card, show tier level like "Jogger (3/7)"
  card[key].textContent = `${segments[idx]} (${idx + 1}/${segments.length})`;
  disableAll(false);
  return idx;
}

/* ==== COMPOSITE / Spin All ==== */
async function spinAllFull(){
  disableAll(true);
  await spinClass();
  await sleep(250);
  await spinSubclass();
  await sleep(200);
  await spinAbility();
  await sleep(200);
  await spinSpecial();
  await sleep(180);
  await spinWeapon();
  await sleep(160);
  // stats: now we have proper wrapper elements
  await spinStatWrapped('strengthIndex', STRENGTH_TIERS, wraps.strength, canv.strength, 1600);
  await sleep(120);
  await spinStatWrapped('speedIndex', SPEED_TIERS, wraps.speed, canv.speed, 1600);
  await sleep(120);
  await spinStatWrapped('durabilityIndex', DURABILITY_TIERS, wraps.durability, canv.durability, 1600);
  await sleep(120);
  await spinStatWrapped('intelligenceIndex', INTELLIGENCE_TIERS, wraps.intelligence, canv.intelligence, 1600);
  disableAll(false);
}

/* ==== UTILS ==== */
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

/* ==== Download card as PNG ==== */
function downloadCardPNG(){
  const width=900, height=1100;
  const c = document.createElement('canvas');
  c.width = width; c.height = height;
  const ctx = c.getContext('2d');
  // background
  ctx.fillStyle = '#071028'; ctx.fillRect(0,0,width,height);
  // card box
  ctx.fillStyle = '#071a2a'; roundRect(ctx,40,40,width-80,height-120,20,true,false);
  ctx.fillStyle = '#e6eef6'; ctx.font='28px Arial'; ctx.fillText('Character Card', 70, 100);
  ctx.font='20px Arial'; ctx.fillStyle='#9bd5de';
  let y = 160;
  const lh = 42;
  const wr = (label, value)=>{
    ctx.fillStyle='#9bd5de'; ctx.fillText(label, 70, y);
    ctx.fillStyle='#eaf7fb'; ctx.fillText(value, 300, y);
    y += lh;
  };
  wr('Class:', card.class.textContent);
  wr('Subclass:', card.subclass.textContent);
  wr('Ability:', card.ability.textContent);
  wr('Special:', card.special.textContent);
  wr('Weapon:', card.weapon.textContent);
  y += 8;
  wr('Strength:', card.strength.textContent);
  wr('Speed:', card.speed.textContent);
  wr('Durability:', card.durability.textContent);
  wr('Intelligence:', card.intelligence.textContent);

  const data = c.toDataURL('image/png');
  const a = document.createElement('a'); a.href = data; a.download = 'character-card.png'; document.body.appendChild(a); a.click(); a.remove();
}

function roundRect(ctx,x,y,w,h,r,fill,stroke){
  if(typeof r==='undefined') r=5;
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
  if(fill) ctx.fill();
  if(stroke) ctx.stroke();
}

/* ==== Wiring UI ==== */
buttons.class.addEventListener('click', ()=>{ spinClass(); });
buttons.subclass.addEventListener('click', ()=>{ spinSubclass(); });
buttons.ability.addEventListener('click', ()=>{ spinAbility(); });
buttons.special.addEventListener('click', ()=>{ spinSpecial(); });
buttons.weapon.addEventListener('click', ()=>{ spinWeapon(); });

buttons.strength.addEventListener('click', ()=> spinStatWrapped('strengthIndex', STRENGTH_TIERS, wraps.strength, canv.strength, 1500));
buttons.speed.addEventListener('click', ()=> spinStatWrapped('speedIndex', SPEED_TIERS, wraps.speed, canv.speed, 1500));
buttons.durability.addEventListener('click', ()=> spinStatWrapped('durabilityIndex', DURABILITY_TIERS, wraps.durability, canv.durability, 1500));
buttons.intelligence.addEventListener('click', ()=> spinStatWrapped('intelligenceIndex', INTELLIGENCE_TIERS, wraps.intelligence, canv.intelligence, 1500));

buttons.all.addEventListener('click', ()=> spinAllFull());
buttons.download.addEventListener('click', downloadCardPNG);

/* allow clicking the results to reset an area (small convenience) */
results.class.addEventListener('click', ()=>{
  state.classIndex = null; results.class.textContent = '—'; card.class.textContent = '—';
  // reset subclass & ability too
  results.subclass.textContent = '—'; card.subclass.textContent = '—'; drawWheelOnCanvas(canv.subclass, ['—','—','—','—'], ['#334155','#475569']); resetRotation(wraps.subclass);
  results.ability.textContent = '—'; card.ability.textContent = '—'; drawWheelOnCanvas(canv.ability, ['—','—','—','—'], ['#2a3b4a','#1f5a6a']); resetRotation(wraps.ability);
  buttons.subclass.disabled = true; buttons.ability.disabled = true;
});
results.subclass.addEventListener('click', ()=>{
  state.subclassIndex = null; results.subclass.textContent = '—'; card.subclass.textContent = '—';
  results.ability.textContent = '—'; card.ability.textContent = '—';
  drawWheelOnCanvas(canv.ability, ['—','—','—','—'], ['#2a3b4a','#1f5a6a']); resetRotation(wraps.ability);
  buttons.ability.disabled = true;
});

/* show initial placeholders on card */
function initCardPlaceholders(){
  ['class','subclass','ability','special','weapon','strength','speed','durability','intelligence'].forEach(k=>{
    card[k].textContent = '—';
  });
}
initCardPlaceholders();
