const sections = ['header','hero','bilingual','products','about','contact','footer'];
async function loadComponents() {
  const app = document.getElementById('app');
  for (const name of sections) {
    const res = await fetch(`/src/components/${name}.html`);
    const html = await res.text();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    while (wrapper.firstChild) app.appendChild(wrapper.firstChild);
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) { e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
    });
  });
}
window.addEventListener('DOMContentLoaded', loadComponents);
