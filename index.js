import{a as w,i as u,S as x}from"./assets/vendor-B6jJ9_I0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g=t=>{const{webformatURL:s,largeImageURL:i,tags:r,likes:e,views:o,comments:c,downloads:S}=t;return`<li class="gallery-card">
            <a href=${i} class="gallery-link">
              <img class="gallery-img" src=${s} alt='s${r}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${o}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${c}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${S}</</span></p>
            </li>
          </ul>
          </li>`},h=(t,s)=>{const i={params:{key:"48274046-7613a5ba2ef136dbd50664a67",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}};return w.get("https://pixabay.com/api/",i)},p=document.querySelector(".js-gallery"),f=document.querySelector(".loader-container"),l=document.querySelector(".load-btn-js"),y=document.querySelector(".js-seach-form");let a=1,d="",n=0;u.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const L=new x(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),T=async t=>{try{if(t.preventDefault(),d=t.currentTarget.elements.user_query.value.trim(),d===""){u.warning({message:"Please feel this field!"});return}a=32,l.classList.add("is-hidden");const{data:s}=await h(d,a);if(s.total===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),p.innerHTML="",y.reset();return}n=Math.ceil(s.totalHits/s.hits.length),n>1&&(l.classList.remove("is-hidden"),l.addEventListener("click",b)),m(!1);const i=s.hits.map(r=>g(r)).join("");m(!0),p.innerHTML=i,L.refresh(),v(!0)}catch(s){console.log(s)}};y.addEventListener("submit",T);const b=async()=>{try{a++;const{data:t}=await h(d,a),s=t.hits.map(i=>g(i)).join("");m(!0),p.insertAdjacentHTML("beforeend",s),L.refresh(),v(!0),l.classList.remove("is-hidden"),n=Math.ceil(t.totalHits/t.hits.length),console.log(n),console.log(a),a===n&&(console.log(n),l.classList.add("is-hidden"),l.removeEventListener("click",b))}catch(t){console.log(t)}};function m(t){t?setTimeout(()=>{f.classList.add("is-hidden")},500):f.classList.remove("is-hidden")}function v(t){p.classList.remove("is-visibly")}
//# sourceMappingURL=index.js.map
