const current=location.pathname.split('/').pop()||'index.html';
const isHome=current==='index.html';
document.body.classList.toggle('home-page',isHome);
const wa='https://wa.me/5493416107230';
document.querySelector('#header').innerHTML=`<header>${isHome ? '' : `<a class="brand" href="index.html" aria-label="Mendoza Construcciones, inicio"><img src="assets/logo.png" alt="Mendoza Construcciones"></a>`}<button class="menu" aria-expanded="false" aria-controls="nav">Menú</button><nav id="nav"><a href="index.html" class="${current==='index.html'?'active':''}">Inicio</a><a href="servicios.html" class="${current==='servicios.html'?'active':''}">Servicios</a><a href="contacto.html" class="${current==='contacto.html'?'active':''}">Contacto</a><a class="nav-cta" href="${wa}" target="_blank" rel="noopener">Hablemos de tu proyecto ↗</a></nav></header>`;
document.querySelector('#footer').innerHTML=`<footer class="footer"><div class="footer-top"><div><a href="index.html"><img src="assets/logo.png" alt="Mendoza Construcciones"></a><p>Ideas que toman forma.<br>Espacios pensados para vos.</p></div><div><h4>Zona de atención</h4><div class="footer-links"><a href="https://www.google.com/maps/search/?api=1&query=Centro+de+Rosario+Santa+Fe" target="_blank" rel="noopener">Rosario, Santa Fe<br>Centro y alrededores</a><a href="tel:+5493416107230">341 610-7230</a><a href="https://www.instagram.com/mendoza_contrucciones.1/" target="_blank" rel="noopener">Instagram ↗</a></div></div><div><h4>Explorá</h4><div class="footer-links"><a href="index.html">Inicio</a><a href="servicios.html">Servicios</a><a href="contacto.html">Contacto</a></div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Mendoza Construcciones. Todos los derechos reservados.</span><span>Diseñado por <strong>NG Software.</strong></span></div></footer><a class="whatsapp" href="${wa}?text=Hola%20Mendoza Construcciones%2C%20quiero%20consultar%20por%20un%20proyecto." target="_blank" rel="noopener" aria-label="Consultar por WhatsApp"><svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.1 15.1 0 1 0 16 .8zm0 27.6a12.4 12.4 0 0 1-6.3-1.7l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.5 12.5 0 1 1 16 28.4zm6.9-9.4c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.8-.3-.8-.6-.6-.9-.7h-.8c-.3 0-.7.1-1 .5s-1.3 1.2-1.3 3 .1 3.5 2.6 6.5c2.5 3 5.4 4.4 7.4 4.8 2 .4 3.4-.4 4-1.2.5-.8.5-1.6.4-1.8-.1-.2-.3-.3-.7-.5z"/></svg></a>`;
document.querySelector('.menu').addEventListener('click',e=>{const open=document.querySelector('nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
document.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const message=`Hola Mendoza Construcciones, soy ${d.get('nombre')}.\nEmail: ${d.get('email')}\nServicio: ${d.get('servicio')}\n\n${d.get('mensaje')}`;location.href=wa+'?text='+encodeURIComponent(message)});

if(isHome){
 const loader=document.createElement('div');
 loader.className='page-loader';
 loader.setAttribute('role','status');
 loader.setAttribute('aria-label','Cargando Mendoza Construcciones');
 loader.innerHTML='<img src="assets/logo.png" alt="Mendoza Construcciones"><span class="loader-track" aria-hidden="true"></span>';
 document.body.prepend(loader);
 const started=performance.now();
 let dismissed=false;
 const dismiss=()=>{if(dismissed)return;dismissed=true;setTimeout(()=>{loader.classList.add('is-loaded');setTimeout(()=>loader.remove(),500)},Math.max(0,800-(performance.now()-started)))};
 const hero=new Image();hero.src='assets/hero-mendoza.png';
 const ready=hero.decode ? hero.decode().catch(()=>{}) : new Promise(resolve=>{hero.onload=hero.onerror=resolve});
 ready.then(dismiss);setTimeout(dismiss,4000);
}
const menuButton=document.querySelector('.menu');
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>{document.querySelector('nav').classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('nav').classList.remove('open');menuButton.setAttribute('aria-expanded','false')}});
