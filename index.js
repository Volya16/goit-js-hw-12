import{a as u,i as n,S as d}from"./assets/vendor-B6jJ9_I0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m=r=>{const{webformatURL:t,largeImageURL:o,tags:a,likes:e,views:s,comments:i,downloads:p}=r;return`<li class="gallery-card">
            <a href=${o} class="gallery-link">
              <img class="gallery-img" src=${t} alt='s${a}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${s}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${i}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${p}</</span></p>
            </li>
          </ul>
          </li>`},f=r=>{const t=new URLSearchParams({key:"48274046-7613a5ba2ef136dbd50664a67",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return u.get(`https://pixabay.com/api/?${t}`)},l=document.querySelector(".js-gallery");document.querySelector(".loader-container");n.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const g=new d(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),c=document.querySelector(".js-seach-form"),y=async r=>{try{r.preventDefault();const t=r.currentTarget.elements.user_query.value.trim();if(t===""){n.warning({message:"Please feel this field!"});return}const{data:o}=await f(t);if(console.log(o),o.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",c.reset();return}const a=o.hits.map(e=>m(e)).join("");l.innerHTML=a,g.refresh(),h(!0)}catch(t){console.log(t)}};c.addEventListener("submit",y);function h(r){l.classList.remove("is-visibly")}
//# sourceMappingURL=index.js.map
