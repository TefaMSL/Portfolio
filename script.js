gsap.registerPlugin(ScrollTrigger);

const cv = document.getElementById("mx"), cx = cv.getContext("2d");
const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</>[]{}";
const FS = 14; let cols, drops;
function initMx() { cv.width = innerWidth; cv.height = innerHeight; cols = Math.floor(cv.width / FS); drops = Array(cols).fill(1) }
initMx(); window.addEventListener("resize", initMx);
const vmask = [
  "       .---.       ",
  "      /     \\      ",
  "     | () () |     ",
  "      \\  ^  /      ",
  "       |||||       ",
  "       '---'       "
];

const maskASCII = [
  "                                                                ",
  "                      .xOOOOOOOOOOOOOOOOx.                      ",
  "                    .xOOOOOOOOOOOOOOOOOOOOx.                    ",
  "                  .xOOOOOOOOOOOOOOOOOOOOOOOOx.                  ",
  "                 xOOOOOOOOOOOOOOOOOOOOOOOOOOOOx                 ",
  "                xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx                ",
  "               xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx               ",
  "              xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx              ",
  "             xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx             ",
  "             xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx             ",
  "            xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx            ",
  "            xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx            ",
  "            xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx            ",
  "            xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx            ",
  "            xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx            ",
  "            xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx            ",
  "            xOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOx            ",
  "            xOOOOOOOOx      OOOOOOOO      xOOOOOOOOx            ",
  "            xOOOOOOx        OOOOOOOO        xOOOOOOx            ",
  "            xOOOOOx         OOOOOOOO         xOOOOOx            ",
  "            xOOOOOx         OOOOOOOO         xOOOOOx            ",
  "            xOOOOOx         OOOOOOOO         xOOOOOx            ",
  "            xOOOOOOx        OOOOOOOO        xOOOOOOx            ",
  "            xOOOOOOOOxx    xOOOOOOOOx    xxOOOOOOOOx            ",
  "             xOOOOOOOOOxxxxOOOOOOOOOOxxxxOOOOOOOOOx             ",
  "             xOOOOOOOOOxxxxOOOOOOOOOOxxxxOOOOOOOOOx             ",
  "              xOOOOOOOOOxx  xOOOOOOx  xxOOOOOOOOOx              ",
  "               xOOOOOOOOOx   xxOOxx   xOOOOOOOOOx               ",
  "                xOOOOOOOOOx          xOOOOOOOOOx                ",
  "                 xOOOOOOOOOx        xOOOOOOOOOx                 ",
  "                  xOOOOOOOOOx      xOOOOOOOOOx                  ",
  "                   xOOOOOOOOxxxxxxxxOOOOOOOOx                   ",
  "                    xOOOOOOOOOOOOOOOOOOOOOOx                    ",
  "                     xOOOOOOOOOOOOOOOOOOOOx                     ",
  "                     xOOOOOOOOOOOOOOOOOOOOx                     ",
  "                     xOOOOOOOOOOOOOOOOOOOOx                     ",
  "                      xOOxxOOxxOOxxOOxxOOx                      ",
  "                      xOO  OO  OO  OO  OOx                      ",
  "                      xOO  OO  OO  OO  OOx                      ",
  "                      xOO  OO  OO  OO  OOx                      ",
  "                      xOO  OO  OO  OO  OOx                      ",
  "                      xOO  OO  OO  OO  OOx                      ",
  "                      xOO  OO  OO  OO  OOx                      ",
  "                      xOOxxOOxxOOxxOOxxOOx                      ",
  "                      xOOOOOOOOOOOOOOOOOOx                      ",
  "                       xOOOOOOOOOOOOOOOOx                       ",
  "                        xOOOOOOOOOOOOOOx                        ",
  "                          xxxxxxxxxxxx                          ",
  "                                                                "
];

let showHacked = false;

setInterval(() => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    cx.fillStyle = "rgba(242,245,248,.06)"; cx.fillRect(0, 0, cv.width, cv.height);
    for (let i = 0; i < drops.length; i++) {
      const r = Math.random();
      if (r > .97) cx.fillStyle = "rgba(10,30,50,1)";
      else if (r > .85) cx.fillStyle = "rgba(20,60,100,.9)";
      else cx.fillStyle = "rgba(30,80,130,.6)";
      cx.font = FS + "px IBM Plex Mono,monospace";
      cx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * FS, drops[i] * FS);
      if (drops[i] * FS > cv.height && Math.random() > .976) drops[i] = 0;
      drops[i]++;
    }
  } else {
    if (showHacked) {
      cx.fillStyle = "rgba(4,10,15,0.08)";
    } else {
      cx.fillStyle = "rgba(4,10,15,0.04)"; // Original slower fade
    }
    cx.fillRect(0, 0, cv.width, cv.height);

    for (let i = 0; i < drops.length; i++) {
      const r = Math.random();
      const x = i;
      const y = drops[i];
      cx.font = FS + "px IBM Plex Mono,monospace";
      let char = CHARS[Math.floor(Math.random() * CHARS.length)];

      let inMask = false;
      let maskChar = ' ';

      if (showHacked) {
        const mCols = maskASCII[0].length;
        const mRows = maskASCII.length;
        const startX = Math.floor(cols / 2 - mCols / 2);
        const startY = Math.floor((cv.height / FS) / 2 - mRows / 2);

        if (x >= startX && x < startX + mCols && y >= startY && y < startY + mRows) {
          maskChar = maskASCII[y - startY][x - startX];
          if (maskChar !== ' ') {
            inMask = true;
          }
        }
      }

      if (inMask) {
        if (maskChar === 'O') {
          cx.fillStyle = "#ff0000";
          cx.shadowBlur = 10;
          cx.shadowColor = "#ff0000";
        } else if (maskChar === 'x') {
          cx.fillStyle = "#ff3333";
          cx.shadowBlur = 8;
          cx.shadowColor = "#ff0000";
        } else {
          cx.fillStyle = "rgba(255, 0, 0, 0.6)";
          cx.shadowBlur = 2;
          cx.shadowColor = "#ff0000";
        }
      } else {
        cx.shadowBlur = 0;
        if (showHacked) {
          if (r > .98) cx.fillStyle = "rgba(255,255,255,0.3)";
          else if (r > .90) cx.fillStyle = "rgba(46, 204, 113, 0.4)";
          else cx.fillStyle = "rgba(46, 204, 113, 0.08)";
        } else {
          // ORIGINAL BLUE THEME COLORS from 'may be'
          if (r > .97) cx.fillStyle = "rgba(200,235,255,1)";
          else if (r > .85) cx.fillStyle = "rgba(74,144,184,1)";
          else cx.fillStyle = "rgba(74,144,184,0.65)";
        }
      }

      cx.fillText(char, x * FS, y * FS);
      if (y * FS > cv.height && Math.random() > .976) drops[i] = 0;
      drops[i]++;
    }

    // Draw static hacked box overlay
    if (showHacked) {
      const boxText = " SYSTEM FAILURE // HACKED BY TEFA ";
      cx.font = "bold " + (FS + 2) + "px IBM Plex Mono,monospace";
      const textMetrics = cx.measureText(boxText);
      const bw = textMetrics.width + 40;
      const bh = FS * 3;
      const bx = cv.width / 2 - bw / 2;
      const by = cv.height / 2 - bh / 2 + FS * 10;

      cx.fillStyle = "rgba(4,10,15,0.95)";
      cx.shadowBlur = 0;
      cx.fillRect(bx, by, bw, bh);

      cx.strokeStyle = "#2ecc71";
      cx.lineWidth = 2;
      cx.strokeRect(bx, by, bw, bh);

      cx.fillStyle = "#ffffff";
      cx.textAlign = "center";
      cx.shadowBlur = 15;
      cx.shadowColor = "#2ecc71";
      cx.fillText(boxText, cv.width / 2, by + bh / 2 + FS * 0.35);
      cx.textAlign = "left";
      cx.shadowBlur = 0;
    }
  }
}, 60);

const cur = document.getElementById("cur"), cr = document.getElementById("cur-r");
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY });
(function tick() { cur.style.left = mx + "px"; cur.style.top = my + "px"; rx += (mx - rx) * .11; ry += (my - ry) * .11; cr.style.left = rx + "px"; cr.style.top = ry + "px"; requestAnimationFrame(tick) })();

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  document.getElementById("theme-btn").textContent = isDark ? "🌙" : "☀";
}

let currentMode = "normal";
function setMode(m) {
  currentMode = m;
  const cli = document.getElementById("cli");
  const app = document.getElementById("app");
  const soc = document.getElementById("soc");
  if (m === "cli") {
    cli.style.display = "flex"; app.style.display = "none";
    soc.style.opacity = "0"; soc.style.pointerEvents = "none";
    document.getElementById("normal-btn").classList.remove("active-mode");
    document.getElementById("cli-btn").classList.add("active-mode");
    document.getElementById("cli-in").focus();
    if (!cliBooted) { bootCLI(); cliBooted = true; }
  } else {
    cli.style.display = "none"; app.style.display = "block";
    soc.style.opacity = "1"; soc.style.pointerEvents = "auto";
    document.getElementById("normal-btn").classList.add("active-mode");
    document.getElementById("cli-btn").classList.remove("active-mode");
  }
}

// Hardware Detection for Realistic Boot
const getHardwareSpecs = () => {
  const cores = navigator.hardwareConcurrency || "Unknown";
  const ram = navigator.deviceMemory ? `${navigator.deviceMemory}GB` : "Standard";
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  let gpu = "Generic Graphics";
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
  } catch (e) { }

  return [
    { t: `Starting MSL_OS Kernel v2.0.4...`, s: "info" },
    { t: `Checking CPU: ${cores} Logical Cores detected... [OK]`, s: "ok" },
    { t: `Detected GPU: ${gpu.split(',')[0]}... [OK]`, s: "ok" },
    { t: `Memory Check: ${ram} available system RAM... [OK]`, s: "ok" },
    { t: `Display: ${screenRes} High-Res found... [OK]`, s: "ok" },
    { t: "Mounting /dev/sda1 on /system/core... [OK]", s: "ok" },
    { t: "Initializing network protocols (IPSec, OSPF)...", s: "info" },
    { t: "Establishing VPN tunnel to Main_Data_Center... [OK]", s: "ok" },
    { t: "Scanning for unauthorized network intrusions... [NONE]", s: "ok" },
    { t: "Loading Virtualization Cluster (Hyper-V/ESXi)...", s: "info" },
    { t: "Starting Homelab Monitoring Dashboard v3.1...", s: "info" },
    { t: "Applying glassmorphism UI patches...", s: "info" },
    { t: "Kernel boot process complete. Handover to Shell.", s: "ok" }
  ];
};

const bootLines = getHardwareSpecs();

let pct = 0;
const pEl = document.getElementById("ld-p"), bEl = document.getElementById("ld-b"), lowEl = document.getElementById("boot-logs"), tEl = document.getElementById("ld-t");

function addBootLine(text, status) {
  const line = document.createElement("div");
  line.className = "boot-line";
  line.innerHTML = `<span class="time">[${new Date().toLocaleTimeString('en-GB')}]</span> <span class="${status}">${text}</span>`;
  lowEl.appendChild(line);
  lowEl.scrollTop = lowEl.scrollHeight;
}

let lineIdx = 0;
const ldT = setInterval(() => {
  pct += Math.random() * 3 + 1;
  if (pct > 100) pct = 100;

  pEl.textContent = Math.floor(pct) + "%";
  bEl.style.width = pct + "%";

  if (lineIdx < bootLines.length && pct >= (lineIdx / bootLines.length) * 100) {
    addBootLine(bootLines[lineIdx].t, bootLines[lineIdx].s);
    lineIdx++;
  }

  if (pct >= 100) {
    clearInterval(ldT);
    tEl.textContent = "SYSTEM_READY: TRUE";
    tEl.style.color = "var(--grn)";
    setTimeout(() => {
      gsap.to("#loader", {
        opacity: 0, duration: 0.6, onComplete: () => {
          document.getElementById("loader").style.display = "none";
          launchHero();
        }
      });
    }, 800);
  }
}, 60);

function launchHero() {
  setMode("normal");
  const tl = gsap.timeline();
  tl.to("#schip", { opacity: 1, duration: .5, ease: "power3.out" })
    .to("#eyl", { width: 42, duration: .6, ease: "power2.out" }, "-=.1")
    .to("#eyt", { opacity: 1, duration: .4 }, "-=.2")
    .to("#h1a", { clipPath: "inset(0 0 0% 0)", duration: .75, ease: "power4.out" }, "-=.1")
    .to("#h1b", { clipPath: "inset(0 0 0% 0)", duration: .75, ease: "power4.out" }, "-=.55")
    .to("#hrole", { opacity: 1, duration: .5 }, "-=.3")
    .to("#hsub", { opacity: 1, duration: .55 }, "-=.2")
    .to("#hmet", { opacity: 1, duration: .5 }, "-=.2")
    .to("#hbtns", { opacity: 1, duration: .5 }, "-=.2");
  gsap.fromTo(".hstat", { opacity: 0, y: 16 }, { opacity: 1, y: 0, stagger: .09, duration: .5, delay: 1.4, ease: "power3.out", onStart: () => { document.getElementById("hstats").style.opacity = "1" } });
  gsap.fromTo(".nc", { opacity: 0, y: 28 }, { opacity: 1, y: 0, stagger: .07, duration: .5, delay: 1.6, ease: "power3.out", clearProps: "transform", onStart: () => { document.getElementById("nav-cards").style.opacity = "1" } });
}

function animateBars(pageId) {
  const bars = document.querySelectorAll("#pg-" + pageId + " .bar-fill, #pg-" + pageId + " .domain-fill");
  setTimeout(() => { bars.forEach(b => { b.style.width = (b.dataset.pct || "0") + "%" }) }, 300);
}

let active = null;
const NAMES = { summary: "Summary", experience: "Experience", education: "Education", achievements: "Achievements", skills: "Skills", analysis: "Analysis", contact: "Contact", casestudies: "Case Studies", socialproof: "Social Proof", projects: "Projects", homelab: "Homelab", services: "IT Services", certgallery: "Cert Gallery", techlibrary: "Tech Library" };

/* ══ PAGE ACCENT COLORS — matches each nav card gradient ══ */
const PAGE_COLORS = {
  summary: { acc: "#74ebd5", acc2: "#6ab8c8" },  /* 👤 pearl teal-lavender  */
  experience: { acc: "#f5af19", acc2: "#c97b38" },  /* 💼 leather amber        */
  skills: { acc: "#44e86a", acc2: "#24c840" },  /* ⚡ electric lime-green  */
  projects: { acc: "#c471ed", acc2: "#12c2e9" },  /* 🚀 cosmic purple-cyan   */
  homelab: { acc: "#00c9ff", acc2: "#1adfb2" },  /* 🖥️ screen cyan-mint     */
  services: { acc: "#f5af19", acc2: "#f12711" },  /* 🛠️ industrial amber-red */
  casestudies: { acc: "#d4a840", acc2: "#bf953f" },  /* 💡 insight gold         */
  education: { acc: "#38ef7d", acc2: "#11998e" },  /* 🎓 academic teal-green  */
  certgallery: { acc: "#ff9472", acc2: "#f2709c" },  /* 📜 rose-coral           */
  achievements: { acc: "#ff6b35", acc2: "#FF0844" },  /* 🏆 champion fire        */
  techlibrary: { acc: "#ba68c8", acc2: "#9c27b0" },  /* 📚 knowledge plum       */
  analysis: { acc: "#ff6a00", acc2: "#ee0979" },  /* 📊 hot data coral       */
  socialproof: { acc: "#f9a12e", acc2: "#f7e61d" },  /* ⭐ star gold             */
  contact: { acc: "#00d2ff", acc2: "#3a7bd5" },  /* 📡 signal blue          */
};

function applyPageColor(id) {
  const c = PAGE_COLORS[id];
  if (!c) return;
  const r = document.documentElement;
  r.style.setProperty("--acc", c.acc);
  r.style.setProperty("--acc2", c.acc2);
  r.style.setProperty("--bar-bg", "rgba(0,0,0,0.08)");
}
function resetPageColor() {
  const r = document.documentElement;
  const dark = document.documentElement.getAttribute("data-theme") === "light";
  r.style.setProperty("--acc", dark ? "#1e6a9a" : "#4a90b8");
  r.style.setProperty("--acc2", dark ? "#144d72" : "#2a5c7a");
  r.style.setProperty("--bar-bg", dark ? "rgba(30,106,154,.09)" : "rgba(74,144,184,.08)");
}

function goPage(id) {
  const ov = document.getElementById("pg-" + id);
  const home = document.getElementById("pg-home");
  active = id;
  applyPageColor(id);
  gsap.set(ov, { display: "block", opacity: 0, x: "4%" });
  ov.scrollTop = 0;
  document.getElementById("prog-b").style.width = "0";
  const bb = document.getElementById("back-btn");
  bb.style.display = "flex";
  const pt = document.getElementById("page-title"); pt.textContent = NAMES[id];
  gsap.timeline({ onComplete: () => { gsap.set([home, ov], { clearProps: "filter" }) } })
    .to(home, { x: "-4%", opacity: 0, filter: "blur(4px)", duration: .35, ease: "power2.inOut" })
    .fromTo(ov, { filter: "blur(4px)" }, { opacity: 1, x: "0%", filter: "blur(0px)", duration: .4, ease: "power2.out" }, "-=.1");
  gsap.to(pt, { opacity: 1, duration: .3, delay: .18 });
  if (id === "skills" || id === "analysis") animateBars(id);
}

function goHome() {
  if (!active) return;
  const ov = document.getElementById("pg-" + active);
  const home = document.getElementById("pg-home");
  const pt = document.getElementById("page-title");
  gsap.timeline({ onComplete: () => { gsap.set(ov, { display: "none", clearProps: "opacity,x,filter" }); active = null; document.getElementById("prog-b").style.width = "0" } })
    .to(ov, { opacity: 0, x: "4%", filter: "blur(4px)", duration: .35, ease: "power2.inOut" })
    .fromTo(home, { x: "-4%", opacity: 0, filter: "blur(4px)" }, { x: "0%", opacity: 1, filter: "blur(0px)", duration: .4, ease: "power2.out" }, "-=.1");
  document.getElementById("back-btn").style.display = "none";
  gsap.to(pt, { opacity: 0, duration: .2 });
  resetPageColor();
}

document.querySelectorAll(".pov").forEach(pg => { pg.addEventListener("scroll", () => { const p = pg.scrollTop / (pg.scrollHeight - pg.clientHeight) * 100; document.getElementById("prog-b").style.width = p + "%" }) });
document.addEventListener("keydown", e => {
  const lb = document.getElementById('cert-lightbox');
  if (lb && lb.classList.contains('open')) {
    if (e.key === "Escape") { closeCert(); return; }
    if (e.key === "ArrowLeft") { prevCert(); return; }
    if (e.key === "ArrowRight") { nextCert(); return; }
  }

  if (e.key === "Escape") {
    if (typeof currentMode !== 'undefined' && currentMode === "cli") {
      setMode("normal");
    } else if (active) {
      goHome();
    }
  }
  if (e.key === "Backspace" && typeof currentMode !== 'undefined' && currentMode !== "cli" && active && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") { e.preventDefault(); goHome() }
});
let cliBooted = false;
let cliHistory = [], cliHistIdx = -1;
const CMDS = ["help", "whoismsl", "summary", "experience", "skills", "projects", "homelab", "services", "casestudies", "education", "certgallery", "achievements", "techlibrary", "analysis", "socialproof", "contact", "clear", "exit", "ls", "date", "sudo", "ping", "top", "matrix", "neofetch"];

const D = {
  whoismsl: `<span class="cli-h">// WHO IS MSL</span>

  <span class="cli-grn">Name     :</span> Mohamed Sayid Lotfy
  <span class="cli-grn">Title    :</span> Network & System Administrator
  <span class="cli-grn">Location :</span> Cairo, Egypt 🇪🇬
  <span class="cli-grn">Email    :</span> mohamed-sayid@outlook.com
  <span class="cli-grn">Phone    :</span> +20 150 333 3155
  <span class="cli-grn">LinkedIn :</span> linkedin.com/in/mohamedelsayid
  <span class="cli-grn">Status   :</span> <span class="cli-grn">● Open to Work — Available Now</span>

  <span class="cli-ylw">Quick Bio:</span>
  IT Specialist with 5+ years managing enterprise networks,
  cloud solutions & Medical IT. Currently holding dual roles
  at Viion and Main Sharia Association Hospital.

  <span class="cli-ylw">Certifications:</span>
  🥇 CCNA (ID: CSCO15040282 · Valid Nov 2028)
  ⚙️  CCNP Enterprise: Core Networking
  🖥️  MCSA 2016 (60 Hours)

  <span class="cli-ylw">Languages:</span>  Arabic (Native) · English (Advanced)
  <span class="cli-ylw">Military :</span>  Permanently Exempt`,
  help: `<span class="cli-h">// AVAILABLE COMMANDS</span>

  <span class="cli-ylw">Navigation:</span>
  <span class="cli-grn">1</span> / <span class="cli-grn">whoismsl</span>      → Who is Mohamed Sayid Lotfy?
  <span class="cli-grn">2</span> / <span class="cli-grn">summary</span>       → Professional overview
  <span class="cli-grn">3</span> / <span class="cli-grn">experience</span>    → Full work history
  <span class="cli-grn">4</span> / <span class="cli-grn">skills</span>        → Technical skills
  <span class="cli-grn">5</span> / <span class="cli-grn">projects</span>      → Projects
  <span class="cli-grn">6</span> / <span class="cli-grn">homelab</span>       → Homelab
  <span class="cli-grn">7</span> / <span class="cli-grn">services</span>      → IT Services
  <span class="cli-grn">8</span> / <span class="cli-grn">casestudies</span>   → Case Studies
  <span class="cli-grn">9</span> / <span class="cli-grn">education</span>     → Academic background
  <span class="cli-grn">10</span>/ <span class="cli-grn">certgallery</span>   → Certificates Gallery
  <span class="cli-grn">11</span>/ <span class="cli-grn">achievements</span>  → Key wins & milestones
  <span class="cli-grn">12</span>/ <span class="cli-grn">techlibrary</span>   → Tech Library Base
  <span class="cli-grn">13</span>/ <span class="cli-grn">analysis</span>      → Analysis
  <span class="cli-grn">14</span>/ <span class="cli-grn">socialproof</span>   → Social Proof
  <span class="cli-grn">15</span>/ <span class="cli-grn">contact</span>       → Contact & social links

  <span class="cli-ylw">Utilities & Fun:</span>
  <span class="cli-grn">ls</span>     → List all sections
  <span class="cli-grn">date</span>   → Current date & time
  <span class="cli-grn">ping</span>   → Network speed check
  <span class="cli-grn">sudo</span>   → Root access test
  <span class="cli-grn">top</span>    → Real-time resources
  <span class="cli-grn">matrix</span> → Digital rain effect
  <span class="cli-grn">clear</span>  → Clear terminal
  <span class="cli-grn">exit</span>   → Back to Normal mode

  <span class="cli-dim">Tab=autocomplete · ↑↓=history · ESC=normal</span>`,
  summary: `<span class="cli-h">// PROFESSIONAL SUMMARY</span>
5+ years IT experience · CCNA/CCNP certified
Dual roles: Viion (Network Admin) + Hospital (SysAdmin)
75% network performance boost · 90% security incidents reduced`,
  skills: `<span class="cli-h">// SKILLS</span>
Network: LAN/WAN/VLAN, Firewall, VPN, OSPF, Cisco IOS
Systems: Windows Server, AD, DHCP/DNS, Hyper-V, VMware
Security: Cybersecurity, Cloud Services, Endpoint Protection`,
  certifications: `<span class="cli-h">// CERTIFICATIONS</span>
  🥇 CCNA · ID: CSCO15040282 · Valid Nov 2028
  ⚙️ CCNP Enterprise: Core Networking (Dec 2024)
  🖥️ MCSA 2016 — 60 Hours (Jan 2025)`,
  contact: `<span class="cli-h">// CONTACT</span>
  📧 mohamed-sayid@outlook.com
  📞 +20 150 333 3155
  💼 linkedin.com/in/mohamedelsayid
  <span class="cli-grn">● Available Now</span>`,
  ls: `summary/ experience/ education/ achievements/ skills/ certifications/ homelab/ services/ certgallery/ techlibrary/ contact/ casestudies/ socialproof/ projects/`,
  socialproof: `<span class="cli-h">// SOCIAL PROOF</span>
⭐ 8 LinkedIn Recommendations — 5-star average
✓ CCNA ID: CSCO15040282 · Verified Cisco credential
📊 75% network boost · 90% incidents reduced · 99%+ medical uptime
💼 Currently holding 2 active roles simultaneously`,
  casestudies: `<span class="cli-h">// CASE STUDIES</span>
🌐 Enterprise Network Overhaul — Viion [+75% throughput]
🏥 Medical IT Stabilisation — Hospital [99%+ uptime]
🛡️ Endpoint Security Hardening — 100% policy compliance
🖥️ Legacy Server Migration — 60% cost reduction via virtualisation`,
  experience: `<span class="cli-h">// EXPERIENCE</span>
Network & System Admin — Viion [Jul 2024–Present]
System Admin — Main Sharia Hospital [Sep 2024–Present]
IT Specialist — Xceed [Apr–Aug 2024]
Team Leader — Mrsool [Nov 2023–Apr 2024]`,
  education: `<span class="cli-h">// EDUCATION</span>
  <span class="cli-ylw">Academic Degree:</span>
  🎓 B.Sc. in Management Information Systems (MIS)
     Al-Abbasiya Institute [2019–2023]
     Focus: IT Management, Database Administration, Network Basics
  
  <span class="cli-ylw">Professional Training & Certifications:</span>
  🥇 Cisco Certified Network Associate (CCNA) - Verified ID: CSCO15040282 [Valid Nov 2028]
  ⚙️ Cisco Certified Network Professional (CCNP) Enterprise: Core Networking [2024]
  🖥️ Microsoft Certified Solutions Associate (MCSA) 2016 Server - 60 Hours Training [2025]
  🛡️ Fortinet NSE 1, 2 & 3 - Network Security Expert [In Progress]
  ☁️ Microsoft Azure Fundamentals AZ-900`,
  achievements: `<span class="cli-h">// KEY ACHIEVEMENTS</span>
  🏆 <span class="cli-grn">Network Optimization:</span> Increased enterprise network throughput by 75% at Viion.
  🏆 <span class="cli-grn">Security Hardening:</span> Reduced security incidents and vulnerabilities by 90% across 5 branches.
  🏆 <span class="cli-grn">Infrastructure Modernization:</span> Successfully migrated legacy physical servers to virtualized Hyper-V clusters, reducing hardware costs by 60%.
  🏆 <span class="cli-grn">Healthcare IT Stability:</span> Achieved 99.9% uptime for critical medical systems at Main Sharia Association Hospital.`,
  homelab: `<span class="cli-h">// HOMELAB</span>
  🖥️ VMware ESXi / Hyper-V Servers
  ⚙️ Cisco GNS3/EVE-NG Emulations
  🌐 pfSense / FortiGate VMs
  🔐 Active Directory Test Domain`,
  services: `<span class="cli-h">// IT SERVICES</span>
  🛠️ Network Design & Implementation
  🛡️ Penetration Testing & Hardening
  ☁️ P2V / Cloud Migrations
  💾 Backup Systems Design`,
  certgallery: `<span class="cli-h">// CERTIFICATE GALLERY</span>
  <span class="cli-ylw">Networking:</span>
  📜 CCNA (Cisco Certified Network Associate)
  📜 CCNP Enterprise: Core Networking
  
  <span class="cli-ylw">Systems & Servers:</span>
  📜 MCSA 2016 (Microsoft Certified Solutions Associate)
  📜 Active Directory & Windows Server Administration
  
  <span class="cli-ylw">Security & Cloud:</span>
  📜 Fortinet NSE 1, NSE 2, NSE 3
  📜 Microsoft Azure Fundamentals (AZ-900)`,
  techlibrary: `<span class="cli-h">// TECH LIBRARY BASE</span>
  <span class="cli-ylw">Reference Guides & Baselines:</span>
  📚 Cisco IOS Configuration Templates (VLANs, STP, OSPF, ACLs)
  📚 Windows Server GPO Security Baselines & Hardening
  📚 Active Directory Best Practices & Troubleshooting
  📚 FortiGate/pfSense Firewall Rule Strategies
  📚 Veeam Backup & Replication 3-2-1 Strategy Guide
  📚 VMware ESXi & Hyper-V Optimization and P2V Migration
  📚 Enterprise Wi-Fi Security (WPA3-Enterprise, RADIUS)
  📚 Linux Server Security Baselines`,
  analysis: `<span class="cli-h">// SYSTEM & PERFORMANCE ANALYSIS</span>
  <span class="cli-grn">Bandwidth Utilization:</span> Optimized traffic routing resulting in 40% less WAN saturation.
  <span class="cli-grn">Server Resource Allocation:</span> Rebalanced VM resources preventing CPU/RAM bottlenecking across 12 VMs.
  <span class="cli-grn">Incident Response Time:</span> Reduced MTTR (Mean Time To Repair) by 50% using proactive PRTG/Zabbix monitoring.
  <span class="cli-grn">Security Posture:</span> Deployed endpoint protection and centralized patching, achieving 100% compliance.`,
  projects: `<span class="cli-h">// PROJECTS</span>
  🏥 Hospital Network Modernization [VLAN/OSPF/Security]
  🔐 Enterprise Active Directory Migration [Windows Server/GPO]
  ☁️ Hyper-V Server Virtualization [Disaster Recovery/Consolidation]
  🔥 Fortigate Firewall & VPN Deployment [Network Security]
  💾 Veeam Backup & Replication [3-2-1 Strategy]
  🛡️ Endpoint Threat Response Setup [Sophos/Kaspersky]
  📶 Secure Enterprise Wireless [RADIUS/WPA3]
  ⚙️ WSUS Automated Patch Management [Centralized Updates]
  🔌 Cisco Core Switch Port Security [Access Control]
  ☁️ Azure Cloud Hybrid Connectivity [Azure VMs/VPN]
  🎫 ITIL Helpdesk & Ticketing Rollout [Tier 1-3 SLAs]
  🏢 Office Relocation & IT Build-Out [Cabling/Racking]`
};

function cliPrint(html, cls = "cli-resp") {
  const el = document.createElement("div");
  el.className = "cli-line " + cls;
  el.innerHTML = html;
  document.getElementById("cli-output").appendChild(el);
  document.getElementById("cli-output").scrollTop = 99999;
}

function bootCLI() {
  cliPrint(`<span class="cli-logo-anim" style="color:#5ba4e3;">
████████╗███████╗███████╗ █████╗ 
╚══██╔══╝██╔════╝██╔════╝██╔══██╗
   ██║   █████╗  █████╗  ███████║
   ██║   ██╔══╝  ██╔══╝  ██╔══██║
   ██║   ███████╗██║     ██║  ██║
   ╚═╝   ╚══════╝╚═╝     ╚═╝  ╚═╝</span>`);
  cliPrint(`<span class="cli-h">Mohamed Sayid Lotfy — Network & System Administrator</span>`);
  cliPrint(`<span class="cli-dim">────────────────────────────────────────</span>`);
  const menuItems = [
    ["Who is Mohamed Sayid Lotfy?", "1", "whoismsl"],
    ["Professional Summary", "2", "summary"],
    ["Work Experience", "3", "experience"],
    ["Technical Skills", "4", "skills"],
    ["Projects", "5", "projects"],
    ["Homelab", "6", "homelab"],
    ["IT Services", "7", "services"],
    ["Case Studies", "8", "casestudies"],
    ["Education", "9", "education"],
    ["Certificates Gallery", "10", "certgallery"],
    ["Key Achievements", "11", "achievements"],
    ["Tech Library Base", "12", "techlibrary"],
    ["Analysis", "13", "analysis"],
    ["Social Proof", "14", "socialproof"],
    ["Contact Info", "15", "contact"],
  ];
  menuItems.forEach(([label, num, cmd]) => {
    const padded = label.padEnd(30, " ");
    cliPrint(`<span class="cli-ylw">${padded}</span><span class="cli-dim">→ press</span> <span class="cli-grn">${num}</span> <span class="cli-dim">or type</span> <span class="cli-grn">${cmd}</span>`);
  });
  cliPrint(`<span class="cli-dim">────────────────────────────────────────</span>`);
  cliPrint(`<span class="cli-dim">Tab=autocomplete · ↑↓=history · ESC=normal · clear · exit</span>`);
  cliPrint(``);
}

const NUM_MAP = { "1": "whoismsl", "2": "summary", "3": "experience", "4": "skills", "5": "projects", "6": "homelab", "7": "services", "8": "casestudies", "9": "education", "10": "certgallery", "11": "achievements", "12": "techlibrary", "13": "analysis", "14": "socialproof", "15": "contact" };

function runCLI(cmd) {
  cmd = cmd.trim().toLowerCase();
  if (!cmd) return;
  cliHistory.unshift(cmd); cliHistIdx = -1;
  const mapped = NUM_MAP[cmd] || cmd;
  cliPrint(`<span class="cli-cmd">$ ${cmd}${mapped !== cmd ? ' → ' + mapped : ''}</span>`);

  if (mapped === "clear" || cmd === "clear") { document.getElementById("cli-output").innerHTML = ""; bootCLI(); return }
  if (mapped === "exit" || cmd === "exit") { setMode("normal"); return }
  if (mapped === "date" || cmd === "date") { cliPrint(new Date().toString()); return }
  if (mapped === "menu" || cmd === "menu") { document.getElementById("cli-output").innerHTML = ""; bootCLI(); return }

  // --- EASTER EGGS / UTILITIES ---
  if (cmd === "sudo") {
    cliPrint(`<span class="cli-err">Permission denied: user "Guest" is not in the sudoers file. This incident will be reported.</span>`);
    return;
  }
  if (cmd === "ping") {
    cliPrint(`PING msl.it (192.168.1.1): 56 data bytes`);
    let count = 0;
    const pInt = setInterval(() => {
      cliPrint(`64 bytes from 192.168.1.1: icmp_seq=${count} ttl=64 time=${(Math.random() * 5 + 10).toFixed(3)} ms`);
      count++;
      if (count >= 4) {
        clearInterval(pInt);
        cliPrint(`--- msl.it ping statistics ---`);
        cliPrint(`4 packets transmitted, 4 packets received, 0.0% packet loss`);
      }
    }, 500);
    return;
  }
  if (cmd === "matrix") {
    cliPrint(`<span class="cli-grn">Initializing Digital Rain Protocol...</span>`);
    const cv = document.getElementById("mx");
    const oldO = cv.style.opacity;
    const oldZ = cv.style.zIndex;

    cv.style.zIndex = "1000";
    cv.style.opacity = "1";
    showHacked = true;

    setTimeout(() => {
      cv.style.opacity = oldO;
      cv.style.zIndex = oldZ;
      showHacked = false;
      cliPrint(`<span class="cli-grn">Digital Rain sequence complete. Logs sanitized.</span>`);
    }, 8000);
    return;
  }
  if (cmd === "top") {
    cliPrint(`<span class="cli-h">// SYSTEM RESOURCES (Live)</span>`);
    cliPrint(`Tasks: 14 total, 1 running, 13 sleeping`);
    cliPrint(`%Cpu(s): ${(Math.random() * 10 + 2).toFixed(1)} us, ${(Math.random() * 5).toFixed(1)} sy, 0.0 ni, 85.0 id`);
    cliPrint(`MiB Mem : 65536 total, 42100 free, 12400 used, 11036 buff/cache`);
    cliPrint(``);
    cliPrint(`<span class="cli-dim">PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND</span>`);
    cliPrint(`102 guest     20   0   14.2g   1.2g  84200 S   2.4   1.8   0:12.45 portfolio_engine`);
    cliPrint(`105 guest     20   0    8.4g   0.6g  42100 R   1.2   0.9   0:02.11 cli_terminal`);
    return;
  }
  if (cmd === "neofetch") {
    const cores = navigator.hardwareConcurrency || "8";
    cliPrint(`       <span class="cli-acc">.---.</span>       <span class="cli-acc">guest@MSL_OS</span>`);
    cliPrint(`      <span class="cli-acc">/     \\</span>      <span class="cli-dim">------------</span>`);
    cliPrint(`      <span class="cli-acc">\\.@ @./</span>      <span class="cli-acc">OS:</span> MSL_OS v2.0.4`);
    cliPrint(`      <span class="cli-acc">/  _  \\</span>      <span class="cli-acc">Kernel:</span> 6.1.0-21-amd64`);
    cliPrint(`     <span class="cli-acc">/|     |\\</span>     <span class="cli-acc">Uptime:</span> 24 days, 14 hours`);
    cliPrint(`    <span class="cli-acc">/ \\___/ \\</span>    <span class="cli-acc">Shell:</span> portfolio-sh 5.1`);
    cliPrint(`   <span class="cli-acc">/_________\\</span>   <span class="cli-acc">CPU:</span> ${cores} Continuous Processors`);
    cliPrint(`   <span class="cli-acc">|         |</span>   <span class="cli-acc">GPU:</span> WebGL Accelerated`);
    return;
  }

  if (D[mapped]) { cliPrint(D[mapped]); cliPrint(``); }
  else {
    const matches = CMDS.filter(c => c.startsWith(cmd));
    if (matches.length) cliPrint(`<span class="cli-dim">Did you mean: ${matches.join(", ")}?</span>`);
    else cliPrint(`<span class="cli-err">command not found: "${cmd}" · type 'help' or press 1-15</span>`);
  }
}

const inp = document.getElementById("cli-in");
inp.addEventListener("keydown", e => {
  if (e.key === "Enter") { const v = inp.value; inp.value = ""; runCLI(v); }
  else if (e.key === "Tab") {
    e.preventDefault();
    const v = inp.value.trim().toLowerCase();
    const matches = CMDS.filter(c => c.startsWith(v));
    if (matches.length === 1) inp.value = matches[0];
    else if (matches.length > 1) cliPrint('<span class="cli-dim">→ ' + matches.join('  ') + '</span>');
  }
  else if (e.key === "ArrowUp") { e.preventDefault(); if (cliHistIdx < cliHistory.length - 1) { cliHistIdx++; inp.value = cliHistory[cliHistIdx] || "" } }
  else if (e.key === "ArrowDown") { e.preventDefault(); if (cliHistIdx > 0) { cliHistIdx--; inp.value = cliHistory[cliHistIdx] || "" } else { cliHistIdx = -1; inp.value = "" } }
});
document.getElementById("cli").addEventListener("click", () => inp.focus());

let currentCertIdx = -1;
let certCardsList = [];

function openCert(card) {
  certCardsList = Array.from(document.querySelectorAll('.cert-card'));
  currentCertIdx = certCardsList.indexOf(card);
  updateCertLightbox();
  const lb = document.getElementById('cert-lightbox');
  document.body.appendChild(lb);
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (active) document.getElementById('pg-' + active).style.overflow = 'hidden';
}
function updateCertLightbox() {
  if (currentCertIdx < 0 || currentCertIdx >= certCardsList.length) return;
  const card = certCardsList[currentCertIdx];
  const img = card.querySelector('img');
  const name = card.querySelector('.cert-name').textContent;
  const lbImg = document.getElementById('cert-lb-img');
  const lbName = document.getElementById('cert-lb-name');
  lbImg.src = img.src;
  lbImg.alt = name;
  lbName.textContent = name;
}
function prevCert(e) {
  if (e) e.stopPropagation();
  if (certCardsList.length === 0) return;
  currentCertIdx = (currentCertIdx > 0) ? currentCertIdx - 1 : certCardsList.length - 1;
  updateCertLightbox();
}
function nextCert(e) {
  if (e) e.stopPropagation();
  if (certCardsList.length === 0) return;
  currentCertIdx = (currentCertIdx < certCardsList.length - 1) ? currentCertIdx + 1 : 0;
  updateCertLightbox();
}
function closeCert(e) {
  if (e) e.stopPropagation();
  document.getElementById('cert-lightbox').classList.remove('open');
  document.body.style.overflow = '';
  if (active) document.getElementById('pg-' + active).style.overflow = '';
}
// Escape listener moved up to global keydown event





function printCV() {
  const w = window.open("Mohamed%20Sayid%20Lotfy%20CV.pdf", "_blank");
  if (w) w.addEventListener("load", () => w.print());
}

(function () {
  var p1 = "mohamed" + "-" + "sayid";
  var p2 = "out" + "look" + ".com";
  var em = p1 + "@" + p2;
  document.querySelectorAll('[data-mail="1"]').forEach(function (a) { a.href = "mail" + "to:" + em; });
  document.querySelectorAll('.em-txt').forEach(function (s) { s.textContent = em; });
})();

// Homelab real-time stats simulation
const serverBootTime = Date.now() - (24 * 86400000 + 14 * 3600000 + 3 * 60000 + 15 * 1000); // 24 days, 14 hours, 3 mins ago
let currentLoad = 24;

setInterval(() => {
  if (active === 'homelab') {
    // 1. Uptime
    const upE = document.getElementById('hl-uptime');
    if (upE) {
      const diff = Math.floor((Date.now() - serverBootTime) / 1000);
      const d = Math.floor(diff / 86400);
      const h = Math.floor((diff % 86400) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      upE.innerHTML = `${d}d ${h}h ${m}m ${s}s <span class="dash-blink">_</span>`;
    }

    // 2. Ping Latency & Chart
    if (Math.random() > 0.4) {
      const latE = document.getElementById('hl-latency');
      const ch = document.getElementById('hl-ping-chart');
      if (latE && ch) {
        const lat = Math.floor(Math.random() * 8) + 12; // 12..19ms
        latE.innerHTML = lat + 'ms <span class="dash-blink">_</span>';
        const bars = ch.querySelectorAll('.dash-ping-bar');
        for (let i = 0; i < bars.length - 1; i++) bars[i].style.height = bars[i + 1].style.height || '10px';
        const h = Math.max(4, Math.min(20, (lat / 20) * 16));
        bars[bars.length - 1].style.height = h + 'px';
      }
    }

    // 3. Avg Load & Bar
    if (Math.random() > 0.5) {
      const ldE = document.getElementById('hl-load');
      const ldF = document.getElementById('hl-load-fill');
      if (ldE && ldF) {
        let change = Math.floor(Math.random() * 11) - 4; // -4 to +6
        currentLoad = Math.max(12, Math.min(88, currentLoad + change));
        ldE.innerHTML = currentLoad + '% <span class="dash-blink">_</span>';
        ldF.style.width = currentLoad + '%';
        if (currentLoad > 75) { ldF.style.background = 'var(--red)'; ldF.style.boxShadow = '0 0 8px var(--red)'; }
        else if (currentLoad > 55) { ldF.style.background = 'var(--ylw)'; ldF.style.boxShadow = '0 0 8px var(--ylw)'; }
        else { ldF.style.background = 'var(--grn)'; ldF.style.boxShadow = '0 0 8px var(--grn)'; }
      }
    }

    // 4. Active VMs & Grid
    if (Math.random() > 0.7) {
      const vmE = document.getElementById('hl-vms');
      const vmG = document.getElementById('hl-vms-grid');
      if (vmE && vmG) {
        let count = 11 + Math.floor(Math.random() * 5); // 11 to 15
        vmE.innerHTML = count + '/16 <span class="dash-blink">_</span>';

        let arr = Array(16).fill(false);
        let indices = Array.from({ length: 16 }, (_, i) => i);
        indices.sort(() => Math.random() - 0.5);
        for (let i = 0; i < count; i++) arr[indices[i]] = true;

        let boxes = '';
        for (let i = 0; i < 16; i++) {
          boxes += `<div class="dash-vm-box ${arr[i] ? 'on' : ''}"></div>`;
        }
        vmG.innerHTML = boxes;
      }
    }
  }
}, 1000);

// Interactive Skills Chart for Analysis Section
let skillsChart = null;

function initSkillsChart() {
  const ctx = document.getElementById('skillsChart');
  if (!ctx) return;
  if (typeof Chart === 'undefined') {
    setTimeout(initSkillsChart, 100);
    return;
  }

  if (skillsChart) skillsChart.destroy();

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';

  const textColor = isLight ? '#333' : '#a0b0c0';
  const gridColor = isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)';
  const angleLineColor = isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)';
  const primaryColor = isLight ? 'rgba(255, 120, 50, 0.4)' : 'rgba(255, 160, 50, 0.4)';
  const primaryBorder = isLight ? '#e65c00' : '#ffa032';

  skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [['Network', 'Admin'], ['System', 'Admin'], ['Firewall &', 'Security'], 'Medical IT', 'Virtualization', ['Cloud', 'Services']],
      datasets: [{
        label: 'Domain Expertise (%)',
        data: [92, 88, 85, 80, 82, 75],
        backgroundColor: primaryColor,
        borderColor: primaryBorder,
        pointBackgroundColor: primaryBorder,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: primaryBorder,
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: { top: 0, bottom: 0, left: 15, right: 15 }
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          angleLines: { color: angleLineColor },
          grid: { color: gridColor },
          pointLabels: {
            color: textColor,
            font: { family: 'IBM Plex Mono', size: 10.5 }
          },
          ticks: {
            display: false,
            stepSize: 20
          }
        }
      },
      animation: {
        duration: 400,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isLight ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
          titleColor: isLight ? '#fff' : '#000',
          bodyColor: isLight ? '#fff' : '#000',
          titleFont: { family: 'IBM Plex Mono' },
          bodyFont: { family: 'IBM Plex Mono' },
          displayColors: false
        }
      }
    }
  });
}

// Call initially
initSkillsChart();

// Re-init chart when theme changes (override the global function or add listener)
if (typeof toggleTheme === 'function') {
  const originalToggleTheme = toggleTheme;
  window.toggleTheme = function () {
    originalToggleTheme();
    setTimeout(initSkillsChart, 50);
  };
}

// View toggle logic
const chartToggleBtn = document.getElementById('chart-toggle-btn');
if (chartToggleBtn) {
  chartToggleBtn.addEventListener('click', function () {
    const barsView = document.getElementById('domain-bars-view');
    const chartView = document.getElementById('domain-chart-view');

    if (barsView.style.display === 'none') {
      barsView.style.display = 'block';
      chartView.style.display = 'none';
      chartToggleBtn.textContent = 'RADAR VIEW';
      // Trigger bar animation
      document.querySelectorAll('#domain-bars-view .domain-fill').forEach(el => {
        let p = el.getAttribute('data-pct');
        el.style.width = '0%';
        setTimeout(() => el.style.width = p + '%', 50);
      });
    } else {
      barsView.style.display = 'none';
      chartView.style.display = 'block';
      chartToggleBtn.textContent = 'CLASSIC VIEW';
    }
  });
}


// Tech Library Filter Logic
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.tl-filter-btn');
  const articles = document.querySelectorAll('#pg-techlibrary .proj-c:not(.sp-tcard-typing)');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        if (this.classList.contains('active')) return;

        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        // Find currently visible articles to fade them out smoothly
        const visibleArticles = Array.from(articles).filter(a => a.style.display !== 'none');

        gsap.to(visibleArticles, {
          duration: 0.2,
          opacity: 0,
          scale: 0.98,
          y: 10,
          stagger: 0.015,
          ease: "power1.inOut",
          onComplete: () => {
            // After fade out, change display properties
            let toShow = [];
            articles.forEach(article => {
              let match = false;
              if (filterValue === 'all') {
                match = true;
              } else {
                const tags = article.querySelectorAll('.pt');
                tags.forEach(tag => {
                  if (tag.textContent.toLowerCase().includes(filterValue.toLowerCase())) {
                    match = true;
                  }
                });
              }

              if (match) {
                article.style.display = ''; // Restore original CSS display (likely block or grid-item)
                toShow.push(article);
              } else {
                article.style.display = 'none';
              }
            });

            // Fade in the matched items
            if (toShow.length > 0) {
              gsap.fromTo(toShow,
                { opacity: 0, scale: 0.98, y: 10 },
                { duration: 0.3, opacity: 1, scale: 1, y: 0, stagger: 0.03, ease: "power2.out" }
              );
            }

            // Re-trigger scroll trigger refreshes if necessary so lower sections don't break layout
            ScrollTrigger.refresh();
          }
        });
      });
    });
  }
});

// --- CONTACT FORM HANDLER (EmailJS) ---
// Note to USER: You need to sign up at emailjs.com, get your Public Key, Service ID, and Template ID.
const EMAILJS_PUBLIC_KEY = "KO07dlkcRLxeOHNU1";
const EMAILJS_SERVICE_ID = "service_0vwn4kr";
const EMAILJS_TEMPLATE_ID = "template_353aai5";

const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_qe4l2ug"; // ID الخاص بقالب الرد التلقائي تم التحديث ✓

(function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('f-submit');
  const btnText = document.getElementById('f-btn-text');

  if (!form) return;

  if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.style.pointerEvents = 'none';
    submitBtn.style.opacity = '0.7';
    btnText.textContent = "SENDING...";

    if (typeof emailjs === 'undefined' || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      setTimeout(() => {
        showStatus("Demo Mode: Message sent! (Configure EmailJS for real email)", true);
        resetBtn();
        form.reset();
      }, 1000);
      return;
    }

    // 1. ارسال الإيميل الأساسي لك
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
      .then(() => {
        // 2. ارسال إيميل شكر تلقائي للعميل (إذا تم توفير ID القالب)
        if (EMAILJS_AUTOREPLY_TEMPLATE_ID !== "YOUR_AUTO_REPLY_TEMPLATE_ID") {
          const formData = new FormData(form);
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, {
            from_name: formData.get('from_name'),
            reply_to: formData.get('reply_to'),
            message: "Thank you for contacting me. I have received your message and will get back to you as soon as possible."
          });
        }
        
        showStatus("Message sent successfully! ✓", true);
        form.reset();
        resetBtn();
      }, (error) => {
        console.error('EmailJS Error:', error);
        showStatus("Failed to send message. Please try again.", false);
        resetBtn();
      });
  });

  function showStatus(msg, isSuccess) {
    status.textContent = msg;
    status.className = "form-status active " + (isSuccess ? "success-msg" : "error-msg");
    gsap.fromTo(status, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
    setTimeout(() => {
      gsap.to(status, {
        opacity: 0, duration: 0.5, onComplete: () => {
          status.className = "form-status";
        }
      });
    }, 5000);
  }

  function resetBtn() {
    submitBtn.style.pointerEvents = 'auto';
    submitBtn.style.opacity = '1';
    btnText.textContent = "SEND MESSAGE";
  }
})();

