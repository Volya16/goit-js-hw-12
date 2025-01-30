import{a as S,i as d,S as w}from"./assets/vendor-B6jJ9_I0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const h=t=>{const{webformatURL:s,largeImageURL:r,tags:o,likes:e,views:i,comments:n,downloads:v}=t;return`<li class="gallery-card">
            <a href=${r} class="gallery-link">
              <img class="gallery-img" src=${s} alt='s${o}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${i}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${n}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${v}</</span></p>
            </li>
          </ul>
          </li>`},y=(t,s)=>{const r={params:{key:"48274046-7613a5ba2ef136dbd50664a67",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}};return S.get("https://pixabay.com/api/",r)},p=document.querySelector(".js-gallery"),f=document.querySelector(".loader-container"),a=document.querySelector(".load-btn-js"),g=document.querySelector(".js-seach-form");let l=1,c="",u=0;d.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const L=new w(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),x=async t=>{try{if(t.preventDefault(),c=t.currentTarget.elements.user_query.value.trim(),c===""){d.info({message:"Please feel this field!"});return}l=33,a.classList.add("is-hidden");const{data:s}=await y(c,l);if(s.total===0){d.info({message:"Sorry, there are no images matching your search query. Please try again!"}),p.innerHTML="",g.reset();return}u=Math.ceil(s.totalHits/s.hits.length),m(!1),u>1&&(a.classList.remove("is-hidden"),a.addEventListener("click",b));const r=s.hits.map(o=>h(o)).join("");L.refresh(),m(!0),T(!0),p.innerHTML=r}catch(s){console.log(s)}finally{}};g.addEventListener("submit",x);const b=async()=>{try{a.classList.add("is-hidden"),m(!1),l++;const{data:t}=await y(c,l),s=t.hits.map(r=>h(r)).join("");p.insertAdjacentHTML("beforeend",s),L.refresh(),a.classList.remove("is-hidden"),u=Math.ceil(t.totalHits/t.hits.length),l===u&&(d.info({message:"We're sorry, but you've reached the end of search results."}),a.classList.add("is-hidden"),a.removeEventListener("click",b))}catch(t){console.log(t)}finally{m(!0)}};function m(t){t?setTimeout(()=>{f.classList.add("is-hidden")},500):f.classList.remove("is-hidden")}function T(t){p.classList.remove("is-visibly")}
//# sourceMappingURL=index.js.map
