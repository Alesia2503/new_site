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




(function()
{
  'use strict';
  if (window.matchMedia('(max-width: 525px)').matches) {return false;};
  const imgBg = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(imgBg);
  imgBg.style = 'background-color: rgba(48, 48, 48, 0.6); position: fixed; top: 0px; left: 0px; width: 100%; z-index: 1';
  imgBg.hidden = true;
  fillBg(); 
  window.addEventListener('resize', fillBg);
  function fillBg()
  {
    imgBg.style.height = (document.documentElement.clientHeight + 100) + 'px';
  }
  
  let bigImgageScreenFraction;
  if (window.matchMedia('(max-width: 1080px)').matches) 
  {
    bigImgageScreenFraction = 0.8;
  }
  else 
  {
    bigImgageScreenFraction = 0.7;
  }
  let placeholder = document.createElement('img');
  document.querySelectorAll('img[scalable]').forEach((img) =>
  {
    const smallSize = img.getAttribute('scalable');
    let defaultStyle = `max-width: ${smallSize}; max-height: ${smallSize}`;
    img.style = defaultStyle;
    let isGoingToSmall = false;
    img.addEventListener('click', () => 
    {  if (window.matchMedia('(max-width: 770px)').matches) {return false;};
      if (img.getAttribute('is-big') === 'true') 
      {
        let coords = placeholder.getBoundingClientRect();
        img.style = `${defaultStyle}; position: fixed; left: ${coords.left}px; top: ${coords.top}px`;
        img.setAttribute('is-big', false);
        imgBg.hidden = true;
        isGoingToSmall = true;
      }
      else 
      {
        imgBg.hidden = false;
        img.setAttribute('is-big', true);
        placeholder.hidden = false;
        doImageBig(img);
      }
    });
    img.addEventListener('transitionend', () =>
    {
      if (isGoingToSmall) 
      {
        img.style = defaultStyle;
        isGoingToSmall = false;
        placeholder.hidden = true;
      }
    }); 
    window.addEventListener('resize', () => 
    {
      if (img.getAttribute('is-big') === 'true') doImageBig(img);
    });
  });
  function doImageBig(img)
  {
    let screenHeight = document.documentElement.clientHeight;
    let screenWidth = document.documentElement.clientWidth;
    let imgWidth = img.width;
    let imgHeight = img.height;
    let bigImgHeight = Math.round(screenHeight * bigImgageScreenFraction);
    let bigImgWidth = Math.round(screenWidth * bigImgageScreenFraction);
    let ratio = imgWidth / imgHeight
    let newWidth = Math.round(bigImgHeight * ratio);
    if (newWidth < bigImgWidth)
    {
      bigImgWidth = newWidth;
    }
    else
    {
      bigImgHeight = Math.round(bigImgWidth / ratio);
    }
    let left = Math.round(0.5 * (screenWidth - bigImgWidth));
    let top = Math.round(0.5 * (screenHeight - bigImgHeight));
    img.style = `max-width: ${bigImgWidth}px; max-height: ${bigImgHeight}px; left: ${left}px; top: ${top}px; position: fixed; z-index: 2`;
  }
})();



document.querySelector('.header_content-btn').onclick = function() {
  document.querySelector('.header_p').hidden = !document.querySelector('.header_p').hidden
}



let tooltipElem;
    document.onmouseover = function(e) {
        let target = e.target
        let tooltipHtml = target.dataset.tooltip
        if(!tooltipHtml) return
        tooltipElem = document.createElement('div')
        tooltipElem.className = "tooltip"
        tooltipElem.innerHTML = tooltipHtml
        document.querySelector('.contact_form').append(tooltipElem)
        let coords = target.getBoundingClientRect()
        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2
        if(left < 0) left = 5 

        let top = coords.top - tooltipElem.offsetHeight - 5
        if(top < 0) top = coords.top + target.offsetHeight + 5

        tooltipElem.style.left = left + 'px'
        tooltipElem.style.top = top + 'px'
    }
    document.onmouseout = function(e) {
        if(tooltipElem) {
        tooltipElem.remove()
        tooltipElem = null
        }
    }




    document.querySelector('.header_btn').onclick = function(e) {
      window.location = 'index.html';
    };