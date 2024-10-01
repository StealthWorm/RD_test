function renderResult(e, t, n) {
  let a = document.getElementById('container');
  a.innerHTML = `
  <div id="result-container">
    <img
      src="assets/landing-page.png"
      alt="man-painting-wall"
      id="hero-banner" />

    <div id="card-container">
      <button id="reset-form-button" onclick="handleResetForm()"><  Gerar outro cart\xe3o</button>

      <div id="card">
        <img 
          src="assets/logo-symbol.svg" 
          alt="logo-icon" alt="Home - Resultados Digitais - Homem Criando Cart\xe3o" 
          loading="lazy"
        />

        <div class="vl"></div>

        <div id="card-info">
          <p>${e}</p>
          <p>${n}</p>
          <p>${t}</p>
        </div>
      </div>

      <button 
        class="button-primary" 
        disabled
      >
        ⬇  BAIXAR CART\xc3O 
      </button>
      <a href="https://app.rdstation.com.br/signup" target="_blank">
        Fazer um teste gr\xe1tis do RD Station Marketing →
      </a>
    </div>
  </div>
  `;
}
function handleResetForm() {
  location.reload();
}
function handleSubmit(e) {
  e.preventDefault();

  let name = document.getElementById('nome').value,
    email = document.getElementById('email').value,
    phone = document.getElementById('telefone').value;
  renderResult(name, email, phone);
}

(document.getElementById('year').innerHTML = new Date().getFullYear()),
  document.getElementById('telefone').addEventListener('input', function (e) {
    let t = e.target.value.replace(/\D/g, '');
    (t = (t = t.replace(/^(\d{2})(\d)/g, '($1) $2')).replace(
      /(\d{4})(\d{1,4})$/,
      '$1-$2'
    )),
      (e.target.value = t);
  });
