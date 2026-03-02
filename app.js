

// ============================================================================
// TACOMA NARROWS WEATHER SCENE - PART 1/3
// Weather Themes, Shaders, Cloud/Fog/Mist/Rain/Snow/Lightning/Birds/Hail
// ============================================================================

const weatherThemes = {
  "01d": {
    "background-gradient": "#4da8ff, #d9f1ff",
    "accent-color": "#a1c4fd",
    "border-color": "#e0e0e0",
    "theme-description": "Clear light stretches across the Sound, sharpening every ridge and ripple.",
    "theme-quote": "Calm, open-air weather with bright visibility and cool shade."
  },
  "01n": {
    "background-gradient": "#000814, #001d3d",
    "accent-color": "#2c3e50",
    "border-color": "#3a3a3a",
    "theme-description": "A quiet night settles over the water, stars flickering between the evergreens.",
    "theme-quote": "Still and crisp, colder than it looks with excellent visibility."
  },
  "02d": {
    "background-gradient": "#ffcf71, #87cefa",
    "accent-color": "#ffb347",
    "border-color": "#d0d0d0",
    "theme-description": "Soft clouds drift slowly, letting sunlight spill across the hills in warm bursts.",
    "theme-quote": "Bright with passing shade and a mild, steady breeze."
  },
  "02n": {
    "background-gradient": "#2c3e50, #0a2342",
    "accent-color": "#1e3c72",
    "border-color": "#4a4a4a",
    "theme-description": "Moonlight slips between scattered clouds, silvering the edges of the skyline.",
    "theme-quote": "Gentle and cool with shifting moonlight and light winds."
  },
  "03d": {
    "background-gradient": "#cfd3d6, #f7f7f7",
    "accent-color": "#95a5a6",
    "border-color": "#c0c0c0",
    "theme-description": "Gray layers drift overhead, softening the distance and quieting the landscape.",
    "theme-quote": "Muted daylight with cooler air and steady cloud cover."
  },
  "03n": {
    "background-gradient": "#2f3b45, #1b1f23",
    "accent-color": "#34495e",
    "border-color": "#555",
    "theme-description": "Clouds settle low over the city, dimming the night into a calm hush.",
    "theme-quote": "Cozy and still with stable temperatures and low wind."
  },
  "04d": {
    "background-gradient": "#9aa0a6, #6e7377",
    "accent-color": "#7f8c8d",
    "border-color": "#bdbdbd",
    "theme-description": "A thick gray sky stretches from ridge to ridge, softening every shadow.",
    "theme-quote": "Brooding but steady with cooler air and diffused light."
  },
  "04n": {
    "background-gradient": "#3a3a3a, #0f0f0f",
    "accent-color": "#2c3e50",
    "border-color": "#444",
    "theme-description": "Low clouds mute the night, turning the Sound into a quiet silhouette.",
    "theme-quote": "Still and heavy with warmer air and low visibility."
  },
  "09d": {
    "background-gradient": "#6c8ea0, #2f5d73",
    "accent-color": "#4b79a1",
    "border-color": "#a0a0a0",
    "theme-description": "Light rain drifts across the water, softening the edges of the world.",
    "theme-quote": "Gentle showers with damp roads and mild wind."
  },
  "09n": {
    "background-gradient": "#3b4652, #0d1b2a",
    "accent-color": "#5d6d7e",
    "border-color": "#666",
    "theme-description": "Rain taps softly on rooftops, glowing under scattered streetlights.",
    "theme-quote": "Soothing drizzle with slick surfaces and quiet air."
  },
  "10d": {
    "background-gradient": "#2f8f83, #1b4f72",
    "accent-color": "#43cea2",
    "border-color": "#9e9e9e",
    "theme-description": "Steady rain washes the Sound in silver, blurring the hills into watercolor.",
    "theme-quote": "Persistent rainfall with reduced visibility and cooler temps."
  },
  "10n": {
    "background-gradient": "#0a2a43, #000c1a",
    "accent-color": "#2b5876",
    "border-color": "#555",
    "theme-description": "A cool rain settles over the night, softening the glow of the city.",
    "theme-quote": "Calm but damp with slick roads and steady showers."
  },
  "11d": {
    "background-gradient": "#1e3c72, #2a5298",
    "accent-color": "#3a6073",
    "border-color": "#8c8c8c",
    "theme-description": "Thunder rolls across the Sound, shaking the stillness with sudden energy.",
    "theme-quote": "Electric and unstable with gusts, lightning, and rapid changes."
  },
  "11n": {
    "background-gradient": "#000000, #1e3c72",
    "accent-color": "#1a1a1a",
    "border-color": "#444",
    "theme-description": "Lightning flickers behind low clouds, painting the night in brief flashes.",
    "theme-quote": "Charged atmosphere with sudden wind and thunder."
  },
  "13d": {
    "background-gradient": "#dff6ff, #bde0fe",
    "accent-color": "#e0eafc",
    "border-color": "#b0b0b0",
    "theme-description": "Snow drifts quietly across the landscape, softening every sound and shape.",
    "theme-quote": "Cold and bright with slippery surfaces and reduced traction."
  },
  "13n": {
    "background-gradient": "#8fae8f, #2f3e46",
    "accent-color": "#a2ab58",
    "border-color": "#666",
    "theme-description": "Snowfall glows under streetlights, turning the night into a quiet lantern.",
    "theme-quote": "Hushed and icy with freezing patches and low visibility."
  },
  "50d": {
    "background-gradient": "#c8c8c8, #9e9e9e",
    "accent-color": "#decba4",
    "border-color": "#bdbdbd",
    "theme-description": "Fog drifts through the lowlands, softening the world into muted shapes.",
    "theme-quote": "Misty and cool with limited visibility and slower travel."
  },
  "50n": {
    "background-gradient": "#5a5a5a, #1f1f1f",
    "accent-color": "#434343",
    "border-color": "#555",
    "theme-description": "Dense fog turns the night into a soft blur of light and shadow.",
    "theme-quote": "Dreamlike but risky with very low visibility."
  }
};

function getWeatherTheme(code) {
  return weatherThemes[code] || weatherThemes["01d"];
}

function applyThemeToRoot(icon) {
  const theme = getWeatherTheme(icon);
  if (!theme) return;
  const root = document.documentElement;
  const pair = String(theme["background-gradient"] || "#111, #222").split(",").map(s => s.trim());
  const g1 = pair[0] || "#111";
  const g2 = pair[1] || "#222";
  root.style.setProperty("--background-gradient-1", g1);
  root.style.setProperty("--background-gradient-2", g2);
  root.style.setProperty("--background-gradient", `linear-gradient(160deg, ${g1} 0%, ${g2} 100%)`);
  root.style.setProperty("--accent-color", theme["accent-color"] || "#333");
  root.style.setProperty("--border-color", theme["border-color"] || "#444");
  document.body.style.background = "var(--background-gradient)";
}

// ============================================================================
// WEBGL2 CLOUD SHADERS
// ============================================================================

const CLOUD_VERTEX_SHADER = `#version 300 es
precision mediump float;
const vec2 positions[6] = vec2[6](
  vec2(-1.0,-1.0), vec2( 1.0,-1.0), vec2(-1.0, 1.0),
  vec2(-1.0, 1.0), vec2( 1.0,-1.0), vec2( 1.0, 1.0)
);
out vec2 vUv;
void main() {
  vUv = positions[gl_VertexID] * 0.5 + 0.5;
  gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
}`;

const HIGH_CLOUD_FRAG = `#version 300 es
precision highp float;
uniform float time;
uniform vec2  vp;
uniform float coverage;
uniform float nightFactor;
in  vec2 vUv;
out vec4 fragColor;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
  vec2 u=f*f*(3.0-2.0*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<6;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
  return v;
}

void main(){
  vec2 uv = vUv;
  uv.x *= vp.x / vp.y;
  uv.x -= time * 0.008;
  vec2 wind = vec2(sin(time*0.07)*0.03, cos(time*0.09)*0.015);

  float base  = fbm(uv * 2.0 + wind);
  float mid   = fbm(uv * 5.0 + wind * 1.4 + base * 0.4);
  float det   = fbm(uv * 11.0 + wind * 0.8);

  float shape = base * 0.70 + mid * 0.25 + det * 0.05;
  shape -= mix(0.68, 0.30, coverage);
  float density = smoothstep(0.0, 0.18, shape);

  float vFade = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
  density *= vFade;

  vec3 dayCol   = mix(vec3(0.95,0.96,1.0), vec3(1.0,0.98,0.94), det*0.4);
  vec3 nightCol = vec3(0.32, 0.35, 0.44);
  vec3 col = mix(dayCol, nightCol, nightFactor);
  col *= mix(1.0, 0.62, nightFactor);

  float alpha = density * mix(0.82, 0.48, nightFactor);
  fragColor = vec4(col, alpha);
}`;

const MID_CLOUD_FRAG = `#version 300 es
precision highp float;
uniform float time;
uniform vec2  vp;
uniform float coverage;
uniform float nightFactor;
in  vec2 vUv;
out vec4 fragColor;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
  vec2 u=f*f*(3.0-2.0*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<6;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
  return v;
}

void main(){
  vec2 uv = vUv;
  uv.x *= vp.x / vp.y;
  uv.x -= time * 0.012;
  vec2 wind = vec2(sin(time*0.10)*0.04, cos(time*0.08)*0.02);

  float base  = fbm(uv * 2.2 + wind);
  float mid2  = fbm(uv * 5.0 + wind * 1.5 + base * 0.5);
  float det   = fbm(uv * 12.0 + wind * 0.9);

  float shape = base * 0.70 + mid2 * 0.25 + det * 0.05;
  shape -= mix(0.65, 0.22, coverage);
  float density = smoothstep(0.0, 0.20, shape);

  float vMask = smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.48, vUv.y);
  density *= vMask;

  vec3 dayCol   = mix(vec3(0.92,0.94,0.97), vec3(0.98,0.94,0.90), det*0.3);
  vec3 nightCol = vec3(0.28, 0.31, 0.40);
  vec3 col = mix(dayCol, nightCol, nightFactor);
  col *= mix(1.0, 0.58, nightFactor);

  float alpha = density * mix(0.90, 0.56, nightFactor);
  fragColor = vec4(col, alpha);
}`;

const STORM_CLOUD_FRAG = `#version 300 es
precision highp float;
uniform float time;
uniform vec2  vp;
uniform float coverage;
uniform float nightFactor;
in  vec2 vUv;
out vec4 fragColor;

float hash(vec2 p){
  p = fract(p * vec2(251.832, 389.154));
  p += dot(p, p + 67.41);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
  vec2 u=f*f*(3.0-2.0*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<6;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
  return v;
}

void main(){
  vec2 uv = vUv;
  uv.x *= vp.x / vp.y;
  uv.x -= time * 0.010;
  vec2 wind = vec2(sin(time*0.12)*0.05, cos(time*0.07)*0.025);

  float base  = fbm(uv * 2.0 + wind);
  float mid   = fbm(uv * 4.8 + wind * 1.6 + base * 0.55);
  float det   = fbm(uv * 11.0 + wind * 1.0);

  float shape = base * 0.70 + mid * 0.25 + det * 0.05;
  shape -= mix(0.62, 0.15, coverage);
  float density = smoothstep(0.0, 0.22, shape);

  float vBot     = smoothstep(0.0, 0.12, vUv.y);
  float vTopEdge = max(mix(0.30, 0.05, coverage), 0.05);
  float vTop     = smoothstep(1.0, vTopEdge, vUv.y);
  density       *= vBot * vTop;

  vec3 thinDay    = vec3(0.80, 0.82, 0.86);
  vec3 heavyDay   = vec3(0.46, 0.48, 0.53);
  vec3 heavyNight = vec3(0.28, 0.30, 0.36);
  vec3 dayCol = mix(thinDay, heavyDay, coverage);
  vec3 col    = mix(dayCol, heavyNight, nightFactor);
  col = mix(col, vec3(0.18, 0.20, 0.24), coverage * nightFactor * 0.35);
  col *= mix(1.0, 0.72, nightFactor);

  float baseAlpha  = mix(0.50, 0.96, coverage);
  float nightAlpha = mix(0.32, 0.65, coverage);
  float alpha = clamp(density * mix(baseAlpha, nightAlpha, nightFactor), 0.0, 1.0);
  fragColor = vec4(col, alpha);
}`;

class WebGL2CloudLayer {
  constructor(canvasId, fragmentShaderSrc) {
    this.canvasId      = canvasId;
    this.fragSrc       = fragmentShaderSrc;
    this.canvas        = null;
    this.gl            = null;
    this.program       = null;
    this.startTime     = Date.now();
    this.vao           = null;
    this.uTime         = null;
    this.uVp           = null;
    this.uCoverage     = null;
    this.uNightFactor  = null;
    this.coverage      = 0;
    this.nightFactor   = 0;
    this.running       = false;
    this._resizeQueued = false;
  }

  _compile(src, type) {
    const s = this.gl.createShader(type);
    this.gl.shaderSource(s, src);
    this.gl.compileShader(s);
    if (!this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS))
      console.error(`[CloudLayer ${this.canvasId}] shader error:`, this.gl.getShaderInfoLog(s));
    return s;
  }

  _link() {
    const g = this.gl;
    this.program = g.createProgram();
    g.attachShader(this.program, this._compile(CLOUD_VERTEX_SHADER, g.VERTEX_SHADER));
    g.attachShader(this.program, this._compile(this.fragSrc, g.FRAGMENT_SHADER));
    g.linkProgram(this.program);
    if (!g.getProgramParameter(this.program, g.LINK_STATUS))
      console.error(`[CloudLayer ${this.canvasId}] link error:`, g.getProgramInfoLog(this.program));
    this.uTime        = g.getUniformLocation(this.program, 'time');
    this.uVp          = g.getUniformLocation(this.program, 'vp');
    this.uCoverage    = g.getUniformLocation(this.program, 'coverage');
    this.uNightFactor = g.getUniformLocation(this.program, 'nightFactor');
  }

  _queueResize() {
    if (this._resizeQueued) return;
    this._resizeQueued = true;
    requestAnimationFrame(() => { this._resizeQueued = false; this._resize(); });
  }

  _resize() {
    if (!this.canvas || !this.gl) return;
    const cw = this.canvas.clientWidth  || 0;
    const ch = this.canvas.clientHeight || 0;
    if (cw <= 0 || ch <= 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pw  = Math.floor(cw * dpr);
    const ph  = Math.floor(ch * dpr);
    if (this.canvas.width === pw && this.canvas.height === ph) return;
    this.canvas.width  = pw;
    this.canvas.height = ph;
    this.gl.viewport(0, 0, pw, ph);
  }

  init() {
    this.canvas = document.getElementById(this.canvasId);
    if (!this.canvas) { console.warn(`[CloudLayer] canvas #${this.canvasId} not found`); return false; }

    this.gl = this.canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false
    });
    if (!this.gl) { console.warn(`[CloudLayer] WebGL2 not available on #${this.canvasId}`); return false; }

    this.vao = this.gl.createVertexArray();
    this.gl.bindVertexArray(this.vao);
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this._link();
    this.running = true;
    requestAnimationFrame(() => { this._resize(); this._loop(); });
    window.addEventListener('resize', () => this._queueResize());
    return true;
  }

  _loop() {
    if (!this.running) return;
    const g = this.gl;
    const cssOpacity = this.canvas ? parseFloat(getComputedStyle(this.canvas).opacity || '1') : 1;
    if (cssOpacity > 0.001) {
      this._resize();
      g.clearColor(0, 0, 0, 0);
      g.clear(g.COLOR_BUFFER_BIT);
      g.useProgram(this.program);
      if (this.vao) g.bindVertexArray(this.vao);
      g.uniform1f(this.uTime,        (Date.now() - this.startTime) / 1000);
      g.uniform2fv(this.uVp,         new Float32Array([this.canvas.width, this.canvas.height]));
      g.uniform1f(this.uCoverage,    this.coverage);
      g.uniform1f(this.uNightFactor, this.nightFactor);
      g.drawArrays(g.TRIANGLES, 0, 6);
    }
    requestAnimationFrame(() => this._loop());
  }

  setCoverage(c)    { this.coverage    = Math.max(0, Math.min(1, c)); }
  setNightFactor(n) { this.nightFactor = Math.max(0, Math.min(1, n)); }
}

const multiCloudController = (() => {
  const high  = new WebGL2CloudLayer('cloud-high-canvas',  HIGH_CLOUD_FRAG);
  const mid   = new WebGL2CloudLayer('cloud-mid-canvas',   MID_CLOUD_FRAG);
  const storm = new WebGL2CloudLayer('cloud-storm-canvas', STORM_CLOUD_FRAG);

  const ICON_COVERAGE = {
    '01d': { high: 0.00, mid: 0.00, storm: 0.00 },
    '01n': { high: 0.00, mid: 0.00, storm: 0.00 },
    '02d': { high: 0.60, mid: 0.15, storm: 0.00 },
    '02n': { high: 0.55, mid: 0.12, storm: 0.00 },
    '03d': { high: 0.40, mid: 0.75, storm: 0.00 },
    '03n': { high: 0.35, mid: 0.70, storm: 0.00 },
    '04d': { high: 0.35, mid: 0.90, storm: 0.00 },
    '04n': { high: 0.30, mid: 0.85, storm: 0.00 },
    '09d': { high: 0.25, mid: 0.45, storm: 0.78 },
    '09n': { high: 0.20, mid: 0.40, storm: 0.75 },
    '10d': { high: 0.30, mid: 0.55, storm: 0.85 },
    '10n': { high: 0.25, mid: 0.50, storm: 0.80 },
    '11d': { high: 0.15, mid: 0.35, storm: 0.95 },
    '11n': { high: 0.10, mid: 0.30, storm: 0.92 },
    '13d': { high: 0.18, mid: 0.82, storm: 0.75 },
    '13n': { high: 0.15, mid: 0.78, storm: 0.70 },
    '50d': { high: 0.55, mid: 0.40, storm: 0.12 },
    '50n': { high: 0.40, mid: 0.30, storm: 0.18 }
  };

  const ICON_OPACITY = {
    '01d': { high: 0.00, mid: 0.00, storm: 0.00 },
    '01n': { high: 0.00, mid: 0.00, storm: 0.00 },
    '02d': { high: 0.75, mid: 0.30, storm: 0.00 },
    '02n': { high: 0.65, mid: 0.25, storm: 0.00 },
    '03d': { high: 0.60, mid: 0.85, storm: 0.00 },
    '03n': { high: 0.50, mid: 0.75, storm: 0.00 },
    '04d': { high: 0.55, mid: 0.95, storm: 0.00 },
    '04n': { high: 0.45, mid: 0.85, storm: 0.00 },
    '09d': { high: 0.40, mid: 0.60, storm: 0.82 },
    '09n': { high: 0.30, mid: 0.50, storm: 0.78 },
    '10d': { high: 0.45, mid: 0.70, storm: 0.88 },
    '10n': { high: 0.35, mid: 0.60, storm: 0.85 },
    '11d': { high: 0.25, mid: 0.50, storm: 0.95 },
    '11n': { high: 0.20, mid: 0.45, storm: 0.92 },
    '13d': { high: 0.25, mid: 0.88, storm: 0.80 },
    '13n': { high: 0.15, mid: 0.78, storm: 0.70 },
    '50d': { high: 0.55, mid: 0.40, storm: 0.12 },
    '50n': { high: 0.40, mid: 0.30, storm: 0.18 }
  };

  let currentNight = 0;
  const EASE = 0.08;
  const opState = {
    current: { high: 0, mid: 0, storm: 0 },
    target:  { high: 0, mid: 0, storm: 0 }
  };
  let animating = false;

  function _lerp(a, b, t) { return a + (b - a) * t; }

  function _applyOpacity() {
    const c = opState.current;
    if (high.canvas)  high.canvas.style.opacity  = c.high.toFixed(3);
    if (mid.canvas)   mid.canvas.style.opacity   = c.mid.toFixed(3);
    if (storm.canvas) storm.canvas.style.opacity = c.storm.toFixed(3);
  }

  function _tick() {
    const c = opState.current;
    const t = opState.target;
    c.high  = _lerp(c.high,  t.high,  EASE);
    c.mid   = _lerp(c.mid,   t.mid,   EASE);
    c.storm = _lerp(c.storm, t.storm, EASE);
    if (c.high  < 0.002) c.high  = 0;
    if (c.mid   < 0.002) c.mid   = 0;
    if (c.storm < 0.002) c.storm = 0;
    _applyOpacity();
    const done = (c.high === t.high) && (c.mid === t.mid) && (c.storm === t.storm);
    if (!done) requestAnimationFrame(_tick);
    else animating = false;
  }

  function _startAnim() {
    if (!animating) { animating = true; requestAnimationFrame(_tick); }
  }

  function init() {
    high.init();
    mid.init();
    storm.init();
    setByIcon('01d');
  }

  function setByIcon(icon) {
    const s   = String(icon || '01d');
    const cov = ICON_COVERAGE[s] || ICON_COVERAGE['01d'];
    const opa = ICON_OPACITY[s]  || ICON_OPACITY['01d'];
    high.setCoverage(cov.high);
    mid.setCoverage(cov.mid);
    storm.setCoverage(cov.storm);
    opState.target.high  = opa.high;
    opState.target.mid   = opa.mid;
    opState.target.storm = opa.storm;
    _startAnim();
    high.setNightFactor(currentNight);
    mid.setNightFactor(currentNight);
    storm.setNightFactor(currentNight);
  }

  function setNightFactor(v) {
    currentNight = Math.max(0, Math.min(1, v));
    high.setNightFactor(currentNight);
    mid.setNightFactor(currentNight);
    storm.setNightFactor(currentNight);
  }

  return { init, setByIcon, setNightFactor };
})();



// ============================================================================
// FOG CONTROLLER
// ============================================================================

const fogController = (() => {
  let canvas, gl, program, isVisible = false, startTime = Date.now();
  let timeLocation, resolutionLocation, vao = null, resizeQueued = false;

  const vertSrc = `#version 300 es
precision mediump float;
const vec2 positions[6]=vec2[6](vec2(-1,-1),vec2(1,-1),vec2(-1,1),vec2(-1,1),vec2(1,-1),vec2(1,1));
out vec2 vUv;
void main(){ vUv=positions[gl_VertexID]*0.5+0.5; gl_Position=vec4(positions[gl_VertexID],0,1); }`;

  const fragSrc = `#version 300 es
precision highp float;
uniform float time; uniform vec2 vp;
in vec2 vUv; out vec4 fragColor;
float fbmHash(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
float fbm(vec2 p){ float v=0.,a=0.5; for(int i=0;i<6;i++){v+=a*fbmHash(p);p*=2.;a*=0.45;} return v; }
void main(){
  vec2 p=vUv*2.-1.; p.x*=vp.x/vp.y;
  float gradient=mix(p.y*.5+.2,p.y*1.1+.8,fbm(p*0.6));
  vec2 fast=vec2(p.x*0.9,p.y-time*0.12)*4.5;
  float ns_a=fbm(fast), ns_b=.8*fbm(fast+ns_a+time*0.8)-.25;
  float ins=fbm(vec2(ns_b,ns_a)*1.3);
  float fogDensity=clamp(ins+0.6,0.,1.);
  float opacity=clamp(fogDensity*(ins-gradient+0.7)*0.65,0.,0.8);
  fragColor=vec4(0.65,0.67,0.7,opacity);
}`;

  function compileProgram(vs, fs) {
    const p=gl.createProgram(), v=gl.createShader(gl.VERTEX_SHADER), f=gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(v,vs); gl.compileShader(v); gl.attachShader(p,v);
    gl.shaderSource(f,fs); gl.compileShader(f); gl.attachShader(p,f);
    gl.linkProgram(p); return p;
  }

  function queueResize() {
    if (resizeQueued) return; resizeQueued=true;
    requestAnimationFrame(()=>{ resizeQueued=false; resize(); });
  }

  function resize() {
    if (!canvas||!gl) return;
    const cw=canvas.clientWidth||0, ch=canvas.clientHeight||0;
    if (cw<=0||ch<=0) return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.floor(cw*dpr); canvas.height=Math.floor(ch*dpr);
    gl.viewport(0,0,canvas.width,canvas.height);
  }

  function render() {
    if (!gl){ requestAnimationFrame(render); return; }
    queueResize();
    gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT);
    if (isVisible) {
      gl.useProgram(program);
      if (vao) gl.bindVertexArray(vao);
      gl.uniform1f(timeLocation,(Date.now()-startTime)/1000);
      gl.uniform2fv(resolutionLocation,new Float32Array([canvas.width,canvas.height]));
      gl.drawArrays(gl.TRIANGLES,0,6);
    }
    requestAnimationFrame(render);
  }

  function init() {
    canvas=document.getElementById("fog-canvas"); if (!canvas) return;
    gl=canvas.getContext("webgl2"); if (!gl) return;
    vao=gl.createVertexArray(); gl.bindVertexArray(vao);
    resize(); window.addEventListener("resize",queueResize);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
    program=compileProgram(vertSrc,fragSrc);
    timeLocation=gl.getUniformLocation(program,"time");
    resolutionLocation=gl.getUniformLocation(program,"vp");
    render();
  }

  function setByIcon(icon) {
    if (!gl) init(); if (!canvas) return;
    isVisible=String(icon).startsWith("50");
    canvas.style.opacity=isVisible?"0.8":"0";
  }

  return { init, setByIcon };
})();

// ============================================================================
// MIST CONTROLLER
// ============================================================================

const mistController = (() => {
  let canvas, gl, program, isVisible=false, startTime=Date.now();
  let timeLocation, resolutionLocation, vao=null, resizeQueued=false;

  const vertSrc = `#version 300 es
precision mediump float;
const vec2 positions[6]=vec2[6](vec2(-1,-1),vec2(1,-1),vec2(-1,1),vec2(-1,1),vec2(1,-1),vec2(1,1));
out vec2 vUv;
void main(){ vUv=positions[gl_VertexID]*0.5+0.5; gl_Position=vec4(positions[gl_VertexID],0,1); }`;

  const fragSrc = `#version 300 es
precision highp float;
uniform float time; uniform vec2 vp;
in vec2 vUv; out vec4 fragColor;
float rand(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);
  float a=rand(i),b=rand(i+vec2(1,0)),c=rand(i+vec2(0,1)),d=rand(i+vec2(1,1));
  vec2 u=f*f*(3.-2.*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}
void main(){
  vec2 p=vUv; p.x*=vp.x/vp.y;
  float m1=noise(vec2(p.x+time*0.02,p.y-time*0.01)*8.);
  float m2=noise(vec2(p.x-time*0.015,p.y+time*0.008)*12.);
  float alpha=smoothstep(0.3,0.7,m1*0.6+m2*0.4)*0.25;
  fragColor=vec4(0.85,0.88,0.9,alpha);
}`;

  function compileProgram(vs, fs) {
    const p=gl.createProgram(), v=gl.createShader(gl.VERTEX_SHADER), f=gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(v,vs); gl.compileShader(v); gl.attachShader(p,v);
    gl.shaderSource(f,fs); gl.compileShader(f); gl.attachShader(p,f);
    gl.linkProgram(p); return p;
  }

  function queueResize() {
    if (resizeQueued) return; resizeQueued=true;
    requestAnimationFrame(()=>{ resizeQueued=false; resize(); });
  }

  function resize() {
    if (!canvas||!gl) return;
    const cw=canvas.clientWidth||0, ch=canvas.clientHeight||0;
    if (cw<=0||ch<=0) return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.floor(cw*dpr); canvas.height=Math.floor(ch*dpr);
    gl.viewport(0,0,canvas.width,canvas.height);
  }

  function render() {
    if (!gl){ requestAnimationFrame(render); return; }
    queueResize();
    gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT);
    if (isVisible) {
      gl.useProgram(program);
      if (vao) gl.bindVertexArray(vao);
      gl.uniform1f(timeLocation,(Date.now()-startTime)/1000);
      gl.uniform2fv(resolutionLocation,new Float32Array([canvas.width,canvas.height]));
      gl.drawArrays(gl.TRIANGLES,0,6);
    }
    requestAnimationFrame(render);
  }

  function init() {
    canvas=document.getElementById("mist-canvas"); if (!canvas) return;
    gl=canvas.getContext("webgl2"); if (!gl) return;
    vao=gl.createVertexArray(); gl.bindVertexArray(vao);
    resize(); window.addEventListener("resize",queueResize);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
    program=compileProgram(vertSrc,fragSrc);
    timeLocation=gl.getUniformLocation(program,"time");
    resolutionLocation=gl.getUniformLocation(program,"vp");
    render();
  }

  function setByIcon(icon) {
    if (!gl) init(); if (!canvas) return;
    const s=String(icon);
    isVisible=s.startsWith("50")||s.startsWith("09")||s.startsWith("10")||s.startsWith("04");
    canvas.style.opacity=isVisible?"1":"0";
  }

  return { init, setByIcon };
})();

// ============================================================================
// RAIN CONTROLLER
// ============================================================================

const canvasRainController = (() => {
  let canvas, ctx, particles=[], splashes=[], isVisible=false;

  class RainParticle {
    constructor(w) {
      this.x=Math.random()*w; this.y=-10-Math.random()*100;
      this.len=6+Math.random()*3; this.speed=5+Math.random()*3;
      this.opacity=0.25+Math.random()*0.35; this.width=0.8+Math.random()*0.4;
      this.depth=Math.random();
    }
    update() { this.y+=this.speed*(0.7+this.depth*0.6); }
    draw(c) {
      c.beginPath();
      c.strokeStyle=`rgba(174,194,224,${this.opacity*(0.6+this.depth*0.4)})`;
      c.lineWidth=this.width*(0.5+this.depth*0.5); c.lineCap="round";
      c.moveTo(this.x,this.y); c.lineTo(this.x,this.y+this.len*(0.7+this.depth*0.6)); c.stroke();
    }
    isOut(h) { return this.y>h+20; }
  }

  class Splash {
    constructor(x,y) { this.x=x; this.y=y; this.radius=0.8+Math.random()*1.2; this.life=0; this.opacity=0.4+Math.random()*0.15; }
    update() { this.life++; this.radius+=0.4; this.opacity*=0.95; }
    draw(c) {
      c.beginPath(); c.strokeStyle=`rgba(255,255,255,${this.opacity})`; c.lineWidth=0.8;
      c.arc(this.x,this.y,this.radius,0,Math.PI*2); c.stroke();
    }
    isDead() { return this.opacity<0.05; }
  }

  function resize() { if (!canvas) return; canvas.width=canvas.clientWidth; canvas.height=canvas.clientHeight; }

  function render() {
    if (!ctx) { requestAnimationFrame(render); return; }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (isVisible) {
      for (let i=0;i<4;i++) particles.push(new RainParticle(canvas.width));
      particles.forEach(p=>{ p.update(); p.draw(ctx); if(p.y>canvas.height-20&&Math.random()<0.15) splashes.push(new Splash(p.x,canvas.height-5-Math.random()*15)); });
      splashes.forEach(s=>{ s.update(); s.draw(ctx); });
      particles=particles.filter(p=>!p.isOut(canvas.height));
      splashes=splashes.filter(s=>!s.isDead());
    }
    requestAnimationFrame(render);
  }

  function init() {
    canvas=document.getElementById("rain-canvas"); if (!canvas) return;
    ctx=canvas.getContext("2d"); resize(); window.addEventListener("resize",resize); render();
  }

  function setByIcon(icon) {
    if (!ctx) init(); if (!canvas) return;
    const s=String(icon);
    isVisible=s.startsWith("09")||s.startsWith("10");
    canvas.classList.toggle("active",isVisible);
    canvas.style.opacity=isVisible?"1":"0";
    if (!isVisible) { particles=[]; splashes=[]; }
  }

  return { init, setByIcon };
})();

// ============================================================================
// SNOW CONTROLLER
// ============================================================================

const snowController = (() => {
  let canvas, ctx, flakes=[], isVisible=false;

  class Snowflake {
    constructor(w,h) { this.reset(w,h); }
    reset(w,h) {
      this.radius=2+Math.random()*5;
      this.x=Math.random()*(w+400)-200; this.y=-30-Math.random()*100;
      this.speed=0.3+(this.radius/7)*0.8+Math.random()*0.5;
      this.opacity=0.3+(this.radius/7)*0.6;
    }
    update(h) { this.y+=this.speed; this.x-=0.5; return this.y<h+10; }
    draw(c) { c.fillStyle=`rgba(255,255,255,${this.opacity})`; c.beginPath(); c.arc(this.x,this.y,this.radius,0,Math.PI*2); c.fill(); }
  }

  function resize() { if (!canvas) return; canvas.width=canvas.clientWidth; canvas.height=canvas.clientHeight; }

  function animate() {
    if (isVisible&&ctx) {
      flakes.push(new Snowflake(canvas.width,canvas.height));
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (let i=flakes.length-1;i>=0;i--) {
        if (!flakes[i].update(canvas.height)) flakes.splice(i,1); else flakes[i].draw(ctx);
      }
    }
    requestAnimationFrame(animate);
  }

  function init() {
    canvas=document.getElementById("snow-canvas"); if (!canvas) return;
    ctx=canvas.getContext("2d"); resize(); window.addEventListener("resize",resize); animate();
  }

  function setByIcon(icon) {
    if (!ctx) init(); if (!canvas) return;
    isVisible=String(icon).startsWith("13");
    canvas.style.opacity=isVisible?"1":"0";
    if (!isVisible) flakes=[];
  }

  return { init, setByIcon };
})();

// ============================================================================
// LIGHTNING CONTROLLER
// ============================================================================

const lightningController = (() => {
  let canvas, ctx, bolts=[], isVisible=false, nextStrikeTime=0;

  class LightningBolt {
    constructor(w,h) {
      this.x=Math.random()*w; this.points=[[this.x,0]];
      let cy=0, cx=this.x;
      while(cy<h){ cy+=12+Math.random()*16; cx+=(Math.random()-0.5)*35; this.points.push([cx,cy]); }
      this.alpha=1; this.life=0;
    }
    update() { this.life++; this.alpha-=0.15; }
    draw(c) {
      c.strokeStyle=`rgba(200,220,255,${this.alpha})`; c.lineWidth=2.5;
      c.shadowBlur=12; c.shadowColor="rgba(255,255,255,0.9)";
      c.beginPath(); c.moveTo(this.points[0][0],this.points[0][1]);
      for(let i=1;i<this.points.length;i++) c.lineTo(this.points[i][0],this.points[i][1]);
      c.stroke(); c.shadowBlur=0;
    }
    isDead() { return this.alpha<=0; }
  }

  function resize() { if (!canvas) return; canvas.width=canvas.clientWidth; canvas.height=canvas.clientHeight; }

  function render() {
    if (!ctx) { requestAnimationFrame(render); return; }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (isVisible) {
      const now=Date.now();
      if (now>nextStrikeTime) { bolts.push(new LightningBolt(canvas.width,canvas.height)); nextStrikeTime=now+2000+Math.random()*4000; }
      bolts.forEach(b=>{ b.update(); b.draw(ctx); });
      bolts=bolts.filter(b=>!b.isDead());
    }
    requestAnimationFrame(render);
  }

  function init() {
    canvas=document.getElementById("lightning-canvas"); if (!canvas) return;
    ctx=canvas.getContext("2d"); resize(); window.addEventListener("resize",resize); render();
  }

  function setByIcon(icon) {
    if (!ctx) init(); if (!canvas) return;
    isVisible=String(icon).startsWith("11");
    canvas.style.opacity=isVisible?"1":"0";
    if (!isVisible) bolts=[];
  }

  return { init, setByIcon };
})();

// ============================================================================
// BIRDS CONTROLLER  — canvas-based background birds, setByIcon like all others
// ============================================================================

const birdsController = (() => {
  let canvas, ctx, flock=[], isVisible=false;

  // Per-icon flock target sizes. Night = 0 (birds don't fly at night).
  const FLOCK_SIZE = {
    "01d":6,"01n":0,"02d":5,"02n":0,"03d":3,"03n":0,"04d":2,"04n":0,
    "09d":1,"09n":0,"10d":0,"10n":0,"11d":0,"11n":0,"13d":0,"13n":0,
    "50d":1,"50n":0
  };
  let targetCount = 4;

  class CanvasBird {
    constructor(w, h) { this.reset(w, h); }

    reset(w, h) {
      this.depth      = 0.1 + Math.random() * 0.9;
      this.scale      = 0.4 + this.depth * 0.7;
      this.speed      = (0.3 + this.depth * 1.2) * 0.8;
      this.opacity    = 0.25 + this.depth * 0.65;
      this.x          = -60;
      this.y          = h * 0.05 + Math.random() * (h * 0.55);
      this.yDrift     = (Math.random() - 0.5) * 0.25;
      this.yBound     = this.y;
      this.wingPhase  = Math.random() * Math.PI * 2;
      this.wingSpeed  = 0.07 + Math.random() * 0.06;
      this.soarTimer  = 0;
      this.soarChance = 0.002;
    }

    update(w, h) {
      this.x += this.speed;
      if (this.soarTimer > 0) { this.soarTimer--; }
      else { this.wingPhase += this.wingSpeed; if (Math.random() < this.soarChance) this.soarTimer = 40 + Math.random() * 80; }
      this.y += this.yDrift;
      if (Math.abs(this.y - this.yBound) > 30) this.yDrift *= -1;
      return this.x < w + 80;
    }

    draw(c) {
      const s  = this.scale * 14;
      const wh = s * 0.55;
      const flapFactor = this.soarTimer > 0 ? 0 : Math.sin(this.wingPhase);
      const lift = flapFactor * wh;

      c.save();
      c.globalAlpha = this.opacity;
      c.strokeStyle = "rgba(20,22,28,0.85)";
      c.lineWidth   = Math.max(0.8, this.scale * 1.1);
      c.lineCap     = "round";

      // Left wing
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.quadraticCurveTo(this.x - s * 0.5, this.y - lift * 0.6, this.x - s, this.y - lift);
      c.stroke();

      // Right wing
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.quadraticCurveTo(this.x + s * 0.5, this.y - lift * 0.6, this.x + s, this.y - lift);
      c.stroke();

      c.restore();
    }
  }

  function resize() {
    if (!canvas) return;
    canvas.width  = canvas.clientWidth  || window.innerWidth;
    canvas.height = canvas.clientHeight || window.innerHeight;
  }

  function render() {
    if (!ctx) { requestAnimationFrame(render); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isVisible) {
      if (flock.length < targetCount && Math.random() < 0.012)
        flock.push(new CanvasBird(canvas.width, canvas.height));

      flock = flock.filter(b => {
        const alive = b.update(canvas.width, canvas.height);
        if (alive) b.draw(ctx);
        return alive;
      });
    } else {
      flock = [];
    }
    requestAnimationFrame(render);
  }

  function init() {
    canvas = document.getElementById("birds-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
    render();
  }

  function setByIcon(icon) {
    if (!ctx) init();
    if (!canvas) return;
    const s = String(icon || "01d");
    targetCount = FLOCK_SIZE[s] ?? 3;
    isVisible   = targetCount > 0;
    if (flock.length > targetCount) flock.length = targetCount;
  }

  return { init, setByIcon };
})();

// ============================================================================
// HAIL CONTROLLER  — setByIcon like all others, fires on thunderstorm (11d/11n)
// ============================================================================

const hailController = (() => {
  let canvas, ctx, pellets=[], impacts=[], isVisible=false;

  class HailPellet {
    constructor(w) {
      this.x      = Math.random() * w;
      this.y      = -8 - Math.random() * 60;
      this.radius = 2 + Math.random() * 3;
      this.speedY = 8 + Math.random() * 6;
      this.speedX = -1.5 + Math.random() * 1.5;
      this.opacity= 0.65 + Math.random() * 0.30;
    }
    update() { this.y += this.speedY; this.x += this.speedX; }
    draw(c) {
      // Body
      c.beginPath();
      c.ellipse(this.x, this.y, this.radius, this.radius * 1.2, 0, 0, Math.PI * 2);
      c.fillStyle = `rgba(210,220,235,${this.opacity})`;
      c.fill();
      // Glint
      c.beginPath();
      c.arc(this.x - this.radius * 0.25, this.y - this.radius * 0.3, this.radius * 0.28, 0, Math.PI * 2);
      c.fillStyle = `rgba(255,255,255,${this.opacity * 0.7})`;
      c.fill();
    }
    isOut(h) { return this.y > h + 10; }
  }

  class HailImpact {
    constructor(x, y, radius) {
      this.x = x; this.y = y;
      this.chips = Array.from({length:4}, () => ({
        dx: (Math.random()-0.5) * radius * 3,
        dy: -(Math.random() * radius * 2),
        r:  radius * 0.25,
        life: 0
      }));
      this.opacity = 0.7;
    }
    update() { this.opacity -= 0.08; this.chips.forEach(c=>{c.life++;}); }
    draw(c) {
      this.chips.forEach(chip=>{
        c.beginPath();
        c.arc(this.x+chip.dx, this.y+chip.dy-chip.life*0.5, chip.r, 0, Math.PI*2);
        c.fillStyle=`rgba(200,215,230,${this.opacity})`;
        c.fill();
      });
    }
    isDead() { return this.opacity <= 0; }
  }

  function resize() {
    if (!canvas) return;
    canvas.width  = canvas.clientWidth  || window.innerWidth;
    canvas.height = canvas.clientHeight || window.innerHeight;
  }

  function render() {
    if (!ctx) { requestAnimationFrame(render); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isVisible) {
      const burst = 1 + Math.round(Math.random());
      for (let i=0;i<burst;i++) pellets.push(new HailPellet(canvas.width));

      pellets.forEach(p => {
        p.update(); p.draw(ctx);
        if (p.isOut(canvas.height) && Math.random() < 0.35)
          impacts.push(new HailImpact(p.x, canvas.height - 4, p.radius));
      });

      impacts.forEach(imp=>{ imp.update(); imp.draw(ctx); });
      pellets = pellets.filter(p=>!p.isOut(canvas.height));
      impacts = impacts.filter(i=>!i.isDead());
    }
    requestAnimationFrame(render);
  }

  function init() {
    canvas = document.getElementById("hail-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
    render();
  }

  function setByIcon(icon) {
    if (!ctx) init();
    if (!canvas) return;
    isVisible = String(icon || "").startsWith("11");
    canvas.style.opacity = isVisible ? "1" : "0";
    if (!isVisible) { pellets=[]; impacts=[]; }
  }

  return { init, setByIcon };
})();

// ============================================================================
// TACOMA NARROWS WEATHER SCENE - PART 2/3
// Starfield, Bridge Controller, Sky Gradient Helpers, Environment Controller
// ============================================================================

class PixelStarfield {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.backgroundStars = [];
    this.orionStars = [];
    this.opacity = 0;
    this.targetOpacity = 0;
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.init();
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight * 0.5;
    this.init();
  }

  init() {
    this.backgroundStars = [];
    this.orionStars = [];
    for (let i=0;i<300;i++) {
      this.backgroundStars.push({
        x: Math.random()*this.canvas.width, y: Math.random()*this.canvas.height,
        size: Math.random()<0.7?1:2, opacity: 0.2+Math.random()*0.5,
        twinkleSpeed: 0.01+Math.random()*0.02, twinklePhase: Math.random()*Math.PI*2
      });
    }
    const orionCenterX = this.canvas.width*0.65;
    const orionCenterY = this.canvas.height*0.3;
    const scale = Math.min(this.canvas.width, this.canvas.height)/800;
    const orionPattern = [
      {x:-60,y:-80,size:4,  name:"Betelgeuse",color:"#ff6b4a",brightness:0.95},
      {x: 60,y:-80,size:3.5,name:"Bellatrix", color:"#b8d4ff",brightness:0.8},
      {x:-30,y:  0,size:3,  name:"Alnitak",   color:"#cad8ff",brightness:0.85},
      {x:  0,y:  0,size:3.5,name:"Alnilam",   color:"#cad8ff",brightness:0.9},
      {x: 30,y:  0,size:3,  name:"Mintaka",   color:"#cad8ff",brightness:0.85},
      {x:-50,y: 90,size:3,  name:"Saiph",     color:"#b8d4ff",brightness:0.75},
      {x: 50,y: 90,size:4,  name:"Rigel",     color:"#9bb5ff",brightness:0.9},
      {x:  0,y: 35,size:2,  name:"Sword1",    color:"#d4e0ff",brightness:0.6},
      {x:  5,y: 50,size:2.5,name:"Sword2",    color:"#d4e0ff",brightness:0.65},
      {x: -5,y: 65,size:2,  name:"Sword3",    color:"#d4e0ff",brightness:0.55}
    ];
    orionPattern.forEach(star=>{
      this.orionStars.push({
        x: orionCenterX+star.x*scale, y: orionCenterY+star.y*scale,
        size: star.size*scale, name: star.name, color: star.color,
        baseOpacity: star.brightness, opacity: star.brightness,
        twinkleSpeed: 0.005+Math.random()*0.01, twinklePhase: Math.random()*Math.PI*2
      });
    });
  }

  show() { this.targetOpacity=1; }
  hide() { this.targetOpacity=0; }

  animate = () => {
    this.opacity += (this.targetOpacity-this.opacity)*0.05;
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    if (this.opacity<0.01){ requestAnimationFrame(this.animate); return; }

    this.backgroundStars.forEach(star=>{
      star.twinklePhase+=star.twinkleSpeed;
      const alpha=star.opacity*(0.5+0.5*Math.sin(star.twinklePhase))*this.opacity;
      this.ctx.fillStyle=`rgba(255,255,255,${alpha})`;
      if (star.size===1) this.ctx.fillRect(star.x,star.y,1,1);
      else { this.ctx.beginPath(); this.ctx.arc(star.x,star.y,1,0,Math.PI*2); this.ctx.fill(); }
    });

    if (this.opacity>0.3 && this.orionStars.length>=10) {
      this.ctx.strokeStyle=`rgba(100,120,150,${0.2*this.opacity})`;
      this.ctx.lineWidth=0.5;
      this.ctx.beginPath();
      this.ctx.moveTo(this.orionStars[0].x,this.orionStars[0].y);
      this.ctx.lineTo(this.orionStars[2].x,this.orionStars[2].y);
      this.ctx.moveTo(this.orionStars[1].x,this.orionStars[1].y);
      this.ctx.lineTo(this.orionStars[4].x,this.orionStars[4].y);
      this.ctx.moveTo(this.orionStars[2].x,this.orionStars[2].y);
      this.ctx.lineTo(this.orionStars[3].x,this.orionStars[3].y);
      this.ctx.lineTo(this.orionStars[4].x,this.orionStars[4].y);
      this.ctx.moveTo(this.orionStars[2].x,this.orionStars[2].y);
      this.ctx.lineTo(this.orionStars[5].x,this.orionStars[5].y);
      this.ctx.moveTo(this.orionStars[4].x,this.orionStars[4].y);
      this.ctx.lineTo(this.orionStars[6].x,this.orionStars[6].y);
      this.ctx.moveTo(this.orionStars[3].x,this.orionStars[3].y);
      this.ctx.lineTo(this.orionStars[9].x,this.orionStars[9].y);
      this.ctx.stroke();

      this.orionStars.forEach(star=>{
        star.twinklePhase+=star.twinkleSpeed;
        const twinkle=0.85+0.15*Math.sin(star.twinklePhase);
        const alpha=star.baseOpacity*twinkle*this.opacity;
        const g=this.ctx.createRadialGradient(star.x,star.y,0,star.x,star.y,star.size*3);
        g.addColorStop(0,`${star.color}${Math.floor(alpha*255).toString(16).padStart(2,"0")}`);
        g.addColorStop(0.3,`${star.color}${Math.floor(alpha*128).toString(16).padStart(2,"0")}`);
        g.addColorStop(1,`${star.color}00`);
        this.ctx.fillStyle=g;
        this.ctx.beginPath(); this.ctx.arc(star.x,star.y,star.size*3,0,Math.PI*2); this.ctx.fill();
        this.ctx.fillStyle=`rgba(255,255,255,${alpha})`;
        this.ctx.beginPath(); this.ctx.arc(star.x,star.y,star.size,0,Math.PI*2); this.ctx.fill();
        if (star.name==="Betelgeuse") {
          const rg=this.ctx.createRadialGradient(star.x,star.y,0,star.x,star.y,star.size*4);
          rg.addColorStop(0,`rgba(255,107,74,${alpha*0.6})`);
          rg.addColorStop(0.5,`rgba(255,107,74,${alpha*0.3})`);
          rg.addColorStop(1,"rgba(255,107,74,0)");
          this.ctx.fillStyle=rg;
          this.ctx.beginPath(); this.ctx.arc(star.x,star.y,star.size*5,0,Math.PI*2); this.ctx.fill();
        }
      });
    }
    requestAnimationFrame(this.animate);
  };
}

// ============================================================================
// BRIDGE CONTROLLER
// ============================================================================

class BridgeController {
  constructor() {
    this.scene=null; this.camera=null; this.renderer=null;
    this.deckGeo=null; this.cableGeo=null; this.deckMesh=null; this.cableMesh=null;
    this.windMph=5; this.clock=null; this.mode="day";
    this.dayURL   = "https://raw.githubusercontent.com/aaronlp1312/Tacoma-Narrows-OWMthree/main/NarrowsDayFjnal.png";
    this.nightURL = "https://raw.githubusercontent.com/aaronlp1312/Tacoma-Narrows-OWMthree/main/NarrowsNightFinal.png";
    this.dayTex=null; this.nightTex=null;
    this.MAX_DPR=2.5; this.SEGMENTS=140; this.HEIGHT_BOOST=1.25; this._texAspect=null;
  }

  init() {
    const canvas=document.getElementById("bridge-canvas");
    if (!canvas||!window.THREE) return false;
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.09,1000);
    this.camera.position.z=4;
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:"high-performance"});
    const dpr=Math.min(window.devicePixelRatio||1,this.MAX_DPR);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    if (this.renderer.outputColorSpace!==undefined) this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    else if (this.renderer.outputEncoding!==undefined) this.renderer.outputEncoding=THREE.sRGBEncoding;
    this._rebuildGeometry();
    const loader=new THREE.TextureLoader();
    loader.load(this.dayURL,dayTex=>{
      this.dayTex=dayTex; this._tuneTexture(this.dayTex);
      if (dayTex?.image?.width&&dayTex?.image?.height) this._texAspect=dayTex.image.width/dayTex.image.height;
      loader.load(this.nightURL,nightTex=>{
        this.nightTex=nightTex; this._tuneTexture(this.nightTex);
        const deckMat=new THREE.MeshBasicMaterial({map:this.dayTex,transparent:true,side:THREE.DoubleSide,depthWrite:true});
        const cableMat=new THREE.MeshBasicMaterial({map:this.dayTex,transparent:true,side:THREE.DoubleSide,opacity:0.7,depthWrite:false});
        this.deckMesh=new THREE.Mesh(this.deckGeo,deckMat);
        this.cableMesh=new THREE.Mesh(this.cableGeo,cableMat);
        this.cableMesh.position.z=0.01;
        this.scene.add(this.deckMesh); this.scene.add(this.cableMesh);
        this.clock=new THREE.Clock(); this.clock.start();
        this._animate();
      });
    });
    return true;
  }

  _tuneTexture(tex) {
    if (!tex) return;
    if (tex.colorSpace!==undefined) tex.colorSpace=THREE.SRGBColorSpace;
    else if (tex.encoding!==undefined) tex.encoding=THREE.sRGBEncoding;
    tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;
    tex.minFilter=THREE.LinearMipmapLinearFilter;
    tex.magFilter=THREE.LinearFilter;
    tex.generateMipmaps=true;
    if (this.renderer&&this.renderer.capabilities?.getMaxAnisotropy)
      tex.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());
    tex.needsUpdate=true;
  }

  _computePlaneSize() {
    const z=this.camera.position.z;
    const frustumH=2*Math.tan(THREE.MathUtils.degToRad(this.camera.fov)/2)*z;
    const frustumW=frustumH*this.camera.aspect;
    return {width:frustumW, height:frustumH*this.HEIGHT_BOOST};
  }

  _rebuildGeometry() {
    const {width,height}=this._computePlaneSize();
    const newDeck=new THREE.PlaneGeometry(width,height,this.SEGMENTS,this.SEGMENTS);
    const newCable=new THREE.PlaneGeometry(width,height,this.SEGMENTS,this.SEGMENTS);
    newDeck.userData.original=new Float32Array(newDeck.attributes.position.array);
    newCable.userData.original=new Float32Array(newCable.attributes.position.array);
    if (this.deckMesh?.geometry) this.deckMesh.geometry.dispose();
    if (this.cableMesh?.geometry) this.cableMesh.geometry.dispose();
    this.deckGeo=newDeck; this.cableGeo=newCable;
    if (this.deckMesh) this.deckMesh.geometry=newDeck;
    if (this.cableMesh) this.cableMesh.geometry=newCable;
  }

  resize() {
    if (!this.renderer||!this.camera) return;
    this.camera.aspect=window.innerWidth/window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    this._rebuildGeometry();
  }

  _animate() {
    requestAnimationFrame(()=>this._animate());
    if (!this.clock||!this.deckGeo) return;
    const t=this.clock.elapsedTime;
    this._applyWindDeform(this.deckGeo,t);
    this._applyWindDeform(this.cableGeo,t);
    this.renderer?.render(this.scene,this.camera);
  }

  _applyWindDeform(geo,t) {
    const wind=Math.max(0,Number(this.windMph)||0)*0.10;
    const deckAmp=0.03, torsionAmp=0.02;
    const pos=geo.attributes.position, orig=geo.userData.original;
    for (let i=0;i<pos.count;i++) {
      const x=orig[i*3+0], y=orig[i*3+1], z=orig[i*3+2];
      const normY=y/5, normX=x/10;
      if (Math.abs(normY)<0.4) {
        const spanWeight=Math.sin(Math.PI*(normX*0.5+0.5));
        let disp=Math.sin(t*0.9)*deckAmp*wind*spanWeight;
        disp+=normY*Math.sin(t*1.3+normX*2)*torsionAmp*wind*spanWeight;
        pos.array[i*3+2]=z+disp;
      } else { pos.array[i*3+2]=z; }
    }
    pos.needsUpdate=true;
  }

  setWind(mph) { const v=Number(mph); this.windMph=Number.isFinite(v)?Math.max(0,v):0; }

  setMode(mode) {
    const m=mode==="night"?"night":"day";
    if (this.mode===m) return; this.mode=m;
    const tex=(m==="night")?(this.nightTex||this.dayTex):this.dayTex;
    if (!tex) return;
    if (this.deckMesh?.material) { this.deckMesh.material.map=tex; this.deckMesh.material.needsUpdate=true; }
    if (this.cableMesh?.material) { this.cableMesh.material.map=tex; this.cableMesh.material.needsUpdate=true; }
  }

  updateDayNight(currentTime,sunrise,sunset) {
    const now=Number(currentTime), sr=Number(sunrise), ss=Number(sunset);
    if (!Number.isFinite(now)||!Number.isFinite(sr)||!Number.isFinite(ss)) return;
    this.setMode(now>=sr&&now<ss?"day":"night");
  }
}

// ============================================================================
// SKY GRADIENT HELPERS
// ============================================================================

function clamp01(x) { return Math.max(0,Math.min(1,x)); }

function hexToRgb(hex) {
  hex=String(hex).trim().replace("#","");
  if (hex.length===3) hex=hex.split("").map(c=>c+c).join("");
  const n=parseInt(hex,16);
  return {r:(n>>16)&255, g:(n>>8)&255, b:n&255};
}

function rgbToHex({r,g,b}) {
  const toHex=v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,"0");
  return "#"+toHex(r)+toHex(g)+toHex(b);
}

function mixHex(a,b,t) {
  const A=hexToRgb(a), B=hexToRgb(b);
  return rgbToHex({r:Math.round(A.r+(B.r-A.r)*t),g:Math.round(A.g+(B.g-A.g)*t),b:Math.round(A.b+(B.b-A.b)*t)});
}

function smoothstep(edge0,edge1,x) {
  const t=clamp01((x-edge0)/(edge1-edge0));
  return t*t*(3-2*t);
}

function getDaylight(nowMs,sunriseMs,sunsetMs) {
  const fade=45*60*1000;
  const dawnStart=sunriseMs-fade, dawnEnd=sunriseMs+fade;
  const duskStart=sunsetMs-fade,  duskEnd=sunsetMs+fade;
  if (nowMs<dawnStart) return 0;
  if (nowMs<dawnEnd)   return smoothstep(dawnStart,dawnEnd,nowMs);
  if (nowMs<duskStart) return 1;
  if (nowMs<duskEnd)   return 1-smoothstep(duskStart,duskEnd,nowMs);
  return 0;
}

function getTwilight(nowMs,sunriseMs,sunsetMs) {
  const fade=65*60*1000;
  const d1=smoothstep(sunriseMs-fade,sunriseMs+fade,nowMs);
  const d2=1-smoothstep(sunsetMs-fade,sunsetMs+fade,nowMs);
  return clamp01(Math.max(1-Math.abs(d1-0.5)*2, 1-Math.abs(d2-0.5)*2));
}

function getSkyPalette(iconCode) {
  const daySky={"01d":"#A2CAFF","02d":"#D3D9DB","03d":"#909D9E","04d":"#ACC2D9","09d":"#CACACA","10d":"#E6E6E6","11d":"#353349","13d":"#FFFAFA","50d":"#E0E7EA"};
  const nightSky={"01n":"#30303d","02n":"#1d1d2a","03n":"#15151e","04n":"#070710","09n":"#080808","10n":"#121312","11n":"#09090c","13n":"#010101","50n":"#000101"};
  const s=String(iconCode||"");
  const base=daySky[s]||nightSky[s]||(s.endsWith("d")?"#A2CAFF":"#1d1d2a");
  const isThunder=s.startsWith("11"), isRain=s.startsWith("09")||s.startsWith("10");
  const isFog=s.startsWith("50"), isOvercast=s.startsWith("04")||s.startsWith("03");
  const storminess=clamp01((isThunder?0.9:0)+(isRain?0.6:0)+(isOvercast?0.35:0)+(isFog?0.25:0));
  return {base,violetGlow:"#B77CFF",violetDeep:"#6B62FF",nightDeep:"#0B1020",stormSlate:"#5E6B74",fogMilk:"#C9D4D8",storminess};
}

function computeSkyGradient(iconCode,nowMs,sunriseMs,sunsetMs) {
  const p=getSkyPalette(iconCode);
  const daylight=getDaylight(nowMs,sunriseMs,sunsetMs);
  const twilight=getTwilight(nowMs,sunriseMs,sunsetMs);
  let sky=p.base;
  sky=mixHex(sky,p.stormSlate,p.storminess*0.55);
  sky=mixHex(sky,p.nightDeep,(1-daylight)*0.70);
  const tw=clamp01(twilight*(1-p.storminess*0.85));
  sky=mixHex(sky,p.violetDeep,tw*0.20);
  if (String(iconCode).startsWith("50")) sky=mixHex(sky,p.fogMilk,0.55);
  return {top:mixHex(sky,"#000000",0.18),mid:sky,horizon:mixHex(sky,p.violetGlow,tw*0.55),daylight,twilight:tw,storminess:p.storminess};
}

// ============================================================================
// ENVIRONMENT CONTROLLER
// ============================================================================

class EnvironmentController {
  constructor() {
    this.now=new Date(); this.sunrise=null; this.sunset=null; this.icon="01d";
    this.root=document.documentElement;
    this.sun=document.getElementById("sun");
    this.moon=document.getElementById("moon");
    this.HORIZONTAL_START=10; this.HORIZONTAL_END=90;
    this.VERTICAL_HORIZON=85; this.VERTICAL_PEAK=30;
  }

  setWeather({sunrise,sunset,icon}) {
    this.sunrise=Number(sunrise)*1000; this.sunset=Number(sunset)*1000; this.icon=icon||"01d";
  }

  getSolarProgress() {
    const t=this.now.getTime();
    if (t>=this.sunrise&&t<=this.sunset) return (t-this.sunrise)/(this.sunset-this.sunrise);
    const dayLen=this.sunset-this.sunrise, nightLen=86400000-dayLen;
    if (t>this.sunset) return 1+(t-this.sunset)/nightLen;
    const midnightMs=new Date(this.now).setHours(0,0,0,0);
    return 1+(t-midnightMs+(86400000-this.sunset+midnightMs))/nightLen;
  }

  getPhase() {
    const t=this.now.getTime(), buffer=45*60*1000;
    if (t<this.sunrise-buffer) return "night";
    if (t<this.sunrise+buffer) return "dawn";
    if (t>this.sunset+buffer)  return "night";
    if (t>this.sunset-buffer)  return "dusk";
    return "day";
  }

  updateCelestials(solarT) {
    const phase=this.getPhase();
    if (phase!=="night") {
      const sunProgress=Math.max(0,Math.min(1,solarT));
      const sunX=this.HORIZONTAL_START+sunProgress*(this.HORIZONTAL_END-this.HORIZONTAL_START);
      const sunArc=Math.sin(sunProgress*Math.PI);
      const sunY=this.VERTICAL_HORIZON-sunArc*(this.VERTICAL_HORIZON-this.VERTICAL_PEAK);
      if (this.sun) {
        this.sun.style.left=`${sunX}%`; this.sun.style.top=`${sunY}%`;
        this.sun.style.transform="translate(-50%,-50%)";
        if (sunArc>0.05) { this.sun.classList.add("active"); this.sun.style.opacity=String(Math.min(1,sunArc*2)); }
        else this.sun.classList.remove("active");
      }
    } else { if (this.sun) this.sun.classList.remove("active"); }

    const moonT=(solarT+0.5)%2;
    const moonProgress=Math.max(0,Math.min(1,moonT>1?moonT-1:moonT));
    const moonX=this.HORIZONTAL_START+moonProgress*(this.HORIZONTAL_END-this.HORIZONTAL_START);
    const moonArc=Math.sin(moonProgress*Math.PI);
    const moonY=this.VERTICAL_HORIZON-moonArc*(this.VERTICAL_HORIZON-this.VERTICAL_PEAK);
    if (this.moon) {
      this.moon.style.left=`${moonX}%`; this.moon.style.top=`${moonY}%`;
      this.moon.style.transform="translate(-50%,-50%)";
      if (phase==="night"&&moonArc>0.05) { this.moon.classList.add("active"); this.moon.style.opacity=String(Math.min(0.9,moonArc*1.5)); }
      else this.moon.classList.remove("active");
    }
  }

  updateSky(solarT,scene) {
    if (!scene||!window.THREE) return;
    const nowMs=this.now.getTime();
    const g=computeSkyGradient(this.icon,nowMs,this.sunrise,this.sunset);
    const rgb=hexToRgb(g.mid);
    scene.background=new THREE.Color(rgb.r/255,rgb.g/255,rgb.b/255);
    const sunArc=Math.sin(clamp01(solarT)*Math.PI);
    this.root.style.setProperty("--sun-intensity",Math.max(0.2,Math.min(1,sunArc*1.2)).toFixed(2));
  }

  updateClouds(phase) {
    const nowMs=this.now.getTime();
    const daylight=getDaylight(nowMs,this.sunrise,this.sunset);
    multiCloudController.setNightFactor(1.0-daylight);
    const isNightish=(phase==="night"||phase==="dawn"||phase==="dusk");
    const icon=this.icon||"01d";
    const cloudiness=({"01":0.00,"02":0.25,"03":0.55,"04":0.85,"09":0.90,"10":0.95,"11":1.00,"13":0.95,"50":1.00})[icon.slice(0,2)]??0.35;
    document.documentElement.style.setProperty("--stars-opacity",(!isNightish?0:Math.max(0,1-cloudiness*1.2)).toFixed(2));
  }

  update(scene) {
    if (!this.sunrise||!this.sunset) return;
    this.now=new Date();
    const solarT=this.getSolarProgress(), phase=this.getPhase();
    this.updateCelestials(solarT);
    this.updateSky(solarT,scene);
    this.updateClouds(phase);
  }
}

// ============================================================================
// TACOMA NARROWS WEATHER SCENE - PART 3/3
// ============================================================================

class TacomaWeatherScene {
  constructor() {
    this.lat=47.2529; this.lon=-122.4443;
    this.bridgeController=new BridgeController();
    this.env=new EnvironmentController();
    this.starfield=null;
    this.apiKey="3c511677984d2f330e332b9553c15ae7";
    this.currentData={}; this.currentUnit="F";
    this.time=[]; this.searchDebounceTimer=null;
    this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.renderer=null; this.scene=null; this.camera=null;
    this.water=null; this.dirLight=null; this.ambLight=null;
    this.init();
  }

  init() {
    this.initWater();

    const starsCanvas=document.getElementById("stars-canvas");
    if (starsCanvas) { this.starfield=new PixelStarfield(starsCanvas); this.starfield.animate(); }

    fogController?.init?.();
    mistController?.init?.();
    canvasRainController?.init?.();
    snowController?.init?.();
    lightningController?.init?.();
    birdsController?.init?.();
    hailController?.init?.();

    this.bridgeController.init();
    multiCloudController.init();
    this.setupEventListeners();
    this.initializeCustomClock();
    this.getLocationAndFetch();
    window.addEventListener("resize",()=>this.onResize());
    setInterval(()=>{ if (this.env&&this.scene) this.env.update(this.scene); },1000);
  }

  initWater() {
    const canvas=document.getElementById("bay-sky-canvas");
    if (!canvas||!window.THREE||!THREE.Water) return;
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true});
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.0;
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,20000);
    this.camera.position.set(0,55,150);

    const waterGeo=new THREE.PlaneGeometry(10000,10000);
    this.water=new THREE.Water(waterGeo,{
      textureWidth:520, textureHeight:520,
      waterNormals:new THREE.TextureLoader().load("https://assets.codepen.io/13168878/scene-bay.png",t=>{t.wrapS=t.wrapT=THREE.RepeatWrapping;}),
      sunDirection:new THREE.Vector3(), sunColor:0xffe484, waterColor:0x001e3c, distortionScale:12.4
    });

    this.water.rotation.x=-Math.PI/2;
    this.scene.add(this.water);
    this.dirLight=new THREE.DirectionalLight(0xffe484,0.8);
    this.scene.add(this.dirLight);
    this.ambLight=new THREE.AmbientLight(0xffe484,0.4);
    this.scene.add(this.ambLight);

    const animate=()=>{
      requestAnimationFrame(animate);
      if (this.water?.material?.uniforms?.time)
        this.water.material.uniforms.time.value+=1.0/60.0;

      if (this.env&&this.dirLight&&this.ambLight){
        const intensity=parseFloat(getComputedStyle(document.documentElement)
          .getPropertyValue("--sun-intensity")||"0.5");
        this.dirLight.intensity=intensity*0.8;
        this.ambLight.intensity=intensity*0.4;
      }

      this.renderer?.render(this.scene,this.camera);
    };
    animate();
  }

  async reverseGeocode(lat,lon){
    try{
      const res=await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${this.apiKey}`);
      const data=await res.json();
      if(data&&data.length)
        return {city:data[0].name,state:data[0].state||"",country:data[0].country||""};
    }catch(e){ console.warn("reverseGeocode failed:",e); }
    return {city:"Unknown",state:"",country:""};
  }

  setLocationLabel({city,state,country}){
    const el=document.getElementById("location-name");
    if(!el) return;
    let label=city||"";
    if(state) label+=`, ${state}`;
    else if(country) label+=`, ${country}`;
    el.textContent=label||"Current Location";
  }

  async geocodeZip(zip){
    const res=await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${this.apiKey}`);
    const data=await res.json();
    if(data?.lat&&data?.lon) return {lat:data.lat,lon:data.lon};
    throw new Error("ZIP not found");
  }

  async geocodeCity(query){
    const res=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=1&appid=${this.apiKey}`);
    const data=await res.json();
    if(data?.length) return {lat:data[0].lat,lon:data[0].lon};
    throw new Error("City not found");
  }

  debounce(func,delay){
    return (...args)=>{
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer=setTimeout(()=>func.apply(this,args),delay);
    };
  }

  setupEventListeners(){
    const zipInput=document.getElementById("zipInput");
    const searchBtn=document.getElementById("searchBtn");
    const locationBtn=document.getElementById("locationBtn");
    const refreshBtn=document.getElementById("refreshBtn");
    const unitToggle=document.getElementById("unitToggle");

    const debouncedSearch=this.debounce(q=>this.handleSearch(q),500);

    if(zipInput){
      zipInput.addEventListener("input",e=>{
        const q=e.target.value.trim();
        if(q.length>=3) debouncedSearch(q);
      });

      zipInput.addEventListener("keypress",e=>{
        if(e.key==="Enter"){
          e.preventDefault();
          clearTimeout(this.searchDebounceTimer);
          this.handleSearch(zipInput.value.trim());
        }
      });
    }

    if(searchBtn)
      searchBtn.addEventListener("click",()=>{
        if(!zipInput) return;
        clearTimeout(this.searchDebounceTimer);
        this.handleSearch(zipInput.value.trim());
      });

    if(locationBtn) locationBtn.addEventListener("click",()=>this.getLocationAndFetch());
    if(refreshBtn)  refreshBtn.addEventListener("click",()=>this.refreshWeather());
    if(unitToggle)  unitToggle.addEventListener("click",()=>this.toggleUnit());
  }

  async handleSearch(query){
    if(!query) return;
    try{
      const isZip=/^\d{5}$/.test(query);
      const coords=isZip?await this.geocodeZip(query):await this.geocodeCity(query);
      await this.fetchWeatherData(coords.lat,coords.lon);
    }catch(e){ console.error("Search error:",e); }
  }

  async getLocationAndFetch(){
    try{
      const res=await fetch("https://ipinfo.io/json");
      const data=await res.json();
      const [lat,lon]=String(data.loc).split(",");
      await this.fetchWeatherData(parseFloat(lat),parseFloat(lon));
    }catch(e){
      console.error("Location error:",e);
      await this.fetchWeatherData(this.lat,this.lon);
    }
  }

  async fetchWeatherData(lat,lon){
    if(lat&&lon){ this.lat=lat; this.lon=lon; }

    try{
      const res=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lon}&units=imperial&appid=${this.apiKey}`);
      const data=await res.json();
      this.currentData=data;

      const place=await this.reverseGeocode(this.lat,this.lon);
      this.setLocationLabel(place);

      const iconCode=data?.current?.weather?.[0]?.icon||"01d";
      const sunriseMs=(data?.current?.sunrise||0)*1000;
      const sunsetMs=(data?.current?.sunset||0)*1000;

      this.env.setWeather({sunrise:data.current.sunrise,sunset:data.current.sunset,icon:iconCode});

      applyThemeToRoot(iconCode);

      const g=computeSkyGradient(iconCode,Date.now(),sunriseMs,sunsetMs);
      const rgb=hexToRgb(g.mid);
      if(this.scene)
        this.scene.background=new THREE.Color(rgb.r/255,rgb.g/255,rgb.b/255);

      this.env.update(this.scene);
      multiCloudController.setByIcon(iconCode);

      this.updateMainDisplay();
      this.updateUserMessage();
      this.updateHourlyForecast();
      this.updateDailyForecast();
      this.updateTiles();

      const windDir=(data.current.wind_deg>180)?1:-1;
      document.documentElement.style.setProperty("--wind-dir",String(windDir));
      this.bridgeController.setWind(data.current.wind_speed);
      this.updateTreeWind(data.current.wind_speed);

      canvasRainController?.setByIcon?.(iconCode);
      snowController?.setByIcon?.(iconCode);
      lightningController?.setByIcon?.(iconCode);
      hailController?.setByIcon?.(iconCode);
      birdsController?.setByIcon?.(iconCode);
      fogController?.setByIcon?.(iconCode);
      mistController?.setByIcon?.(iconCode);

      const phase=this.env.getPhase();
      if(this.starfield){
        if(phase==="night") this.starfield.show();
        else this.starfield.hide();
      }

      await this.loadEnvironmentData(this.lat,this.lon);

      if(window.PNWWeatherAlerts){
        window.PNWWeatherAlerts.evaluateAndRender(this.currentData);
      }

    }catch(e){ console.error("Weather fetch error:",e); }
  }

  updateMainDisplay(){
    const weather=this.currentData;
    if(!weather?.current) return;

    const current=weather.current,daily=weather.daily?.[0];
    const tempF=Math.round(current.temp), tempC=Math.round((tempF-32)*5/9);
    const feelsLikeF=Math.round(current.feels_like), feelsLikeC=Math.round((feelsLikeF-32)*5/9);

    this.safeSetText("format",`${this.currentUnit==="F"?tempF:tempC}°${this.currentUnit}`);
    this.safeSetText("description",current.weather?.[0]?.description||"");

    if(daily?.temp){
      const highF=Math.round(daily.temp.max), highC=Math.round((highF-32)*5/9);
      const lowF=Math.round(daily.temp.min),  lowC=Math.round((lowF-32)*5/9);
      this.safeSetText("temp-high",`H: ${this.currentUnit==="F"?highF:highC}°`);
      this.safeSetText("temp-low", `L: ${this.currentUnit==="F"?lowF:lowC}°`);
    }

    this.safeSetText("feels-like",`Feels like ${this.currentUnit==="F"?feelsLikeF:feelsLikeC}°${this.currentUnit}`);

    const theme=getWeatherTheme(current.weather?.[0]?.icon||"01d");
    this.safeSetText("theme-description",theme["theme-description"]||"");
    this.safeSetText("theme-quote",theme["theme-quote"]||"");
  }

  updateUserMessage(){
    const hour=new Date().getHours();
    let userName="",message="";

    if(hour<8){ userName="Hi AA-Ron"; message="get ready for bed!"; }
    else if(hour<12){ userName="Wake up AP!"; message="Have the day you deserve!"; }
    else if(hour<16){ userName="Hi Lazy bones"; message="All work no play!!!"; }
    else if(hour<20){ userName="Another day done dude"; message="Get Weed Get Comatose"; }
    else{ userName="Good Night Aaron"; message="Time to rest and recharge!"; }

    this.safeSetText("user-name",userName);
    this.safeSetText("welcome-message",message);
  }

  updateHourlyForecast(){
    const weather=this.currentData;
    if(!weather?.hourly) return;

    const hourlyGrid=document.getElementById("hourly-forecast");
    if(!hourlyGrid) return;

    hourlyGrid.innerHTML=weather.hourly.slice(0,12).map(hour=>{
      const iconCode=hour.weather?.[0]?.icon||"01d";
      const displayTemp=Math.round(this.currentUnit==="F"?hour.temp:(hour.temp-32)*5/9);
      const pop=Math.round((hour.pop||0)*100);

      return `<div class="hourly-item">
        <div class="time">${new Date(hour.dt*1000).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div>
        <i class="${this.getWiIconClass(iconCode)}"></i>
        <p class="temp-main">${displayTemp}°${this.currentUnit}</p>
        <p class="feels-like-small">Rain ${pop}%</p>
        <p>${hour.weather?.[0]?.main||""}</p>
      </div>`;
    }).join("");
  }

  updateDailyForecast(){
    const weather=this.currentData;
    if(!weather?.daily) return;

    const dailyList=document.getElementById("daily-forecast");
    if(!dailyList) return;

    const dailyData=weather.daily,tempUnit=this.currentUnit;
    const weekTemps=dailyData.slice(0,7).flatMap(d=>[d.temp.min,d.temp.max]);
    const range=Math.max(1,Math.max(...weekTemps)-Math.min(...weekTemps));

    dailyList.innerHTML=dailyData.slice(0,7).map(day=>{
      const dayMin=Math.round(tempUnit==="F"?day.temp.min:(day.temp.min-32)*5/9);
      const dayMax=Math.round(tempUnit==="F"?day.temp.max:(day.temp.max-32)*5/9);
      const widthPercent=((day.temp.max-day.temp.min)/range)*100;

      const theme=getWeatherTheme(day.weather?.[0]?.icon||"01d");

      return `<li><div class="forecast-day">
        <div class="forecast-left">
          <div class="forecast-date">${new Date(day.dt*1000).toLocaleDateString(undefined,{weekday:"short"})}</div>
          <i class="${this.getWiIconClass(day.weather?.[0]?.icon)}"></i>
          <div class="forecast-temp">${dayMax}°</div>
        </div>
        <div class="forecast-info">
          <div class="forecast-desc">${day.weather?.[0]?.description||""}</div>
          <div class="range">
            <div class="low">${dayMin}°</div>
            <div class="meter" data-state="neutral" style="--pct:${widthPercent}%"><span class="meter__fill"></span></div>
            <div class="high">${dayMax}°</div>
          </div>
          <div class="forecast-details"><span class="feels-like-info">${theme["theme-description"]||""}</span></div>
          <div class="forecast-sun">
            <i class="wi wi-sunrise"></i> ${this.formatTime(day.sunrise)}
            <i class="wi wi-sunset"></i> ${this.formatTime(day.sunset)}
          </div>
        </div>
      </div></li>`;
    }).join("");
  }

  updateTiles(){
    const weather=this.currentData;
    if(!weather?.current) return;

    const current=weather.current,daily=weather.daily?.[0];

    this.safeSetText("windSpeed",`${Math.round(current.wind_speed)} mph`);
    this.safeSetText("windGust",`${Math.round(current.wind_gust||0)} mph`);
    this.safeSetText("windDirection",`${current.wind_deg}°`);
    this.safeSetText("windCompass",this.getWindDirection(current.wind_deg));
    this.safeSetText("clouds",`${current.clouds}%`);
    this.safeSetText("humidity",`${current.humidity}%`);
    this.safeSetText("pressure",`${current.pressure} mb`);

    const dewPointF=Math.round(current.dew_point),dewPointC=Math.round((dewPointF-32)*5/9);
    this.safeSetText("dewPoint",`${this.currentUnit==="F"?dewPointF:dewPointC}°${this.currentUnit}`);

    const feelsLikeF=Math.round(current.feels_like),feelsLikeC=Math.round((feelsLikeF-32)*5/9);
    this.safeSetText("feelsLike",`${this.currentUnit==="F"?feelsLikeF:feelsLikeC}°${this.currentUnit}`);

    this.safeSetText("uvIndex",`${current.uvi}`);
    this.safeSetText("sunrise",this.formatTime(current.sunrise));
    this.safeSetText("sunset",this.formatTime(current.sunset));
    this.safeSetText("dayLength",this.calculateDayLength(current.sunrise,current.sunset));
    this.safeSetText("season",this.getSeason());

    if(daily?.temp){
      this.safeSetText("rainChance",`${Math.round((daily.pop||0)*100)}%`);
      this.safeSetText("moonPhaseName",this.getMoonPhaseName(daily.moon_phase));
      this.safeSetText("moonPhaseLabel",this.getMoonPhaseName(daily.moon_phase));

      const highF=Math.round(daily.temp.max),highC=Math.round((highF-32)*5/9);
      const lowF=Math.round(daily.temp.min), lowC=Math.round((lowF-32)*5/9);

      this.safeSetText("tempHigh",`${this.currentUnit==="F"?highF:highC}°${this.currentUnit}`);
      this.safeSetText("tempLow",`${this.currentUnit==="F"?lowF:lowC}°${this.currentUnit}`);

      this.safeSetText("nightLength",this.calculateNightLength(current.sunrise,current.sunset));

      if(daily.moonrise&&daily.moonset){
        this.safeSetText("moonrise",this.formatTime(daily.moonrise));
        this.safeSetText("moonset",this.formatTime(daily.moonset));
      }
    }
  }

  async loadEnvironmentData(lat,lon){
    try{
      const current=this.currentData?.current;
      if(current){
        this.updateUVIText(current.uvi);
        this.updateVisibilityText(current.visibility);
      }

      const pollutionRes=await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
      if(!pollutionRes.ok) throw new Error(`Pollution API ${pollutionRes.status}`);

      this.updateAirQualityText(await pollutionRes.json());

    }catch(err){ console.error("Environment data load failed:",err); }
  }

  updateUVIText(uvi){
    if(!Number.isFinite(uvi)) return;
    let label,message;

    if(uvi<=2){label="Low";message="Safe to be outside.";}
    else if(uvi<=5){label="Moderate";message="Sunglasses recommended.";}
    else if(uvi<=7){label="High";message="Use SPF 30+ and seek shade.";}
    else if(uvi<=10){label="Very High";message="Cover up and avoid peak sun.";}
    else{label="Extreme";message="Avoid going out unless essential.";}

    this.safeSetText("uvIndex",`${uvi}`);
    this.safeSetText("uv-level",`${uvi} – ${label}`);
    this.safeSetText("uv-summary",`UV is ${label.toLowerCase()}. ${message}`);

    const uvFill=document.getElementById("uvMeterFill");
    if(uvFill) uvFill.style.width=`${Math.min(100,(uvi/11)*100).toFixed(1)}%`;
  }

  updateVisibilityText(visMeters){
    if(!Number.isFinite(visMeters)) return;

    const miles=visMeters/1609.34;
    let label,message;

    if(miles>=6){label="Excellent";message="Clear skies and long-distance views.";}
    else if(miles>=3){label="Good";message="Minor haze possible.";}
    else if(miles>=1){label="Fair";message="Light fog or haze present.";}
    else{label="Poor";message="Severely reduced visibility — drive carefully.";}

    this.safeSetText("visibility",`${miles.toFixed(1)} mi`);
    this.safeSetText("visibility-level",`${miles.toFixed(1)} mi – ${label}`);
    this.safeSetText("visibility-summary",message);
  }

  updateAirQualityText(pollution){
    const row=pollution?.list?.[0];
    if(!row?.main||!row?.components) return;

    const aqi=row.main.aqi;
    const label=(["Good","Fair","Moderate","Poor","Very Poor"])[aqi-1]||"Unknown";

    this.safeSetText("air-quality-level",`AQI ${aqi} – ${label}`);
    this.safeSetText("air-quality-summary",this.getPollutionHealthSummary(aqi));

    const aqiFill=document.getElementById("air-quality-meter-fill");
    if(aqiFill) aqiFill.style.width=`${(((aqi-1)/4)*100).toFixed(1)}%`;

    const worst=this.getWorstPollutant(row.components);

    this.safeSetText("pollution-level",`${worst.label}: ${worst.value.toFixed(1)} µg/m³`);
    this.safeSetText("pollution-summary",`Primary pollutant right now: ${worst.label}.`);

    const pollFill=document.getElementById("pollution-meter-fill");
    if(pollFill) pollFill.style.width=`${Math.min(100,(worst.value/worst.max)*100).toFixed(1)}%`;
  }

  getWorstPollutant(comp){
    const pollutants=[
      {label:"PM2.5",value:comp.pm2_5||0,max:75},
      {label:"PM10",value:comp.pm10||0,max:150},
      {label:"NO₂",value:comp.no2||0,max:400},
      {label:"O₃",value:comp.o3||0,max:200},
      {label:"CO",value:comp.co||0,max:15},
      {label:"SO₂",value:comp.so2||0,max:350}
    ];

    let worst=pollutants[0],highest=-Infinity;

    pollutants.forEach(p=>{
      const pct=(p.value/p.max)*100;
      if(pct>highest){highest=pct;worst=p;}
    });

    return worst;
  }

  getPollutionHealthSummary(aqi){
    return ([
      "Air quality is excellent. Ideal for outdoor activity.",
      "Air quality is good. No health impacts expected.",
      "Moderate air quality. Sensitive groups should take care.",
      "Poor air quality. Limit prolonged outdoor exposure.",
      "Very poor air quality. Stay indoors if possible."
    ])[aqi-1]||"Air quality information unavailable.";
  }

  calculateNightLength(sunrise,sunset){
    const dayMs=(sunset-sunrise)*1000,nightMs=86400000-dayMs;
    return `${Math.floor(nightMs/3600000)}h ${Math.floor((nightMs%3600000)/60000)}m`;
  }

  initializeCustomClock(){ this.updateCustomClock(); }

  get timeAsObject(){ const d=new Date(); return {h:d.getHours(),m:d.getMinutes()}; }

  get timeInWords(){
    let {h}=this.timeAsObject;
    const {m}=this.timeAsObject;

    if(h>12) h-=12;
    else if(h===0) h=12;

    const nums={_1:"one",_2:"two",_3:"three",_4:"four",_5:"five",_6:"six",_7:"seven",_8:"eight",_9:"nine",_10:"ten",_11:"eleven",_12:"twelve",_13:"thirteen",_14:"fourteen",_15:"fifteen",_16:"sixteen",_17:"seventeen",_18:"eighteen",_19:"nineteen",_20:"twenty",_30:"thirty",_40:"forty",_50:"fifty"};

    const hour=nums[`_${h}`];
    let nextH=h+1;
    if(nextH>12) nextH-=12;

    const nextHour=nums[`_${nextH}`];

    if(m===0) return `${hour} o'clock`;
    if(m===15) return `quarter past ${hour}`;
    if(m===30) return `half past ${hour}`;
    if(m===45) return `quarter to ${nextHour}`;

    if(m<30){
      let min=nums[`_${m}`];
      if(!min&&m>20){
        const d=`${m}`.padStart(2,"0");
        min=`${nums[`_${parseInt(d[0])}0`]}-${nums[`_${parseInt(d[1])}`]}`;
      }
      return `${min} minutes past ${hour}`;
    }

    const left=60-m;
    let min=nums[`_${left}`];

    if(!min&&left>20){
      const d=`${left}`.padStart(2,"0");
      min=`${nums[`_${parseInt(d[0])}0`]}-${nums[`_${parseInt(d[1])}`]}`;
    }

    return `${min} minutes to ${nextHour}`;
  }

  updateCustomClock(){
    try{
      const flyInClass="clock__word--fade-fly-in";
      const time=this.timeInWords.split(" ");

      if(time.indexOf("half")>-1) time.splice(1,0,"");

      const timeWordEls=document.querySelectorAll(".clock__word");

      if(!timeWordEls||timeWordEls.length===0){
        setTimeout(()=>this.updateCustomClock(),1000);
        return;
      }

      for(let i=0;i<timeWordEls.length;++i){
        const wordEl=timeWordEls[i];
        if(!wordEl) continue;

        wordEl.innerText=time[i]||"";

        if(time[i]!==this.time[i]) wordEl.classList.add(flyInClass);
        else wordEl.classList.remove(flyInClass);
      }

      this.time=time;

      const now=new Date();
      this.safeSetText("date",`${this.dayNames[now.getDay()]}, ${this.monthNames[now.getMonth()]} ${now.getDate()}`);

      clearTimeout(this.timeUpdateLoop);
      this.timeUpdateLoop=setTimeout(()=>this.updateCustomClock(),1000);

    }catch(error){
      console.error("Clock update error:",error);
      setTimeout(()=>this.updateCustomClock(),5000);
    }
  }

  getSeason(date=new Date()){
    const y=date.getFullYear();
    const s={spring:new Date(y,2,20),summer:new Date(y,5,21),autumn:new Date(y,8,22),winter:new Date(y,11,21)};

    if(date>=s.winter||date<s.spring) return "Winter";
    if(date>=s.spring&&date<s.summer) return "Spring";
    if(date>=s.summer&&date<s.autumn) return "Summer";
    return "Autumn";
  }

  calculateDayLength(sunrise,sunset){
    const diff=(sunset-sunrise)*1000;
    return `${Math.floor(diff/3600000)}h ${Math.floor((diff%3600000)/60000)}m`;
  }

  getMoonPhaseName(phase){
    if(phase===0||phase===1) return "New Moon";
    if(phase<0.25) return "Waxing Crescent";
    if(phase===0.25) return "First Quarter";
    if(phase<0.5) return "Waxing Gibbous";
    if(phase===0.5) return "Full Moon";
    if(phase<0.75) return "Waning Gibbous";
    if(phase===0.75) return "Last Quarter";
    return "Waning Crescent";
  }

  getWindDirection(deg){
    return ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round(deg/22.5)%16];
  }

  getWiIconClass(icon){
    const map={"01d":"wi-day-sunny","01n":"wi-night-clear","02d":"wi-day-cloudy","02n":"wi-night-alt-cloudy","03d":"wi-cloud","03n":"wi-cloud","04d":"wi-cloudy","04n":"wi-cloudy","09d":"wi-showers","09n":"wi-showers","10d":"wi-day-rain","10n":"wi-night-alt-rain","11d":"wi-thunderstorm","11n":"wi-thunderstorm","13d":"wi-snow","13n":"wi-snow","50d":"wi-fog","50n":"wi-fog"};
    return `wi ${map[String(icon)]||"wi-day-sunny"}`;
  }

  formatTime(timestamp){
    return new Date(timestamp*1000).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
  }

  updateTreeWind(windSpeed){
    const root=document.documentElement;
    const windFactor=Math.min((Number(windSpeed)||0)/30,2);

    const swayLeft=-2*(1+windFactor);
    const swayRight=2*(1+windFactor);
    const swayDuration=Math.max(2,4-windFactor*1.5);
    const branchDuration=Math.max(1.5,2.5-windFactor);
    const branchX=-3*(1+windFactor*0.5);
    const branchXRight=3*(1+windFactor*0.5);
    const branchLeft=-1*(1+windFactor*0.8);
    const branchRight=1*(1+windFactor*0.8);

    root.style.setProperty("--sway-left",swayLeft+"deg");
    root.style.setProperty("--sway-right",swayRight+"deg");
    root.style.setProperty("--sway-duration",swayDuration+"s");
    root.style.setProperty("--branch-duration",branchDuration+"s");
    root.style.setProperty("--branch-x",branchX+"px");
    root.style.setProperty("--branch-x-right",branchXRight+"px");
    root.style.setProperty("--branch-left",branchLeft+"deg");
    root.style.setProperty("--branch-right",branchRight+"deg");
  }

  toggleUnit(){
    this.currentUnit=this.currentUnit==="F"?"C":"F";
    this.updateMainDisplay();
    this.updateHourlyForecast();
    this.updateDailyForecast();
    this.updateTiles();
  }

  refreshWeather(){ this.fetchWeatherData(this.lat,this.lon); }

  safeSetText(id,text){
    const el=document.getElementById(id);
    if(el) el.textContent=text;
  }

  onResize(){
    if(this.camera&&this.renderer){
      this.camera.aspect=window.innerWidth/window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth,window.innerHeight);
    }
    this.bridgeController?.resize?.();
    this.starfield?.resize?.();
  }
}

window.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
    if(typeof THREE==="undefined"){
      console.error("Three.js failed to load");
      return;
    }
    window.TacomaWeatherScene=new TacomaWeatherScene();
  },300);
});