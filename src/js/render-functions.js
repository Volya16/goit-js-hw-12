export const createGalleryCardTemplate = imgs => {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = imgs;

  return `<li class="gallery-card">
            <a href=${largeImageURL} class="gallery-link">
              <img class="gallery-img" src=${webformatURL} alt='s${tags}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${likes}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${views}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${comments}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${downloads}</</span></p>
            </li>
          </ul>
          </li>`;
};
