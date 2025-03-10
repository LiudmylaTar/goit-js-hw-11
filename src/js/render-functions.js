import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader-wrapper');

export function renderGallery(images) {
  const markup = images
    .map(image => {
      const limitedTags = image.tags.split(', ').slice(0, 4).join(', ');

      return `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
          <img 
            class="gallery-image" 
            src= "${image.webformatURL}"
            alt= "${limitedTags}"
          />
      </a>
       <div class="image-info">
          <div class="info-titles">
          <h4>Likes</h4>
          <p>${image.likes}</p>
          </div>
          <div class="info-titles">
          <h4>Views</h4>
          <p>${image.views}</p>
          </div>
          <div class="info-titles">
          <h4>Comments</h4>
          <p>${image.comments}</p>
           </div>
          <div class="info-titles">
          <h4>Downloads</h4>
          <p>${image.downloads}</p>                 
          </div>
        </div>
  </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  console.log('Лоадер показано');
  loader.style.display = 'block';
}

export function hideLoader() {
  console.log('Лоадер приховано');
  loader.style.display = 'none';
}
