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
  pct += Math.random() * 8 + 4;
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

  // Right Column Cyber NOC Entrance
  gsap.fromTo("#home-noc",
    { opacity: 0, y: 24, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      delay: 0.5,
      ease: "power3.out",
      onStart: () => {
        const noc = document.getElementById("home-noc");
        if (noc) noc.style.opacity = "1";
      }
    }
  );

  // Stagger NOC Cards inside
  gsap.fromTo(".noc-card",
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, delay: 0.8, ease: "power2.out" }
  );

  // Reveal Console Terminal Wrap
  gsap.fromTo(".noc-console-wrap",
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.45, delay: 1.15, ease: "power2.out" }
  );

  // Stagger Stats Underneath
  gsap.fromTo(".hstat",
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
      delay: 1.35,
      ease: "power3.out",
      onStart: () => {
        const hs = document.getElementById("hstats");
        if (hs) hs.style.opacity = "1";
      }
    }
  );

  // Enterprise Trust Bar Entrance & Badges Stagger
  gsap.fromTo("#etrust",
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
      delay: 1.55,
      ease: "power3.out",
      onStart: () => {
        const et = document.getElementById("etrust");
        if (et) et.style.opacity = "1";
      }
    }
  );
  gsap.fromTo(".et-badge",
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, stagger: 0.06, duration: 0.4, delay: 1.7, ease: "power2.out" }
  );

  // Nav Cards
  gsap.fromTo(".nc",
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.5,
      delay: 1.85,
      ease: "power3.out",
      clearProps: "transform",
      onStart: () => {
        const nc = document.getElementById("nav-cards");
        if (nc) nc.style.opacity = "1";
      }
    }
  );
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

function goPage(id, pushHash = true) {
  const ov = document.getElementById("pg-" + id);
  if (!ov) return;
  const home = document.getElementById("pg-home");
  active = id;
  applyPageColor(id);
  gsap.set(ov, { display: "block", opacity: 0, x: "4%" });
  ov.scrollTop = 0;
  document.getElementById("prog-b").style.width = "0";
  const bb = document.getElementById("back-btn");
  bb.style.display = "flex";
  const pt = document.getElementById("page-title"); 
  pt.textContent = (currentLang === "ar" && AR_NAMES[id]) ? AR_NAMES[id] : (NAMES[id] || id.toUpperCase());
  gsap.timeline({ onComplete: () => { gsap.set([home, ov], { clearProps: "filter" }) } })
    .to(home, { x: "-4%", opacity: 0, filter: "blur(4px)", duration: .35, ease: "power2.inOut" })
    .fromTo(ov, { filter: "blur(4px)" }, { opacity: 1, x: "0%", filter: "blur(0px)", duration: .4, ease: "power2.out" }, "-=.1");
  gsap.to(pt, { opacity: 1, duration: .3, delay: .18 });
  if (id === "skills" || id === "analysis") animateBars(id);

  if (pushHash && window.location.hash !== "#" + id) {
    try {
      history.pushState({ page: id }, "", "#" + id);
    } catch(e) {
      window.location.hash = id;
    }
  }
}

function goHome(pushHash = true) {
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

  if (pushHash && window.location.hash) {
    try {
      history.pushState({ page: "home" }, "", window.location.pathname + window.location.search);
    } catch(e) {
      window.location.hash = "";
    }
  }
}

// Handle Browser Back / Forward Buttons
window.addEventListener("popstate", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById("pg-" + hash)) {
    goPage(hash, false);
  } else {
    goHome(false);
  }
});

// Auto-route on initial page load if URL has hash (e.g. #casestudies)
window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById("pg-" + hash)) {
    skipBoot();
    setTimeout(() => {
      goPage(hash, false);
    }, 100);
  }
});

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



function skipBoot() {
  if (typeof ldT !== 'undefined') clearInterval(ldT);
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
  launchHero();
}


/* ══ AI ASSISTANT CONVERSATIONAL ENGINE ══ */
let aiOpen = false;

function toggleAIAssistant() {
  aiOpen = !aiOpen;
  const modal = document.getElementById("ai-modal");
  if (!modal) return;
  modal.style.display = aiOpen ? "flex" : "none";
  if (aiOpen) {
    const inp = document.getElementById("ai-input");
    if (inp) inp.focus();
  }
}

function askAIClick(query) {
  const inp = document.getElementById("ai-input");
  if (inp) {
    inp.value = query;
    handleAISubmit(new Event('submit'));
  }
}

function handleAISubmit(e) {
  if (e) e.preventDefault();
  const inp = document.getElementById("ai-input");
  if (!inp) return;
  const query = inp.value.trim();
  if (!query) return;
  inp.value = "";
  
  const box = document.getElementById("ai-messages");
  if (!box) return;
  
  // User bubble
  const uMsg = document.createElement("div");
  uMsg.className = "ai-msg ai-msg-user";
  uMsg.textContent = query;
  box.appendChild(uMsg);
  box.scrollTop = box.scrollHeight;
  
  // Thinking bubble
  const bMsg = document.createElement("div");
  bMsg.className = "ai-msg ai-msg-bot";
  bMsg.innerHTML = '<span style="opacity:0.6; font-style:italic;">Querying MSL knowledge base...</span>';
  box.appendChild(bMsg);
  box.scrollTop = box.scrollHeight;
  
  setTimeout(() => {
    bMsg.innerHTML = generateAIAnswer(query);
    box.scrollTop = box.scrollHeight;
  }, 350);
}

function generateAIAnswer(q) {
  const lq = q.toLowerCase();
  const isAr = /[؀-ۿ]/.test(q);
  
  if (lq.includes("bank") || lq.includes("we") || lq.includes("telecom") || lq.includes("بنك") || lq.includes("اتصالات") || lq.includes("عملاء") || lq.includes("client") || lq.includes("canada") || lq.includes("كندا")) {
    return isAr ?
      "<strong>أبرز المشاريع المؤسسية لمحمد:</strong><br>• <strong>المصرية للاتصالات (WE):</strong> مشروع تحديث وتطوير خوادم السيرفرات (Server Refresh).<br>• <strong>بنك الإسكندرية (فرع القاهرة):</strong> بناء البنية التحتية للفرع، وتركيب السويتشات والكابلات واختبار الاتصال.<br>• <strong>Art Topia (كندا) + 4 شركات دولية:</strong> دعم فني عن بعد للبنية التحتية والأنظمة.<br>• <strong>شركة بالأرجنتين:</strong> دعم فني للأنظمة عن بعد." :
      "<strong>Key Enterprise & Global Projects:</strong><br>• <strong>Telecom Egypt (WE):</strong> Server refresh and infrastructure modernization.<br>• <strong>Bank of Alexandria (Cairo Branch):</strong> Built branch IT infrastructure, switch deployment, and cabling connectivity.<br>• <strong>Art Topia (Canada) + 4 Global Companies:</strong> Remote infrastructure, systems & network technical support.<br>• <strong>Argentina Enterprise:</strong> Remote IT systems and server support.";
  }
  
  if (lq.includes("cert") || lq.includes("ccna") || lq.includes("ccnp") || lq.includes("شهادات") || lq.includes("شهادة") || lq.includes("course") || lq.includes("كورس") || lq.includes("devops") || lq.includes("ansible")) {
    return isAr ?
      "<strong>الشهادات والكورسات الرسمية لمحمد:</strong><br>• <strong>Cisco CCNA معتمدة:</strong> برقم رسمي (CSCO15040282) صالحة حتى نوفمبر 2028.<br>• <strong>دبلومة DevOps (120 ساعة):</strong> من SCAL Academy.<br>• <strong>CCNP Enterprise Core (ENCOR) & CCNP Security (SCOR):</strong> إتمام المسارات المتقدمة لسيسكو.<br>• <strong>Ansible RH294:</strong> أتمتة الشبكات والأنظمة.<br>• <strong>Linux Administration I & II (64 ساعة):</strong> إدارة خوادم لينكس.<br>• <strong>MCSA 2016 (60 ساعة):</strong> إدارة خوادم ويندوز." :
      "<strong>Certifications & Verified Courses:</strong><br>• <strong>Cisco Certified Network Associate (CCNA):</strong> Official ID CSCO15040282, valid through Nov 2028.<br>• <strong>DevOps Diploma (120 Hours):</strong> SCAL Academy.<br>• <strong>CCNP Core (ENCOR) & CCNP Security (SCOR):</strong> Advanced enterprise routing, switching & security.<br>• <strong>Ansible RH294 (40 Hours):</strong> Enterprise infrastructure automation.<br>• <strong>Linux Administration I & II (64 Hours):</strong> Enterprise Linux server operations.<br>• <strong>MCSA 2016 (60 Hours):</strong> Windows Server administration.";
  }
  
  if (lq.includes("lab") || lq.includes("homelab") || lq.includes("wazuh") || lq.includes("هوملاب") || lq.includes("لاب") || lq.includes("proxmox") || lq.includes("vmware")) {
    return isAr ?
      "<strong>مختبر الـ Homelab الخاص بمحمد:</strong><br>• <strong>الافتراضية:</strong> عنقود VMware ESXi 8.0 و Proxmox يضم 14 نظاماً وهمياً (Active Directory, Linux services).<br>• <strong>مختبر الأمن السيبراني:</strong> Wazuh SIEM مدمج مع Elastic Stack، وفايروول pfSense مع Suricata IDS/IPS و OpenVPN.<br>• <strong>محاكاة الشبكات:</strong> EVE-NG و GNS3 لاختبار بروتوكولات OSPF و EIGRP و BGP و STP على مستوى CCNP.<br>• <strong>التخزين والأتمتة:</strong> خادم TrueNAS ZFS للنسخ الاحتياطي، وحاويات Docker/Portainer مع Ansible playbooks." :
      "<strong>Mohamed's Homelab Architecture:</strong><br>• <strong>Virtualization:</strong> VMware ESXi 8.0 cluster & Proxmox running 14 active production-like VMs.<br>• <strong>Cybersecurity Lab:</strong> Wazuh SIEM integrated with Elastic Stack, pfSense IDS/IPS, Suricata alerts, and OpenVPN.<br>• <strong>Network Simulation:</strong> EVE-NG and GNS3 environments for testing enterprise OSPF, EIGRP, BGP, and RSTP topologies.<br>• <strong>Storage & Automation:</strong> TrueNAS ZFS pool for immutable VM backups, Ansible playbooks, and Docker/Portainer stacks.";
  }
  
  if (lq.includes("contact") || lq.includes("hire") || lq.includes("email") || lq.includes("phone") || lq.includes("تواصل") || lq.includes("ايميل") || lq.includes("تليفون") || lq.includes("واتس") || lq.includes("شغل")) {
    return isAr ?
      "<strong>بيانات التواصل المباشرة مع محمد:</strong><br>• <strong>الهاتف / واتساب:</strong> <a href='https://wa.me/201503333155' target='_blank' style='color:var(--grn); font-weight:bold;'>+20 150 333 3155</a><br>• <strong>البريد الإلكتروني:</strong> <a href='mailto:mohamed-sayid@outlook.com' style='color:var(--acc); font-weight:bold;'>mohamed-sayid@outlook.com</a><br>• <strong>لينكد إن:</strong> <a href='https://www.linkedin.com/in/mohamedelsayid' target='_blank' style='color:var(--acc); font-weight:bold;'>linkedin.com/in/mohamedelsayid</a><br>• <strong>الموقع:</strong> القاهرة، مصر (معافى نهائياً من التجنيد ومتاح للأدوار القيادية والاستشارات)." :
      "<strong>Direct Contact & Hiring Information:</strong><br>• <strong>Phone / WhatsApp:</strong> <a href='https://wa.me/201503333155' target='_blank' style='color:var(--grn); font-weight:bold;'>+20 150 333 3155</a><br>• <strong>Email:</strong> <a href='mailto:mohamed-sayid@outlook.com' style='color:var(--acc); font-weight:bold;'>mohamed-sayid@outlook.com</a><br>• <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/mohamedelsayid' target='_blank' style='color:var(--acc); font-weight:bold;'>linkedin.com/in/mohamedelsayid</a><br>• <strong>Location:</strong> Cairo, Egypt · Permanently Exempt from Military Service · Open to Senior Roles & Consulting.";
  }

  return isAr ?
    "<strong>محمد سيد لطفي</strong> هو مهندس بنية تحتية وأمن معلومات (Infrastructure & Security Engineer) ومدير عمليات تقنية المعلومات في شركة Viion (يدير 5 مواقع وفريقاً من 5 مهندسين)، ولديه 5 سنوات خبرة عملية في شبكات Cisco (حاصل على CCNA)، وأنظمة Windows Server و AD، وبيئات المستشفيات (HIS/PACS)، ومشاريع مع كبرى المؤسسات مثل المصرية للاتصالات WE وبنك الإسكندرية وشركات في كندا.<br><br>هل تود الاستفسار عن شهاداته، أو مشاريعه، أو طريقة التواصل معه؟" :
    "<strong>Mohamed Sayid Lotfy</strong> is an Infrastructure & Security Engineer and IT Operations Manager at Viion (managing 5 branch sites with a 5-person technical team). He has 5 years of hands-on experience in enterprise Cisco networking (CCNA certified), Windows Server/Active Directory, Hyper-V/VMware, and Fortinet/pfSense security, alongside projects for Telecom Egypt (WE), Bank of Alexandria, and international clients in Canada and Argentina.<br><br>What would you like to know more about? You can ask about his certifications, projects, or direct contact info!";
}


/* ══ MULTI-LANGUAGE ARABIC / ENGLISH ENGINE ══ */
let currentLang = localStorage.getItem("site_lang") || "en";

const AR_NAMES = {
  summary: "نبذة عني",
  experience: "الخبرات العملية",
  education: "التعليم والشهادات",
  achievements: "الإنجازات",
  skills: "المهارات التقنية",
  analysis: "التحليلات",
  contact: "تواصل معي",
  casestudies: "دراسات الحالة",
  socialproof: "شركاء النجاح",
  projects: "المشاريع",
  homelab: "المختبر الافتراضي",
  services: "الخدمات التقنية",
  certgallery: "معرض الشهادات",
  techlibrary: "المكتبة التقنية"
};

const AR_NAV_CARDS = [
  { name: "نبذة عني", hint: "نظرة مهنية عامة" },
  { name: "الخبرات العملية", hint: "سجل المناصب والمواقع" },
  { name: "المهارات", hint: "الترسانة التكنولوجية" },
  { name: "المشاريع", hint: "مبادرات البنية التحتية" },
  { name: "المختبر الافتراضي", hint: "الافتراضية والأنظمة" },
  { name: "الخدمات", hint: "الاستشارات والدعم" },
  { name: "دراسات الحالة", hint: "حلول واقعية موثقة" },
  { name: "التعليم", hint: "الخلفية الأكاديمية" },
  { name: "معرض الشهادات", hint: "12 شهادة معتمدة" },
  { name: "الإنجازات", hint: "مؤشرات النجاح والتميز" },
  { name: "المكتبة التقنية", hint: "الأوامر والتوثيق" },
  { name: "التحليل", hint: "رسوم بيانية للمهارات" },
  { name: "شركاء النجاح", hint: "التوصيات والتوثيق" },
  { name: "تواصل معي", hint: "الهاتف وروابط التواصل" }
];

function toggleLang() {
  setLang(currentLang === "en" ? "ar" : "en");
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("site_lang", lang);
  const html = document.documentElement;
  const langBtn = document.getElementById("lang-btn");
  const barBrand = document.getElementById("bar-brand");
  const btnNorm = document.getElementById("btn-mode-norm");
  const btnCli = document.getElementById("btn-mode-cli");
  const aiBtnLabel = document.querySelector(".ai-btn-label");
  const aiInput = document.getElementById("ai-input");
  const aiTitle = document.querySelector(".ai-title");
  const aiChips = document.getElementById("ai-chips");
  const backBtn = document.getElementById("back-btn");

  if (lang === "ar") {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
    if (langBtn) langBtn.textContent = "🌐 English";
    if (barBrand) barBrand.innerHTML = 'ملف الأعمال // <span class="c">MSL.IT</span>';
    if (btnNorm) btnNorm.textContent = "الوضع الافتراضي";
    if (btnCli) btnCli.textContent = "سطر الأوامر CLI";
    
    // Hero translations
    const schip = document.getElementById("schip");
    if (schip) schip.innerHTML = '<div class="sdot"></div>متاح للفرص القيادية والاستشارات التقنية';
    
    const eyt = document.getElementById("eyt");
    if (eyt) eyt.textContent = "مهندس بنية تحتية وأمن معلومات";
    
    const h1a = document.getElementById("h1a");
    if (h1a) h1a.textContent = "محمد";
    const h1b = document.getElementById("h1b");
    if (h1b) h1b.textContent = "سيد لطفي";
    
    const hrole = document.getElementById("hrole");
    if (hrole) hrole.textContent = "مهندس بنية تحتية وأمن معلومات · مدير عمليات تقنية المعلومات · شبكات سيسكو · أنظمة افتراضية";
    
    const hsub = document.getElementById("hsub");
    if (hsub) hsub.textContent = "مهندس بنية تحتية وأمن معلومات بخبرة 5 سنوات في قطاعات المؤسسات الكبرى، الرعاية الصحية، والقطاع المالي. أدير حالياً العمليات التقنية والأمنية عبر 5 مواقع بفريق من 5 مهندسين في شركة Viion، متخصص في شبكات Cisco (معتمد CCNA)، خوادم Windows Server و Active Directory، والافتراضية Hyper-V/VMware، وأمن Fortinet/pfSense.";
    
    // Meta items
    const hmLoc = document.getElementById("hm-loc");
    if (hmLoc) hmLoc.innerHTML = '<span class="hml">الموقع:</span> <span class="hm-v">القاهرة، مصر</span>';
    const hmTel = document.getElementById("hm-tel");
    if (hmTel) hmTel.innerHTML = '<span class="hml">الهاتف:</span> <a href="tel:+20 150 333 3155" dir="ltr">+20 150 333 3155</a>';
    const hmMail = document.getElementById("hm-mail");
    if (hmMail) hmMail.innerHTML = '<span class="hml">البريد:</span> <a href="mailto:mohamed-sayid@outlook.com">mohamed-sayid@outlook.com</a>';

    // NOC translations
    const nocHdr = document.getElementById("noc-hdr-title");
    if (nocHdr) nocHdr.textContent = "مركز العمليات MSL // مراقبة البنية التحتية";
    const nocT1 = document.getElementById("noc-tab-telemetry-txt");
    if (nocT1) nocT1.textContent = "المراقبة الحية";
    const nocT2 = document.getElementById("noc-tab-topology-txt");
    if (nocT2) nocT2.textContent = "مخطط الشبكة";
    const nocHint = document.getElementById("noc-con-hint");
    if (nocHint) nocHint.textContent = "اضغط لاختبار الاستجابة:";

    // NOC Cards
    const k1l = document.getElementById("noc-kpi-1-lbl"); if (k1l) k1l.textContent = "شبكات سيسكو المؤسسية";
    const k1v = document.getElementById("noc-kpi-1-val"); if (k1v) k1v.textContent = "5 مواقع · 200+ جهاز";
    const k1s = document.getElementById("noc-kpi-1-sub"); if (k1s) k1s.textContent = "توجيه L3 OSPF · استجابة 12ms";
    const nb1 = document.getElementById("noc-b1"); if (nb1) nb1.textContent = "● متصل";

    const k2l = document.getElementById("noc-kpi-2-lbl"); if (k2l) k2l.textContent = "الخوادم الافتراضية";
    const k2v = document.getElementById("noc-kpi-2-val"); if (k2v) k2v.textContent = "14 سيرفر افتراضي نشط";
    const k2s = document.getElementById("noc-kpi-2-sub"); if (k2s) k2s.textContent = "بيئات VMware ESXi و Proxmox ZFS";
    const nb2 = document.getElementById("noc-b2"); if (nb2) nb2.textContent = "● سليم";

    const k3l = document.getElementById("noc-kpi-3-lbl"); if (k3l) k3l.textContent = "الدفاع والأمن السيبراني";
    const k3v = document.getElementById("noc-kpi-3-val"); if (k3v) k3v.textContent = "حماية Wazuh و Suricata";
    const k3s = document.getElementById("noc-kpi-3-sub"); if (k3s) k3s.textContent = "جدار ناري pfSense · بدون أي اختراق";
    const nb3 = document.getElementById("noc-b3"); if (nb3) nb3.textContent = "● نشط";

    const k4l = document.getElementById("noc-kpi-4-lbl"); if (k4l) k4l.textContent = "التعافي والنسخ الاحتياطي";
    const k4v = document.getElementById("noc-kpi-4-val"); if (k4v) k4v.textContent = "نسخ احتياطي Veeam ZFS";
    const k4s = document.getElementById("noc-kpi-4-sub"); if (k4s) k4s.textContent = "استعادة كاملة RTO أقل من ساعتين";
    const nb4 = document.getElementById("noc-b4"); if (nb4) nb4.textContent = "● مقاوم للفدية";

    // Buttons Under NOC
    const tbSummary = document.getElementById("txt-btn-summary"); if (tbSummary) tbSummary.textContent = "عرض الملخص المهني";
    const tbCv = document.getElementById("txt-btn-cv"); if (tbCv) tbCv.textContent = "تحميل السيرة الذاتية (CV)";
    const tbCerts = document.getElementById("txt-btn-certs"); if (tbCerts) tbCerts.textContent = "تحميل الشهادات (PDF)";
    const tbLi = document.getElementById("txt-btn-li"); if (tbLi) tbLi.textContent = "لينكد إن ↗";
    const tbMail = document.getElementById("txt-btn-mail"); if (tbMail) tbMail.textContent = "البريد الإلكتروني ↗";
    const tbWa = document.getElementById("txt-btn-wa"); if (tbWa) tbWa.textContent = "واتساب ↗";
    const tbAn = document.getElementById("txt-btn-an"); if (tbAn) tbAn.textContent = "التحليلات ↗";
    const tbPr = document.getElementById("txt-btn-print"); if (tbPr) tbPr.textContent = "طباعة السيرة الذاتية";
    if (backBtn) backBtn.textContent = "→ العودة للرئيسية";

    // Stats Labels
    const sl1 = document.getElementById("hstat-l1"); if (sl1) sl1.textContent = "سنوات خبرة";
    const sl2 = document.getElementById("hstat-l2"); if (sl2) sl2.textContent = "مواقع مدارة";
    const sl3 = document.getElementById("hstat-l3"); if (sl3) sl3.textContent = "خفض الأعطال";
    const sl4 = document.getElementById("hstat-l4"); if (sl4) sl4.textContent = "استقرار الأنظمة";

    // Trust Bar
    const etLbl = document.getElementById("etrust-lbl"); if (etLbl) etLbl.textContent = "// أبرز المؤسسات والمشاريع المنجزة";
    const etN1 = document.getElementById("et-name1"); if (etN1) etN1.textContent = "بنك الإسكندرية";
    const etS1 = document.getElementById("et-sub1"); if (etS1) etS1.textContent = "تجهيز البنية التحتية للفروع";
    const etN2 = document.getElementById("et-name2"); if (etN2) etN2.textContent = "المصرية للاتصالات (WE)";
    const etS2 = document.getElementById("et-sub2"); if (etS2) etS2.textContent = "تحديث وتطوير الخوادم";
    const etN3 = document.getElementById("et-name3"); if (etN3) etN3.textContent = "Art Topia (كندا)";
    const etS3 = document.getElementById("et-sub3"); if (etS3) etS3.textContent = "دعم تقني دولي عن بُعد";
    const etN4 = document.getElementById("et-name4"); if (etN4) etN4.textContent = "شركة Viion";
    const etS4 = document.getElementById("et-sub4"); if (etS4) etS4.textContent = "إدارة البنية التحتية لـ 5 مواقع";
    const etN5 = document.getElementById("et-name5"); if (etN5) etN5.textContent = "مستشفى الشريعة الرئيسي";
    const etS5 = document.getElementById("et-sub5"); if (etS5) etS5.textContent = "عزل وحماية أنظمة HIS/PACS الطبية";

    // Social Proof Typing Card
    const spTypLbl = document.getElementById("sp-typing-lbl"); if (spTypLbl) spTypLbl.textContent = "جارٍ تدوين توصية جديدة...";
    const spTypQuote = document.getElementById("sp-typing-quote"); if (spTypQuote) spTypQuote.textContent = "يتم حالياً جمع وتدقيق التوصيات والتقييمات الفصلية من الشركاء والمشرفين التقنيين حول أحدث مشاريع البنية التحتية والأنظمة الطبية والبنكية...";
    const spTypAuth = document.getElementById("sp-typing-author"); if (spTypAuth) spTypAuth.textContent = "شريك ومسؤول تقني";
    const spTypRole = document.getElementById("sp-typing-role"); if (spTypRole) spTypRole.textContent = "تقييم أداء فني · جارٍ التدقيق والاعتماد";
    const spTypBadge = document.getElementById("sp-typing-badge"); if (spTypBadge) spTypBadge.textContent = "⏳ قيد المراجعة";

    // AI Assistant widget
    if (aiBtnLabel) aiBtnLabel.textContent = "اسأل الذكاء الاصطناعي";
    if (aiTitle) aiTitle.textContent = "المساعد الذكي // قاعدة بيانات محمد سيد لطفي";
    if (aiInput) aiInput.placeholder = "اسأل عن خبرات، شهادات، أو مشاريع محمد...";
    if (aiChips) {
      aiChips.innerHTML = `
        <button class="ai-chip" onclick="askAIClick('نبذة عن محمد سيد وخبراته')">💼 نبذة مهنية</button>
        <button class="ai-chip" onclick="askAIClick('ما هي شهادات محمد المعتمدة؟')">📜 الشهادات</button>
        <button class="ai-chip" onclick="askAIClick('أبرز مشاريع المؤسسات والبنوك')">🏢 المشاريع</button>
        <button class="ai-chip" onclick="askAIClick('معلومات التواصل والتوظيف')">📞 تواصل معي</button>
      `;
    }
    
    // Command Palette
    const cmdInp = document.getElementById("cmd-input");
    if (cmdInp) cmdInp.placeholder = "ابحث عن قسم أو أمر (مثل 'ccna', 'cv', 'skills', 'ping')...";
    const cmdNav = document.getElementById("txt-cmd-nav"); if (cmdNav) cmdNav.textContent = "تنقل";
    const cmdSel = document.getElementById("txt-cmd-sel"); if (cmdSel) cmdSel.textContent = "اختيار";
    const cmdCls = document.getElementById("txt-cmd-cls"); if (cmdCls) cmdCls.textContent = "إغلاق";
    
    // Nav cards
    const cards = document.querySelectorAll(".nc");
    cards.forEach((card, idx) => {
      if (AR_NAV_CARDS[idx]) {
        const nameEl = card.querySelector(".nc-name");
        const hintEl = card.querySelector(".nc-hint");
        if (nameEl) nameEl.textContent = AR_NAV_CARDS[idx].name;
        if (hintEl) hintEl.textContent = AR_NAV_CARDS[idx].hint;
      }
    });

    if (active && AR_NAMES[active]) {
      const pt = document.getElementById("page-title");
      if (pt) pt.textContent = AR_NAMES[active];
    }
  } else {
    html.removeAttribute("dir");
    html.setAttribute("lang", "en");
    if (langBtn) langBtn.textContent = "🌐 عربي";
    if (barBrand) barBrand.innerHTML = 'PORTFOLIO // <span class="c">MSL.IT</span>';
    if (btnNorm) btnNorm.textContent = "Normal";
    if (btnCli) btnCli.textContent = "CLI";
    
    const schip = document.getElementById("schip");
    if (schip) schip.innerHTML = '<div class="sdot"></div>Open to Opportunities · Systems, Security & IT Operations Roles';
    
    const eyt = document.getElementById("eyt");
    if (eyt) eyt.textContent = "Infrastructure & Security Engineer";
    
    const h1a = document.getElementById("h1a");
    if (h1a) h1a.textContent = "MOHAMED";
    const h1b = document.getElementById("h1b");
    if (h1b) h1b.textContent = "SAYID LOTFY";
    
    const hrole = document.getElementById("hrole");
    if (hrole) hrole.textContent = "Infrastructure & Security Engineer · IT Operations Lead · Cisco Networking · Virtualization";
    
    const hsub = document.getElementById("hsub");
    if (hsub) hsub.textContent = "Infrastructure & Security Engineer with 5 years of hands-on experience across enterprise, healthcare, and financial-sector IT. Currently leading IT operations across 5 branch sites with a 5-person team, specializing in Cisco networking (CCNA), Windows Server/Active Directory, Hyper-V/VMware, and Fortinet/pfSense security.";
    
    // Meta items
    const hmLoc = document.getElementById("hm-loc");
    if (hmLoc) hmLoc.innerHTML = '<span class="hml">Loc</span><span class="hm-v">Cairo, Egypt</span>';
    const hmTel = document.getElementById("hm-tel");
    if (hmTel) hmTel.innerHTML = '<span class="hml">Tel</span><a href="tel:+20 150 333 3155" dir="ltr">+20 150 333 3155</a>';
    const hmMail = document.getElementById("hm-mail");
    if (hmMail) hmMail.innerHTML = '<span class="hml">Mail</span><a href="mailto:mohamed-sayid@outlook.com">mohamed-sayid@outlook.com</a>';

    // NOC translations
    const nocHdr = document.getElementById("noc-hdr-title");
    if (nocHdr) nocHdr.textContent = "MSL_NOC // INFRASTRUCTURE MONITOR";
    const nocT1 = document.getElementById("noc-tab-telemetry-txt");
    if (nocT1) nocT1.textContent = "Telemetry";
    const nocT2 = document.getElementById("noc-tab-topology-txt");
    if (nocT2) nocT2.textContent = "Topology";
    const nocHint = document.getElementById("noc-con-hint");
    if (nocHint) nocHint.textContent = "Click to test:";

    // NOC Cards
    const k1l = document.getElementById("noc-kpi-1-lbl"); if (k1l) k1l.textContent = "Cisco Enterprise Core";
    const k1v = document.getElementById("noc-kpi-1-val"); if (k1v) k1v.textContent = "5 Sites · 200+ Nodes";
    const k1s = document.getElementById("noc-kpi-1-sub"); if (k1s) k1s.textContent = "OSPF Area 0 · L3 · 12ms";
    const nb1 = document.getElementById("noc-b1"); if (nb1) nb1.textContent = "● ONLINE";

    const k2l = document.getElementById("noc-kpi-2-lbl"); if (k2l) k2l.textContent = "Virtualization Farm";
    const k2v = document.getElementById("noc-kpi-2-val"); if (k2v) k2v.textContent = "14 Active VMs";
    const k2s = document.getElementById("noc-kpi-2-sub"); if (k2s) k2s.textContent = "ESXi 8.0 & Proxmox ZFS";
    const nb2 = document.getElementById("noc-b2"); if (nb2) nb2.textContent = "● HEALTHY";

    const k3l = document.getElementById("noc-kpi-3-lbl"); if (k3l) k3l.textContent = "Security Defense";
    const k3v = document.getElementById("noc-kpi-3-val"); if (k3v) k3v.textContent = "Wazuh + Suricata IDS";
    const k3s = document.getElementById("noc-kpi-3-sub"); if (k3s) k3s.textContent = "pfSense · 0 Breaches";
    const nb3 = document.getElementById("noc-b3"); if (nb3) nb3.textContent = "● ACTIVE";

    const k4l = document.getElementById("noc-kpi-4-lbl"); if (k4l) k4l.textContent = "Disaster Recovery";
    const k4v = document.getElementById("noc-kpi-4-val"); if (k4v) k4v.textContent = "Veeam Backup (ZFS)";
    const k4s = document.getElementById("noc-kpi-4-sub"); if (k4s) k4s.textContent = "RTO < 2h · RPO 15m";
    const nb4 = document.getElementById("noc-b4"); if (nb4) nb4.textContent = "● IMMUTABLE";

    // Buttons Under NOC
    const tbSummary = document.getElementById("txt-btn-summary"); if (tbSummary) tbSummary.textContent = "View Summary";
    const tbCv = document.getElementById("txt-btn-cv"); if (tbCv) tbCv.textContent = "Download CV";
    const tbCerts = document.getElementById("txt-btn-certs"); if (tbCerts) tbCerts.textContent = "Certificates ↓";
    const tbLi = document.getElementById("txt-btn-li"); if (tbLi) tbLi.textContent = "LinkedIn ↗";
    const tbMail = document.getElementById("txt-btn-mail"); if (tbMail) tbMail.textContent = "Email ↗";
    const tbWa = document.getElementById("txt-btn-wa"); if (tbWa) tbWa.textContent = "WhatsApp ↗";
    const tbAn = document.getElementById("txt-btn-an"); if (tbAn) tbAn.textContent = "Analysis ↗";
    const tbPr = document.getElementById("txt-btn-print"); if (tbPr) tbPr.textContent = "Print CV";
    if (backBtn) backBtn.textContent = "← Back to Dashboard";

    // Stats Labels
    const sl1 = document.getElementById("hstat-l1"); if (sl1) sl1.textContent = "Yrs Experience";
    const sl2 = document.getElementById("hstat-l2"); if (sl2) sl2.textContent = "Sites Managed";
    const sl3 = document.getElementById("hstat-l3"); if (sl3) sl3.textContent = "Incidents Reduced";
    const sl4 = document.getElementById("hstat-l4"); if (sl4) sl4.textContent = "Critical Uptime";

    // Trust Bar
    const etLbl = document.getElementById("etrust-lbl"); if (etLbl) etLbl.textContent = "// ENTERPRISE CLIENTS & PROJECT HIGHLIGHTS";
    const etN1 = document.getElementById("et-name1"); if (etN1) etN1.textContent = "Bank of Alexandria";
    const etS1 = document.getElementById("et-sub1"); if (etS1) etS1.textContent = "Branch IT Infrastructure";
    const etN2 = document.getElementById("et-name2"); if (etN2) etN2.textContent = "Telecom Egypt (WE)";
    const etS2 = document.getElementById("et-sub2"); if (etS2) etS2.textContent = "Server Refresh";
    const etN3 = document.getElementById("et-name3"); if (etN3) etN3.textContent = "Art Topia (Canada)";
    const etS3 = document.getElementById("et-sub3"); if (etS3) etS3.textContent = "Global Remote Support";
    const etN4 = document.getElementById("et-name4"); if (etN4) etN4.textContent = "Viion";
    const etS4 = document.getElementById("et-sub4"); if (etS4) etS4.textContent = "5 Branch Sites Managed";
    const etN5 = document.getElementById("et-name5"); if (etN5) etN5.textContent = "Main Sharia Hospital";
    const etS5 = document.getElementById("et-sub5"); if (etS5) etS5.textContent = "Medical HIS/PACS";

    // Social Proof Typing Card
    const spTypLbl = document.getElementById("sp-typing-lbl"); if (spTypLbl) spTypLbl.textContent = "Incoming Endorsement...";
    const spTypQuote = document.getElementById("sp-typing-quote"); if (spTypQuote) spTypQuote.textContent = "Currently gathering and verifying quarterly peer reviews and stakeholder endorsements from ongoing enterprise, banking, and healthcare IT deployments...";
    const spTypAuth = document.getElementById("sp-typing-author"); if (spTypAuth) spTypAuth.textContent = "Enterprise Stakeholder";
    const spTypRole = document.getElementById("sp-typing-role"); if (spTypRole) spTypRole.textContent = "Peer Review · Verification in Progress";
    const spTypBadge = document.getElementById("sp-typing-badge"); if (spTypBadge) spTypBadge.textContent = "⏳ In Review";

    // AI Assistant widget
    if (aiBtnLabel) aiBtnLabel.textContent = "Ask MSL AI";
    if (aiTitle) aiTitle.textContent = "MSL_AI // SysAdmin & IT Knowledge Base";
    if (aiInput) aiInput.placeholder = "Ask about Mohamed's experience, certs, projects...";
    if (aiChips) {
      aiChips.innerHTML = `
        <button class="ai-chip" onclick="askAIClick('Tell me about Mohamed background and current role')">💼 Background</button>
        <button class="ai-chip" onclick="askAIClick('What certifications does Mohamed hold?')">📜 Certifications</button>
        <button class="ai-chip" onclick="askAIClick('Key enterprise projects and clients')">🏢 Projects</button>
        <button class="ai-chip" onclick="askAIClick('How can I contact or hire Mohamed?')">📞 Contact & Hire</button>
      `;
    // Command Palette
    const cmdInp = document.getElementById("cmd-input");
    if (cmdInp) cmdInp.placeholder = "Type a command or section (e.g. 'ccna', 'cv', 'skills', 'ping')...";
    const cmdNav = document.getElementById("txt-cmd-nav"); if (cmdNav) cmdNav.textContent = "Navigate";
    const cmdSel = document.getElementById("txt-cmd-sel"); if (cmdSel) cmdSel.textContent = "Select";
    const cmdCls = document.getElementById("txt-cmd-cls"); if (cmdCls) cmdCls.textContent = "Close";

    const cards = document.querySelectorAll(".nc");
    const EN_NAV = [
      { name: "Summary", hint: "Professional overview" },
      { name: "Experience", hint: "Work history & roles" },
      { name: "Skills", hint: "Technical arsenal" },
      { name: "Projects", hint: "Executed IT initiatives" },
      { name: "Homelab", hint: "Virtualization & testing" },
      { name: "IT Services", hint: "Consulting & freelance" },
      { name: "Case Studies", hint: "Real-world solutions" },
      { name: "Education", hint: "Academic background" },
      { name: "Cert Gallery", hint: "Verified certificates" },
      { name: "Achievements", hint: "Key wins & milestones" },
      { name: "Tech Library", hint: "Knowledge base" },
      { name: "Analysis", hint: "Visual skill insights" },
      { name: "Social Proof", hint: "Testimonials & trust" },
      { name: "Contact", hint: "Reach out · social" }
    ];
    cards.forEach((card, idx) => {
      if (EN_NAV[idx]) {
        const nameEl = card.querySelector(".nc-name");
        const hintEl = card.querySelector(".nc-hint");
        if (nameEl) nameEl.textContent = EN_NAV[idx].name;
        if (hintEl) hintEl.textContent = EN_NAV[idx].hint;
      }
    });

    if (active && NAMES[active]) {
      const pt = document.getElementById("page-title");
      if (pt) pt.textContent = NAMES[active];
    }
  }

  // Apply complete translation across all 14 internal pages
  if (typeof applyAllPageTranslations === "function") {
    applyAllPageTranslations(lang);
  }

  // If a subpage is currently open, update its title immediately
  if (active) {
    const pt = document.getElementById("page-title");
    if (pt) {
      pt.textContent = (lang === "ar" && AR_NAMES[active]) ? AR_NAMES[active] : (NAMES[active] || active.toUpperCase());
    }
    if (active === "skills" || active === "analysis") {
      animateBars(active);
    }
  }
}

// Auto-apply saved language on load
window.addEventListener("DOMContentLoaded", () => {
  setLang(currentLang);
});


/* ══ NOC & TOPOLOGY INTERACTIVE LOGIC ══ */
function switchNocTab(tab) {
  const tBtn = document.getElementById("noc-tab-telemetry");
  const pBtn = document.getElementById("noc-tab-topology");
  const tBody = document.getElementById("noc-body-telemetry");
  const pBody = document.getElementById("noc-body-topology");
  if (!tBtn || !pBtn || !tBody || !pBody) return;

  if (tab === "telemetry") {
    tBtn.classList.add("active");
    pBtn.classList.remove("active");
    tBody.style.display = "block";
    pBody.style.display = "none";
  } else {
    pBtn.classList.add("active");
    tBtn.classList.remove("active");
    pBody.style.display = "block";
    tBody.style.display = "none";
  }
}

const NOC_PINGS = {
  cisco: [
    { t: "msl@noc:~$ ping 10.0.1.1 (Cisco-Core-Viion)", c: "green" },
    { t: "64 bytes from 10.0.1.1: icmp_seq=1 time=1.24ms [200+ NODES UP]", c: "cyan" }
  ],
  wazuh: [
    { t: "msl@noc:~$ ping 10.0.99.10 (Wazuh-SIEM)", c: "green" },
    { t: "64 bytes from 10.0.99.10: icmp_seq=1 time=2.05ms [0 THREATS]", c: "cyan" }
  ],
  alex: [
    { t: "msl@noc:~$ ping 172.16.20.1 (Bank-Alexandria)", c: "green" },
    { t: "64 bytes from 172.16.20.1: icmp_seq=1 time=8.42ms [IPSEC STABLE]", c: "cyan" }
  ],
  we: [
    { t: "msl@noc:~$ ping 192.168.100.1 (Telecom-Egypt-WE)", c: "green" },
    { t: "64 bytes from 192.168.100.1: icmp_seq=1 time=5.12ms [REPLICA OK]", c: "cyan" }
  ]
};

function runNocPing(target) {
  const out = document.getElementById("noc-term-out");
  if (!out || !NOC_PINGS[target]) return;
  out.innerHTML = '<div class="noc-t-line green">Transmitting ICMP packets...</div>';
  setTimeout(() => {
    const lines = NOC_PINGS[target];
    out.innerHTML = lines.map(l => `<div class="noc-t-line ${l.c}">${l.t}</div>`).join("");
  }, 200);
}

const TOPO_DATA = {
  core: {
    en: { tag: "NODE: CISCO CORE L3 (VIION HQ)", ip: "10.0.0.1/24 · VLANs", txt: "Automated network core orchestrating 200+ Cisco network devices across 5 branch locations with Layer 3 OSPF routing." },
    ar: { tag: "العقدة: محولات سيسكو L3 الرئيسية", ip: "10.0.0.1/24 · شبكات VLAN", txt: "قلب الشبكة المؤتمت لإدارة 200+ جهاز سيسكو عبر 5 فروع باستخدام توجيه OSPF وتحويل الحزم الفوري." }
  },
  branches: {
    en: { tag: "NODE: 5 BRANCH SITES", ip: "172.16.0.0/16 · IPsec Mesh", txt: "Secure encrypted mesh interconnecting 5 branch offices with redundant WAN links and automated daily configuration backups." },
    ar: { tag: "العقدة: 5 فروع مؤسسية متصلة", ip: "172.16.0.0/16 · أنفاق IPsec", txt: "ربط مشفر آمن لـ 5 فروع مع خطوط اتصال احتياطية ونسخ احتياطي يومي مؤتمت." }
  },
  hospital: {
    en: { tag: "NODE: MAIN SHARIA HOSPITAL", ip: "192.168.50.0/24 · HIS/PACS", txt: "Isolated medical network segment ensuring zero patient data compromise and uninterrupted PACS imaging." },
    ar: { tag: "العقدة: مستشفى الشريعة الرئيسي", ip: "192.168.50.0/24 · بيئة معزولة", txt: "بيئة طبية معزولة تضمن حماية بيانات المرضى واستمرارية عمل أجهزة الأشعة الرقمية والأنظمة الصحية." }
  },
  wazuh: {
    en: { tag: "NODE: WAZUH SIEM & PFSENSE", ip: "10.0.99.0/24 · IDS/IPS Active", txt: "Centralized threat detection and log analysis monitoring event streams 24/7 across all endpoints." },
    ar: { tag: "العقدة: نظام Wazuh SIEM والجدار الناري", ip: "10.0.99.0/24 · حماية نشطة", txt: "مراقبة وتحليل التهديدات الأمنية اللحظية وسجلات الأحداث عبر جميع السيرفرات والأجهزة 24/7." }
  },
  vms: {
    en: { tag: "NODE: VIRTUALIZATION CLUSTER", ip: "VMware ESXi 8.0 & Proxmox", txt: "Enterprise virtualization farm running 14 production VMs including Active Directory, DNS, File Services, and Docker." },
    ar: { tag: "العقدة: مصفوفة الخوادم الافتراضية", ip: "بيئات VMware و Proxmox", txt: "مجموعة خوادم افتراضية تدير 14 نظاماً نشطاً تشمل Active Directory و DNS وحاويات Docker." }
  },
  veeam: {
    en: { tag: "NODE: VEEAM IMMUTABLE BACKUP", ip: "TrueNAS ZFS · Air-Gapped", txt: "Ransomware-proof immutable backup repository guaranteeing recovery time objective (RTO) under 2 hours." },
    ar: { tag: "العقدة: النسخ الاحتياطي غير القابل للتعديل", ip: "نظام Veeam مع ZFS", txt: "خزينة نسخ احتياطي مقاومة لهجمات الفدية تضمن استعادة قواعد البيانات في أقل من ساعتين (RTO < 2h)." }
  }
};

function showNodeDetails(nodeKey) {
  const data = TOPO_DATA[nodeKey];
  if (!data) return;
  const lang = currentLang || "en";
  const item = data[lang] || data.en;
  const tagEl = document.getElementById("topo-d-tag");
  const ipEl = document.getElementById("topo-d-ip");
  const txtEl = document.getElementById("topo-d-txt");
  if (tagEl) tagEl.textContent = item.tag;
  if (ipEl) ipEl.textContent = item.ip;
  if (txtEl) txtEl.textContent = item.txt;
}


/* ══ VCARD DOWNLOAD ENGINE ══ */
function downloadVCard() {
  const vcard = 
`BEGIN:VCARD
VERSION:3.0
N:Lotfy;Mohamed;Sayid;;
FN:Mohamed Sayid Lotfy
ORG:Viion;IT Operations
TITLE:Infrastructure & Security Engineer | IT Operations Lead
TEL;TYPE=WORK,VOICE,CELL:+201503333155
EMAIL;TYPE=PREF,INTERNET:mohamed-sayid@outlook.com
URL:https://tefamsl.github.io/Portfolio/
X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/mohamedelsayid
NOTE:Cisco CCNA Certified (CSCO15040282) · 5 Years Enterprise IT Experience · Military Permanently Exempt
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Mohamed_Sayid_Lotfy.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ══ COMMAND PALETTE ENGINE ══ */
const CMD_ITEMS = [
  { id: "summary", nameEn: "Summary & Bio", nameAr: "الملخص المهني والنبذة", ico: "👤", action: () => goPage("summary") },
  { id: "experience", nameEn: "Work Experience", nameAr: "سجل الخبرات العملية", ico: "💼", action: () => goPage("experience") },
  { id: "skills", nameEn: "Technical Skills", nameAr: "المهارات والترسانة التقنية", ico: "⚡", action: () => goPage("skills") },
  { id: "projects", nameEn: "IT Projects", nameAr: "مشاريع البنية التحتية", ico: "🚀", action: () => goPage("projects") },
  { id: "homelab", nameEn: "Virtualization & Homelab", nameAr: "المختبر الافتراضي والسيرفرات", ico: "🖥️", action: () => goPage("homelab") },
  { id: "certgallery", nameEn: "12 Official Certificates", nameAr: "معرض الشهادات المعتمدة", ico: "📜", action: () => goPage("certgallery") },
  { id: "casestudies", nameEn: "Architecture Case Studies", nameAr: "دراسات الحالة المعمارية", ico: "💡", action: () => goPage("casestudies") },
  { id: "education", nameEn: "Education & Degrees", nameAr: "الخلفية الأكاديمية والشهادات", ico: "🎓", action: () => goPage("education") },
  { id: "achievements", nameEn: "Key Milestones & Wins", nameAr: "أبرز الإنجازات والنجاحات", ico: "🏆", action: () => goPage("achievements") },
  { id: "contact", nameEn: "Contact & Reach Out", nameAr: "تواصل معي مباشرة", ico: "📡", action: () => goPage("contact") },
  { id: "cv", nameEn: "Download Official CV (PDF)", nameAr: "تحميل السيرة الذاتية (CV)", ico: "📄", action: () => { window.open("Mohamed%20Sayid%20Lotfy%20CV.pdf", "_blank"); } },
  { id: "certs-pdf", nameEn: "Download Certificates Booklet (PDF)", nameAr: "تحميل كتيب الشهادات (PDF)", ico: "📜", action: () => { window.open("Certificates.pdf", "_blank"); } },
  { id: "vcard", nameEn: "Save Contact to Phone (.vcf)", nameAr: "حفظ جهة الاتصال في الهاتف (.vcf)", ico: "📲", action: () => downloadVCard() },
  { id: "ai", nameEn: "Ask MSL AI Assistant", nameAr: "سؤال المساعد الذكي MSL", ico: "🤖", action: () => toggleAIAssistant() },
  { id: "cli", nameEn: "Open CLI Terminal Mode", nameAr: "فتح سطر الأوامر (Terminal)", ico: "💻", action: () => openCLI() },
  { id: "lang", nameEn: "Switch Language (عربي / English)", nameAr: "تبديل اللغة (English / عربي)", ico: "🌐", action: () => toggleLang() }
];

let selectedCmdIndex = 0;

function openCmdPalette() {
  const backdrop = document.getElementById("cmd-palette-backdrop");
  const input = document.getElementById("cmd-input");
  if (!backdrop || !input) return;
  backdrop.style.display = "flex";
  input.value = "";
  selectedCmdIndex = 0;
  if (currentLang === "ar") {
    input.placeholder = "ابحث عن قسم أو أمر (مثل 'ccna', 'cv', 'skills', 'ping')...";
  } else {
    input.placeholder = "Type a command or section (e.g. 'ccna', 'cv', 'skills', 'ping')...";
  }
  renderCmdItems(CMD_ITEMS);
  setTimeout(() => input.focus(), 50);
}

function closeCmdPalette(e) {
  const backdrop = document.getElementById("cmd-palette-backdrop");
  if (backdrop) backdrop.style.display = "none";
}

function toggleCmdPalette() {
  const backdrop = document.getElementById("cmd-palette-backdrop");
  if (backdrop && backdrop.style.display === "flex") {
    closeCmdPalette();
  } else {
    openCmdPalette();
  }
}

function renderCmdItems(items) {
  const list = document.getElementById("cmd-results");
  if (!list) return;
  const isAr = (currentLang === "ar");
  if (items.length === 0) {
    list.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--txt2); font-family: var(--mono); font-size: 13.5px;">${isAr ? "لم يتم العثور على نتائج..." : "No commands found..."}</div>`;
    return;
  }
  list.innerHTML = items.map((item, idx) => `
    <div class="cmd-item ${idx === selectedCmdIndex ? "selected" : ""}" onclick="executeCmdItem('${item.id}')" onmouseenter="selectedCmdIndex = ${idx}; highlightCmdItem(${idx});">
      <div class="cmd-item-left">
        <span class="cmd-item-ico">${item.ico}</span>
        <span class="cmd-item-name">${isAr ? item.nameAr : item.nameEn}</span>
      </div>
      <span class="cmd-item-badge">${isAr ? "اختيار ↵" : "ENTER ↵"}</span>
    </div>
  `).join("");
}

function highlightCmdItem(index) {
  const items = document.querySelectorAll(".cmd-item");
  items.forEach((el, idx) => {
    if (idx === index) el.classList.add("selected");
    else el.classList.remove("selected");
  });
}

function executeCmdItem(id) {
  const item = CMD_ITEMS.find(c => c.id === id);
  if (item && item.action) {
    closeCmdPalette();
    item.action();
  }
}

function filterCmdPalette(query) {
  const q = query.trim().toLowerCase();
  selectedCmdIndex = 0;
  if (!q) {
    renderCmdItems(CMD_ITEMS);
    return;
  }
  const filtered = CMD_ITEMS.filter(item => 
    item.nameEn.toLowerCase().includes(q) || 
    item.nameAr.toLowerCase().includes(q) ||
    item.id.toLowerCase().includes(q)
  );
  renderCmdItems(filtered);
}

// Keyboard shortcuts for Command Palette
window.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
    e.preventDefault();
    toggleCmdPalette();
    return;
  }
  const backdrop = document.getElementById("cmd-palette-backdrop");
  if (backdrop && backdrop.style.display === "flex") {
    if (e.key === "Escape") {
      closeCmdPalette();
      return;
    }
    const items = document.querySelectorAll(".cmd-item");
    if (items.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedCmdIndex = (selectedCmdIndex + 1) % items.length;
      highlightCmdItem(selectedCmdIndex);
      items[selectedCmdIndex].scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedCmdIndex = (selectedCmdIndex - 1 + items.length) % items.length;
      highlightCmdItem(selectedCmdIndex);
      items[selectedCmdIndex].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      const currentSelected = items[selectedCmdIndex];
      if (currentSelected) currentSelected.click();
    }
  }
});
