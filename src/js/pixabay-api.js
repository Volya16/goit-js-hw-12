import axios from 'axios';

export const fetchPhotosByQuery = searchQuary => {
  const searchParams = new URLSearchParams({
    key: '48274046-7613a5ba2ef136dbd50664a67',
    q: searchQuary,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

    return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
    
//   return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
//     if (!response.ok) {
//       trow(new Error(response.status));
//     }
//     return response.json();
//   });

