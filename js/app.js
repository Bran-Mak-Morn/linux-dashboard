const content = document.getElementById("markdown-content");
const buttons = [...document.querySelectorAll(".doc-link")];
const status = document.getElementById("document-status");

marked.setOptions({
  gfm: true,
  breaks: false
});

async function loadDocument(button) {
  const file = button.dataset.file;
  const number = button.querySelector(".doc-number").textContent;

  buttons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  status.textContent = `DOCUMENT ${number}`;
  content.innerHTML = '<p class="loading">Loading field notes...</p>';

  try {
    const response = await fetch(file, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const markdown = await response.text();
    content.innerHTML = marked.parse(markdown);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } catch (error) {
    console.error(error);

    content.innerHTML = `
      <div class="error-message">
        <strong>DOCUMENT LOAD ERROR</strong>
        <p>Soubor <code>${file}</code> se nepodařilo načíst.</p>
        <small>
          Pokud stránku otevíráš přímo jako <code>file://</code>,
          spusť ji přes lokální HTTP server.
        </small>
      </div>
    `;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => loadDocument(button));
});

loadDocument(buttons[0]);
