import{a as v,i as d,S}from"./assets/vendor-B6jJ9_I0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const h=s=>{const{webformatURL:t,largeImageURL:o,tags:a,likes:e,views:i,comments:c,downloads:b}=s;return`<li class="gallery-card">
            <a href=${o} class="gallery-link">
              <img class="gallery-img" src=${t} alt='s${a}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${i}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${c}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${b}</</span></p>
            </li>
          </ul>
          </li>`},f=(s,t)=>{const o={params:{key:"48274046-7613a5ba2ef136dbd50664a67",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}};return v.get("https://pixabay.com/api/",o)},u=document.querySelector(".js-gallery"),n=document.querySelector(".loader-container"),r=document.querySelector(".load-btn-js"),g=document.querySelector(".js-seach-form");n.style.display="none";let l=1,y="",p=0;d.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const L=new S(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),q=async s=>{try{if(s.preventDefault(),u.innerHTML="",n.style.display="block",y=s.currentTarget.elements.user_query.value.trim(),y===""){d.info({message:"Please feel this field!"}),n.style.display="none";return}l=1,r.classList.add("is-hidden");const{data:t}=await f(y,l);if(n.style.display="none",t.total===0){d.info({message:"Sorry, there are no images matching your search query. Please try again!"}),u.innerHTML="",g.reset();return}p=Math.ceil(t.totalHits/t.hits.length),l===p&&(d.info({message:"We're sorry, but you've reached the end of search results."}),r.classList.add("is-hidden"),r.removeEventListener("click",m)),p>1&&(r.classList.remove("is-hidden"),r.addEventListener("click",m));const o=t.hits.map(a=>h(a)).join("");u.innerHTML=o,L.refresh()}catch(t){n.style.display="none",console.log(t)}};g.addEventListener("submit",q);const m=async()=>{try{r.classList.add("is-hidden"),l++,n.style.display="block";const{data:s}=await f(y,l);n.style.display="none";const t=s.hits.map(a=>h(a)).join("");u.insertAdjacentHTML("beforeend",t),L.refresh(),r.classList.remove("is-hidden");const o=document.querySelector(".gallery-card:last-child").getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"}),p=Math.ceil(s.totalHits/s.hits.length),(s.hits.length<15||l===p)&&(d.info({message:"We're sorry, but you've reached the end of search results."}),r.classList.add("is-hidden"),r.removeEventListener("click",m))}catch(s){n.style.display="none",console.log(s)}};
//# sourceMappingURL=index.js.map
