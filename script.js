const toggle=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.links');
if(toggle&&navigation){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);});document.addEventListener('keydown',e=>{if(e.key==='Escape'){toggle.setAttribute('aria-expanded','false');navigation.classList.remove('is-open');}});}
const buttons=document.querySelectorAll('[data-period]');
const papers=[...document.querySelectorAll('.publications li')];
const counter=document.getElementById('paper-count');
if(counter){function filter(period){let count=0;papers.forEach(p=>{const year=Number(p.dataset.year);const show=period==='all'||(period==='recent'?year>=2024:year<2024);p.hidden=!show;if(show)count++;});buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.period===period)));counter.textContent=document.documentElement.lang==='en'?`${count} publications`:`共 ${count} 篇论文`;}
buttons.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.period)));filter('all');}
