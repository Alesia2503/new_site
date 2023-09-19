const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const oGallery = document.querySelector('.gallery');
oGallery.addEventListener('click', function(ev) {
  if (window.matchMedia('(max-width: 525px)').matches) {return false;};
  if (ev.target.tagName != 'IMG') { return false; };
  let oTarget = ev.target, nWidth, nHeight, nRatio = oTarget.offsetWidth / oTarget.offsetHeight;
  let oBig = this.appendChild(document.createElement('DIV'));
  oBig.style.position = `absolute`;
  oBig.style.top = `${oTarget.offsetTop}px`; oBig.style.left = `${oTarget.offsetLeft}px`;
  oBig.style.width = `${oTarget.offsetWidth}px`; oBig.style.height = `${oTarget.offsetHeight}px`;
  if (this.offsetHeight < this.offsetWidth) {
    nHeight = this.offsetHeight; nWidth = nHeight * nRatio;
  } else {
    nWidth = this.offsetWidth; nHeight = nWidth / nRatio;
  };
  oBig.style.background = `center / 100% 100% no-repeat url('${oTarget.currentSrc}')`;
  oBig.insertAdjacentHTML('beforeend', '<div class="close">×</div>');
  oBig.addEventListener('transitionend', function() { this.querySelector('.close').style.opacity = 1; });
  oBig.addEventListener('click', function(ev) {
    ev.stopPropagation();
    this.addEventListener('transitionend', function() { this.remove(); });
    this.style.transition = `.5s ease-in`;
    this.style.height = this.style.width = `0px`;
  oGallery.classList.toggle('show', false);
  });
  oBig.classList.toggle('active');
  oBig.style.width = `${nWidth / 1.3}px`; oBig.style.height = `${nHeight / 1.3}px`;
  oBig.style.top = oBig.style.left = `50%`;
  oBig.style.transform = `translate(-50%, -50%) rotate(1turn)`;
  oGallery.classList.toggle('show', true);
});