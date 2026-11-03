class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© ${new Date().getFullYear()} Vincent Ondeng</p>
                    <p class="my-0 pt-0"><a class="" href="mailto:vincent.ondeng@aims.ac.rw">vincent.ondeng@aims.ac.rw</a></p>
                </div>

                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                    <p class="my-0 pt-0">
                        <a href="/" aria-label="Home"><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="https://linkedin.com/in/vincentondeng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://github.com/vincentondeng" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="mr-3 fab footer-icons fa-github" aria-hidden="true"></i></a>
                        <a href="https://kaggle.com/vincentondeng" target="_blank" rel="noopener noreferrer" aria-label="Kaggle"><i class="mr-3 fab footer-icons fa-kaggle" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/vincentondeng" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><i class="footer-icons fa-brands fa-x-twitter" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component', Footer);
