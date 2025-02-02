import axios from 'axios';

export const fetchPhotosByQuery = (searchQuary, currentPage) => {
  
  const axiosOptions = {
    params: {
      key: '48274046-7613a5ba2ef136dbd50664a67',
      q: searchQuary,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
    },
  };

    return axios.get('https://pixabay.com/api/', axiosOptions);
    
};
