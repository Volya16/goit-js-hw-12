import{a as S,i as d,S as w}from"./assets/vendor-B6jJ9_I0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const f=t=>{const{webformatURL:s,largeImageURL:r,tags:o,likes:e,views:i,comments:n,downloads:v}=t;return`<li class="gallery-card">
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
          </li>`},g=(t,s)=>{const r={params:{key:"48274046-7613a5ba2ef136dbd50664a67",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}};return S.get("https://pixabay.com/api/",r)},u=document.querySelector(".js-gallery"),h=document.querySelector(".loader-container"),a=document.querySelector(".load-btn-js"),y=document.querySelector(".js-seach-form");let l=1,c="",p=0;d.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const L=new w(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),q=async t=>{try{if(t.preventDefault(),c=t.currentTarget.elements.user_query.value.trim(),c===""){d.info({message:"Please feel this field!"});return}l=1,a.classList.add("is-hidden");const{data:s}=await g(c,l);if(s.total===0){d.info({message:"Sorry, there are no images matching your search query. Please try again!"}),u.innerHTML="",y.reset();return}p=Math.ceil(s.totalHits/s.hits.length),m(!1),p>1&&(a.classList.remove("is-hidden"),a.addEventListener("click",b));const r=s.hits.map(o=>f(o)).join("");u.innerHTML=r,L.refresh(),m(!0),x(!0)}catch(s){console.log(s)}finally{}};y.addEventListener("submit",q);const b=async()=>{try{a.classList.add("is-hidden"),m(!1),l++;const{data:t}=await g(c,l),s=t.hits.map(o=>f(o)).join("");u.insertAdjacentHTML("beforeend",s),L.refresh(),a.classList.remove("is-hidden");const r=document.querySelector(".gallery-card:last-child").getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"}),p=Math.ceil(t.totalHits/t.hits.length),l===p&&(d.info({message:"We're sorry, but you've reached the end of search results."}),a.classList.add("is-hidden"),a.removeEventListener("click",b))}catch(t){console.log(t)}finally{m(!0)}};function m(t){t?setTimeout(()=>{h.classList.add("is-hidden")},500):h.classList.remove("is-hidden")}function x(t){u.classList.remove("is-visibly")}
//# sourceMappingURL=index.js.map
