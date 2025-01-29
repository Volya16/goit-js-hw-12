import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader-container');
const loadMoreBtn = document.querySelector('.load-btn-js');
const seachFormEl = document.querySelector('.js-seach-form');

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
      
      

        searchQuary = evt.currentTarget.elements.user_query.value.trim();

        if (searchQuary === '') {
            iziToast.warning({
              message: 'Please feel this field!',
            });
            return;
      }
      
      page = 32;
      loadMoreBtn.classList.add('is-hidden');
      
      const {data} = await fetchPhotosByQuery(searchQuary, page);
      
      
      if (data.total === 0) {
        iziToast.error({
          message:
          'Sorry, there are no images matching your search query. Please try again!',
        });
        galleryEl.innerHTML = '';
        seachFormEl.reset();
        return;
      }
      
      totalPages = Math.ceil(data.totalHits / data.hits.length);
      // console.log(totalPages);
      if (totalPages > 1) {
        loadMoreBtn.classList.remove('is-hidden');

        loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
      }

      loaderSwitcher(false);
    
      const galleryTemplate = data.hits.map(img => createGalleryCardTemplate(img)).join('');
      loaderSwitcher(true);
      galleryEl.innerHTML = galleryTemplate;
      lightbox.refresh();
      galleryVisibly(true);
      

      

    } catch (err) {
        console.log(err);
    }
    
};

seachFormEl.addEventListener('submit', onSeachFormSubmit);

const onLoadMoreBtnClick = async () => {
  try {
    page++;
    const { data } = await fetchPhotosByQuery(searchQuary, page);
    const galleryTemplate = data.hits
      .map(img => createGalleryCardTemplate(img))
      .join('');
    loaderSwitcher(true);
    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);
    lightbox.refresh();
    galleryVisibly(true);
    loadMoreBtn.classList.remove('is-hidden');


    totalPages = Math.ceil(data.totalHits / data.hits.length);
    console.log(totalPages);
    console.log(page);

    if (page === totalPages) {
      console.log(totalPages);
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }


  } catch (error) {
    console.log(error);
  }
};


function loaderSwitcher(boolean) {
  if (boolean) {
    setTimeout(() => {
      loaderEl.classList.add('is-hidden');
    }, 500);
  } else {
    loaderEl.classList.remove('is-hidden');
  }
}

function galleryVisibly(boolean) {
  if (boolean) {
    galleryEl.classList.remove('is-visibly');
  } else {
    galleryEl.classList.add('is-visibly');
  }
  
  
  
  
  //   if (searchQuary === '') {
  //     // loaderSwitcher(false);
  //     setTimeout(() => {
  //       iziToast.error({
  //         message: 'Please feel this field!',
  //       });
  //     }, 500);
  //     // seachFormEl.reset();
  //     // loaderSwitcher(true);
  //     return;
  //   }
  
  //   galleryVisibly(true);
  //   loaderSwitcher(false);
  
  //     .then(data => {
  //       
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       seachFormEl.reset();
  //       loaderSwitcher(true);
  //     });
  //   galleryVisibly(false);
}