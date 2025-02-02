import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader-container');
const loadMoreBtn = document.querySelector('.load-btn-js');
const seachFormEl = document.querySelector('.js-seach-form');


loaderEl.style.display = 'none';
let page = 1;
let searchQuary = "";
let totalPages = 0;

iziToast.settings({
  position: 'topRight',
  theme: 'dark',
  backgroundColor: '#ef4040',
  timeout: 2000,
});

const lightbox = new SimpleLightbox('.js-gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 400,
});

const onSeachFormSubmit = async evt => {
    try {
      evt.preventDefault();
      galleryEl.innerHTML = '';
      loaderEl.style.display = 'block';

      searchQuary = evt.currentTarget.elements.user_query.value.trim();

    
      if (searchQuary === '') {
        iziToast.info({
          message: 'Please feel this field!',
          });
          loaderEl.style.display = 'none';
          return;
      }
      
      page = 33;
      loadMoreBtn.classList.add('is-hidden');
      
      const {data} = await fetchPhotosByQuery(searchQuary, page);
      
      loaderEl.style.display = 'none';

      if (data.total === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        galleryEl.innerHTML = '';
        seachFormEl.reset();
        return;
      }
      
      totalPages = Math.ceil(data.totalHits / data.hits.length);
      
      if (totalPages > 1) {
        loadMoreBtn.classList.remove('is-hidden');
        loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
      }
    
      const galleryTemplate = data.hits.map(img => createGalleryCardTemplate(img)).join('');
      galleryEl.innerHTML = galleryTemplate;
      lightbox.refresh();

    } catch (err) {
      loaderEl.style.display = 'none';
        console.log(err);
    }
};

seachFormEl.addEventListener('submit', onSeachFormSubmit);


const onLoadMoreBtnClick = async () => {
  try {
    loadMoreBtn.classList.add('is-hidden');
    page++;
    loaderEl.style.display = 'block';
    const { data } = await fetchPhotosByQuery(searchQuary, page);
    loaderEl.style.display = 'none';
    const galleryTemplate = data.hits
      .map(img => createGalleryCardTemplate(img))
      .join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);
    lightbox.refresh();
    loadMoreBtn.classList.remove('is-hidden');
    
    const cardHeight = document
      .querySelector('.gallery-card:last-child')
      .getBoundingClientRect().height;
    
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    totalPages = Math.ceil(data.totalHits / data.hits.length);

    if (page === totalPages) {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }

  } catch (error) {
    loaderEl.style.display = 'none';
    console.log(error);
  }
};
