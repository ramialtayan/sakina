const sections=['header','hero','bilingual','products','about','contact','footer'];
async function loadComponents(){
  const app=document.getElementById('app');
  for(const name of sections){
    const res=await fetch(`src/components/${name}.html`);
    const html=await res.text();
    const wrap=document.createElement('div'); wrap.innerHTML=html;
    while (wrap.firstChild) app.appendChild(wrap.firstChild);
  }
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
}
window.addEventListener('DOMContentLoaded', loadComponents);
