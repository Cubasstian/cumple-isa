/* ==========================================================
   Nuestra historia — cada capítulo es un año.
   Para cambiar un texto, edita "nota" (lo escrito a mano en
   la foto) o "poema" (el verso al lado).
   ========================================================== */
const capitulos = [
  {
    year: "2020", titulo: "Donde empezó todo",
    desde: "#1E1F3B", hasta: "#2C2650", tinta: "claro",
    fotos: [
      { src: "IMG_20201102_202030.jpg", fecha: "Noviembre de 2020", nota: "La primera de muchas",
        poema: "Antes de ti, yo contaba los días.\nDesde ti, los días cuentan contigo." },
      { src: "IMG_20201129_202426.jpg", fecha: "Noviembre de 2020", nota: "Nuestro primer diciembre",
        poema: "Llegó diciembre lleno de luces,\npero la que brillaba eras tú." }
    ]
  },
  {
    year: "2021", titulo: "Aprendiendo a querernos",
    desde: "#2C2650", hasta: "#4A3A66", tinta: "claro",
    fotos: [
      { src: "IMG-20210104-WA0074.jpg", fecha: "Enero de 2021", nota: "Lo decía tu camiseta",
        poema: "Juntos como uno:\ndos latidos aprendiendo\nel mismo ritmo." },
      { src: "IMG_20210111_000640.jpg", fecha: "Enero de 2021", nota: "Tus manos, mi lugar seguro",
        poema: "Me sostienes la cara\ncomo quien sostiene el mundo,\ny el mundo, contigo, pesa menos." },
      { src: "IMG-20210202-WA0013.jpg", fecha: "Febrero de 2021", nota: "Tardes así",
        poema: "Si alguien me pregunta qué es la paz,\nle muestro esta foto." },
      { src: "IMG_20210308_205853.jpg", fecha: "Marzo de 2021", nota: "Tu sonrisa y mi suerte",
        poema: "Hay sonrisas que iluminan.\nLa tuya, además, me encuentra." },
      { src: "IMG_20210314_191229.jpg", fecha: "Marzo de 2021", nota: "Tú mirando el celular, yo mirándote a ti",
        poema: "No necesito otra vista:\nya elegí qué mirar\nel resto de mi vida." },
      { src: "IMG_20210522_194609.jpg", fecha: "Mayo de 2021", nota: "Bajo el neón",
        poema: "Toda la ciudad encendida\ny yo solo veía tu luz." },
      { src: "IMG_20210627_121348.jpg", fecha: "Junio de 2021", nota: "Sol, piscina y tú",
        poema: "El verano tiene tu nombre\ny el agua, tu risa." },
      { src: "IMG_20210704_112810.jpg", fecha: "Julio de 2021", nota: "Un puente y las montañas",
        poema: "Crucemos juntos todos los puentes,\nque del otro lado\nsiempre estás tú." },
      { src: "IMG-20210803-WA0126.jpg", fecha: "Agosto de 2021", nota: "Tu blusa de flores",
        poema: "Florecen los colores\nen cualquier lugar\ndonde tú te paras." },
      { src: "IMG_20211029_194513.jpg", fecha: "Octubre de 2021", nota: "Celebrándote",
        poema: "Otro año tuyo,\ny yo, otra vez,\nel hombre más afortunado." },
      { src: "IMG_20211122_215453.jpg", fecha: "Noviembre de 2021", nota: "Tú de rojo, yo sin palabras",
        poema: "Tú de rojo, yo de traje,\ny el corazón vestido de gala." }
    ]
  },
  {
    year: "2022", titulo: "Nuestros rituales",
    desde: "#4A3A66", hasta: "#8E6C90", tinta: "claro",
    fotos: [
      { src: "IMG-20220122-WA0007.jpg", fecha: "Enero de 2022", nota: "Una cena que lo decía todo",
        poema: "Lo escribimos con luces: LOVE.\nPero tus ojos ya lo decían." },
      { src: "IMG_20220128_232911_216.jpg", fecha: "Enero de 2022", nota: "Combinados sin planearlo",
        poema: "Hasta los colores\nse ponen de acuerdo\ncon nosotros." },
      { src: "IMG_20220410_141633.jpg", fecha: "Abril de 2022", nota: "Cielo abierto",
        poema: "Bajo un cielo tan grande,\nlo único inmenso eras tú." },
      { src: "ANG_0248.jpg", fecha: "2022", nota: "Entre jardines",
        poema: "Si el amor tuviera jardín,\nse parecería a este rato contigo." },
      { src: "IMG_20221026_193312.jpg", fecha: "Tu cumpleaños, 2022", nota: "Pide un deseo",
        poema: "Soplaste las velas\ny yo pedí el deseo de siempre:\ntú." },
      { src: "IMG_20221201_001623.jpg", fecha: "Diciembre de 2022", nota: "Pólvora en el cielo",
        poema: "Estallaba el cielo de diciembre\ny yo solo quería\ntu mano en la mía." },
      { src: "IMG_20221223_235634.jpg", fecha: "Diciembre de 2022", nota: "Noches de diciembre",
        poema: "Las noches de diciembre\nsaben mejor a tu lado." },
      { src: "IMG_20221231_225221.jpg", fecha: "31 de diciembre de 2022", nota: "Despidiendo el año juntos",
        poema: "Cerramos el año abrazados\npara abrir el siguiente igual." }
    ]
  },
  {
    year: "2023", titulo: "De la mano",
    desde: "#8E6C90", hasta: "#E2B3BC", tinta: "oscuro",
    fotos: [
      { src: "IMG_20230107_161652.jpg", fecha: "Enero de 2023", nota: "Paseo de enero",
        poema: "Cualquier camino es bonito\nsi lo caminas tú." },
      { src: "IMG_20230121_212556.jpg", fecha: "Enero de 2023", nota: "Flores para ti",
        poema: "Te traje flores,\npero tú siempre fuiste el ramo." },
      { src: "DSC_1975.jpg", fecha: "2023", nota: "De la mano",
        poema: "Tu mano en la mía\nes mi palabra favorita." },
      { src: "IMG_20231026_194437.jpg", fecha: "Tu cumpleaños, 2023", nota: "Un año más de ti",
        poema: "Un año más de ti\nes un año más de luz\npara todos los que te queremos." },
      { src: "IMG-20231124-WA0056.jpg", fecha: "Noviembre de 2023", nota: "Un beso sobre la ciudad",
        poema: "La ciudad entera allá abajo,\ny aquí arriba, nosotros,\nsin ninguna prisa." },
      { src: "IMG-20231207-WA0057.jpg", fecha: "Diciembre de 2023", nota: "Noche de velitas",
        poema: "Encendimos velitas,\ny cada una era un deseo\ncon tu nombre." }
    ]
  },
  {
    year: "2024", titulo: "Lo cotidiano también es amor",
    desde: "#E2B3BC", hasta: "#F3CDC4", tinta: "oscuro",
    fotos: [
      { src: "IMG-20240203-WA0076.jpg", fecha: "Febrero de 2024", nota: "Noches de salir",
        poema: "Tu cabeza cerca de mi hombro\ny el ruido del mundo, lejos." },
      { src: "IMG-20240703-WA0165(1).jpg", fecha: "Julio de 2024", nota: "Verde esperanza",
        poema: "Contigo aprendí\nque el futuro\ntiene tu cara." },
      { src: "IMG_20241020_183120.jpg", fecha: "Octubre de 2024", nota: "Sentados en la grama",
        poema: "No hacía falta nada más:\nel pasto, la tarde\ny tú." }
    ]
  },
  {
    year: "2025", titulo: "Siempre tú",
    desde: "#F3CDC4", hasta: "#F9DCCB", tinta: "oscuro",
    fotos: [
      { src: "IMG_20250920_190718_823.jpg", fecha: "Septiembre de 2025", nota: "Te sigo eligiendo",
        poema: "Pasan los años\ny te sigo eligiendo\nigual que el primer día." }
    ]
  },
  {
    year: "2026", titulo: "Hoy",
    desde: "#F9DCCB", hasta: "#FCE9D4", tinta: "oscuro",
    fotos: [
      { src: "IMG_20260104_141740.jpg", fecha: "Enero de 2026", nota: "Empezando el año",
        poema: "Año nuevo,\nla misma promesa:\nquererte bonito." },
      { src: "IMG-20260413-WA0047.jpg", fecha: "Abril de 2026", nota: "Un beso en la mejilla",
        poema: "Te beso despacio,\ncomo quien guarda un secreto\nen voz alta." },
      { src: "file_000000006d3881f9be7c688924dfdb0d.jpg", fecha: "2026", nota: "Nuestra carrera",
        poema: "Corrimos juntos esos cinco kilómetros,\ny quiero correr contigo\ntodos los que nos quedan." }
    ]
  }
];

/* Fotos optimizadas (WebP) con su tamaño, para cargar rápido y sin saltos */
const fotosWeb = {"ANG_0248.jpg": ["ANG_0248.webp", 920, 613, "#8c7f36"], "DSC_1975.jpg": ["DSC_1975.webp", 920, 518, "#797845"], "IMG-20210104-WA0074.jpg": ["IMG-20210104-WA0074.webp", 553, 737, "#88797b"], "IMG-20210202-WA0013.jpg": ["IMG-20210202-WA0013.webp", 553, 737, "#9b7078"], "IMG-20210803-WA0126.jpg": ["IMG-20210803-WA0126.webp", 589, 737, "#835f54"], "IMG-20220122-WA0007.jpg": ["IMG-20220122-WA0007.webp", 920, 688, "#55433c"], "IMG-20231124-WA0056.jpg": ["IMG-20231124-WA0056.webp", 553, 737, "#4a493c"], "IMG-20231207-WA0057.jpg": ["IMG-20231207-WA0057.webp", 553, 737, "#746c7b"], "IMG-20240203-WA0076.jpg": ["IMG-20240203-WA0076.webp", 546, 737, "#65655e"], "IMG-20240703-WA0165(1).jpg": ["IMG-20240703-WA0165.webp", 553, 737, "#929981"], "IMG-20260413-WA0047.jpg": ["IMG-20260413-WA0047.webp", 920, 690, "#9aa09a"], "IMG_20201102_202030.jpg": ["IMG_20201102_202030.webp", 415, 737, "#68564c"], "IMG_20201129_202426.jpg": ["IMG_20201129_202426.webp", 415, 737, "#766a57"], "IMG_20210111_000640.jpg": ["IMG_20210111_000640.webp", 552, 737, "#877c7e"], "IMG_20210308_205853.jpg": ["IMG_20210308_205853.webp", 552, 737, "#8f7c6c"], "IMG_20210314_191229.jpg": ["IMG_20210314_191229.webp", 920, 688, "#676c70"], "IMG_20210522_194609.jpg": ["IMG_20210522_194609.webp", 552, 737, "#7d343f"], "IMG_20210627_121348.jpg": ["IMG_20210627_121348.webp", 553, 737, "#bab49d"], "IMG_20210704_112810.jpg": ["IMG_20210704_112810.webp", 553, 737, "#7c8581"], "IMG_20211029_194513.jpg": ["IMG_20211029_194513.webp", 552, 737, "#82756d"], "IMG_20211122_215453.jpg": ["IMG_20211122_215453.webp", 491, 737, "#9b5c5d"], "IMG_20220128_232911_216.jpg": ["IMG_20220128_232911_216.webp", 214, 214, "#85664e"], "IMG_20220410_141633.jpg": ["IMG_20220410_141633.webp", 553, 737, "#99ab92"], "IMG_20221026_193312.jpg": ["IMG_20221026_193312.webp", 553, 737, "#94897d"], "IMG_20221201_001623.jpg": ["IMG_20221201_001623.webp", 552, 737, "#4f4742"], "IMG_20221223_235634.jpg": ["IMG_20221223_235634.webp", 523, 737, "#6e6154"], "IMG_20221231_225221.jpg": ["IMG_20221231_225221.webp", 552, 737, "#ae8c6b"], "IMG_20230107_161652.jpg": ["IMG_20230107_161652.webp", 165, 220, "#827a77"], "IMG_20230121_212556.jpg": ["IMG_20230121_212556.webp", 553, 737, "#6c5b57"], "IMG_20231026_194437.jpg": ["IMG_20231026_194437.webp", 553, 737, "#716e5e"], "IMG_20241020_183120.jpg": ["IMG_20241020_183120.webp", 553, 737, "#464b51"], "IMG_20250920_190718_823.jpg": ["IMG_20250920_190718_823.webp", 415, 737, "#77655e"], "IMG_20260104_141740.jpg": ["IMG_20260104_141740.webp", 553, 737, "#807064"], "file_000000006d3881f9be7c688924dfdb0d.jpg": ["file_000000006d3881f9be7c688924dfdb0d.webp", 920, 690, "#7990a5"]};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);

/* ---------- Estrellas del inicio ---------- */
(function estrellas() {
  const cielo = $(".estrellas");
  const n = window.innerWidth < 600 ? 45 : 90;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    const t = Math.random() * 2 + 1;
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${t}px;height:${t}px;opacity:${0.25 + Math.random() * 0.6};animation-delay:${Math.random() * 6}s`;
    cielo.appendChild(s);
  }
})();

/* ---------- Construir los capítulos ---------- */
const cont = $("#capitulos");
let idx = 0;
const todas = [];

capitulos.forEach((cap) => {
  const sec = document.createElement("section");
  sec.className = `capitulo tinta-${cap.tinta}`;
  sec.style.setProperty("--desde", cap.desde);
  sec.style.setProperty("--hasta", cap.hasta);
  sec.setAttribute("aria-labelledby", `y${cap.year}`);

  sec.innerHTML = `
    <div class="anio">
      <h2 class="anio-num" id="y${cap.year}">${cap.year}</h2>
      <p class="anio-titulo mano">${cap.titulo}</p>
    </div>`;

  cap.fotos.forEach((f) => {
    const lado = idx % 2 === 0 ? "izq" : "der";
    const giro = ((idx * 37) % 7 - 3) * 0.8; // giro suave, distinto en cada foto
    const [archivo, w, h, tono] = fotosWeb[f.src] || [f.src, 0, 0, "#e9e3ea"];
    const web = { archivo: encodeURIComponent(archivo), w, h };
    const forma = (w > h * 1.1 ? " horizontal" : "") + (w && Math.max(w, h) < 300 ? " chiquita" : "");
    const art = document.createElement("article");
    art.className = `recuerdo ${lado}`;
    art.innerHTML = `
      <button class="polaroid${forma}" type="button" style="--giro:${giro}deg" aria-label="Ver foto: ${f.nota}">
        <span class="pinza" aria-hidden="true"></span>
        <img style="background:${tono}" src="fotos/${web.archivo}" width="${web.w}" height="${web.h}" alt="${f.nota}, ${f.fecha.toLowerCase()}" loading="${idx < 2 ? "eager" : "lazy"}" ${idx < 2 ? 'fetchpriority="high"' : ""} decoding="async">
        <span class="nota mano">${f.nota}</span>
      </button>
      <div class="verso">
        <p class="fecha">${f.fecha}</p>
        <p class="poema">${f.poema.replace(/\n/g, "<br>")}</p>
      </div>`;
    $("img", art).addEventListener("load", programarHilo);
    $(".polaroid", art).addEventListener("click", () => abrirVisor(f));
    sec.appendChild(art);
    todas.push(art);
    idx++;
  });

  cont.appendChild(sec);
});

/* ---------- El hilo rojo ---------- */
const svg = $(".hilo");
const trazo = $(".hilo-trazo");
const sombra = $(".hilo-sombra");
const recorrido = $("#recorrido");
let largo = 0;
let tabla = []; // [y, longitud] para saber cuánto hilo mostrar

function puntos() {
  const base = recorrido.getBoundingClientRect();
  const top = base.top + window.scrollY;
  const ancho = base.width;
  const movil = window.innerWidth <= 720;
  const rel = (r) => ({ x: r.left + r.width / 2 - base.left, y: r.top + window.scrollY - top });
  const pts = [{ x: ancho / 2, y: 0 }];
  todas.forEach((art, i) => {
    const pin = $(".pinza", art).getBoundingClientRect();
    const pol = $(".polaroid", art).getBoundingClientRect();
    const p = rel(pin);
    pts.push({ x: p.x, y: p.y + pin.height * 0.55 });
    // El hilo baja escondido detrás de la foto y sale por debajo
    const fondo = pol.bottom + window.scrollY - top - 30;
    if (movil) {
      // En celular sale por el costado de la foto y rodea el verso por el borde
      const v = $(".verso", art).getBoundingClientRect();
      const lado = i % 2 === 0 ? 1 : -1; // hacia donde está la siguiente foto
      const borde = (lado > 0 ? pol.right - 16 : pol.left + 16) - base.left;
      pts.push({ x: borde, y: fondo - 40 });
      pts.push({ x: lado > 0 ? ancho - 12 : 12, y: v.top + window.scrollY - top + v.height / 2 });
    } else {
      pts.push({ x: p.x, y: fondo });
    }
  });
  // Canela: el hilo rodea el título por un costado, cuelga la etiqueta
  // y luego baja por el margen sin cruzar el texto
  const ab = window.scrollY - top;
  const cab = $(".canela-cabeza").getBoundingClientRect();
  const nom = $(".canela-nombre").getBoundingClientRect();
  pts.push({ x: movil ? ancho - 12 : Math.min(ancho - 16, nom.right - base.left + 20), y: cab.top + ab + cab.height / 2 });
  const et = $(".etiqueta .pinza").getBoundingClientRect();
  const etq = $(".etiqueta").getBoundingClientRect();
  const e = rel(et);
  pts.push({ x: e.x, y: e.y + et.height * 0.55 });
  pts.push({ x: etq.left - base.left + 20, y: etq.bottom + ab - 40 });
  const txt = $(".canela-texto").getBoundingClientRect();
  const margen = movil ? 10 : Math.max(16, txt.left - base.left - 60);
  pts.push({ x: margen, y: txt.top + ab + 10 });
  pts.push({ x: margen, y: txt.bottom + ab - 10 });
  const tit = $(".final-titulo").getBoundingClientRect();
  pts.push({ x: movil ? 10 : Math.max(16, tit.left - base.left - 60), y: tit.top + ab + tit.height / 2 });

  const carta = $(".carta .pinza").getBoundingClientRect();
  const c = rel(carta);
  pts.push({ x: c.x, y: c.y + carta.height * 0.55 });
  return pts;
}

function trazar() {
  const pts = puntos();
  const h = recorrido.scrollHeight;
  svg.setAttribute("width", recorrido.clientWidth);
  svg.setAttribute("height", h);
  svg.setAttribute("viewBox", `0 0 ${recorrido.clientWidth} ${h}`);

  // Curva suave que pasa por todos los puntos (Catmull-Rom)
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const t = 0.18;
    const c1 = { x: p1.x + (p2.x - p0.x) * t, y: p1.y + (p2.y - p0.y) * t };
    const c2 = { x: p2.x - (p3.x - p1.x) * t, y: p2.y - (p3.y - p1.y) * t };
    d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`;
  }
  trazo.setAttribute("d", d);
  sombra.setAttribute("d", d);
  largo = trazo.getTotalLength();
  trazo.style.strokeDasharray = `${largo}`;

  tabla = [];
  const pasos = 1200;
  let maxY = 0;
  for (let i = 0; i <= pasos; i++) {
    const l = (largo * i) / pasos;
    maxY = Math.max(maxY, trazo.getPointAtLength(l).y);
    tabla.push([maxY, l]);
  }
  pintar();
}

function largoEn(y) {
  if (!tabla.length) return 0;
  let lo = 0, hi = tabla.length - 1;
  if (y <= tabla[0][0]) return 0;
  if (y >= tabla[hi][0]) return largo;
  while (hi - lo > 1) {
    const m = (lo + hi) >> 1;
    tabla[m][0] < y ? (lo = m) : (hi = m);
  }
  return tabla[hi][1];
}

function pintar() {
  if (reduceMotion) { trazo.style.strokeDashoffset = 0; return; }
  const top = recorrido.getBoundingClientRect().top;
  const y = window.innerHeight * 0.62 - top;
  trazo.style.strokeDashoffset = `${largo - largoEn(y)}`;
}

let pendiente = false;
function programarHilo() {
  if (pendiente) return;
  pendiente = true;
  requestAnimationFrame(() => { pendiente = false; trazar(); });
}

let tic = false;
window.addEventListener("scroll", () => {
  if (tic) return;
  tic = true;
  requestAnimationFrame(() => { tic = false; pintar(); });
}, { passive: true });
window.addEventListener("resize", programarHilo);
window.addEventListener("load", programarHilo);
$(".canela-retrato").addEventListener("load", programarHilo);
document.fonts && document.fonts.ready.then(programarHilo);
programarHilo();

/* ---------- Visor de fotos ---------- */
const visor = $("#visor");
function abrirVisor(f) {
  $("#visor-img").src = `fotos/${encodeURIComponent((fotosWeb[f.src] || [f.src])[0])}`;
  $("#visor-img").alt = f.nota;
  $("#visor-nota").textContent = f.nota;
  $("#visor-poema").innerHTML = f.poema.replace(/\n/g, "<br>");
  visor.showModal();
}
visor.addEventListener("click", (e) => { if (e.target === visor) visor.close(); });

/* ---------- La vela ---------- */
const boton = $("#soplar");
boton.addEventListener("click", () => {
  const vela = $("#vela");
  if (vela.classList.contains("apagada")) {
    vela.classList.remove("apagada");
    boton.textContent = "Sopla la vela";
    $("#deseo").textContent = "";
    return;
  }
  vela.classList.add("apagada");
  boton.textContent = "Encenderla otra vez";
  $("#deseo").textContent = "Ahora pide un deseo. El mío se cumplió hace seis años: eres tú.";
  if (!reduceMotion) lluviaDeCorazones();
});

function lluviaDeCorazones() {
  const capa = $(".petalos");
  const colores = ["#C8102E", "#E8667A", "#F4A6B4", "#FFFFFF"];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("span");
    p.textContent = "❤";
    p.style.left = Math.random() * 100 + "vw";
    p.style.color = colores[i % colores.length];
    p.style.fontSize = 12 + Math.random() * 18 + "px";
    p.style.animationDuration = 4 + Math.random() * 4 + "s";
    p.style.animationDelay = Math.random() * 1.5 + "s";
    p.style.setProperty("--deriva", (Math.random() * 120 - 60) + "px");
    capa.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}
