// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
document.addEventListener('DOMContentLoaded', function () {
  const loaderContainer = document.getElementById('loader-container');
  hideLoader(loaderContainer);

  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const gallery = document.getElementById('gallery');

  const apiKey = '41901564-aceebb7c9fdd08ac794ac72d8';

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Відображення індикатора завантаження
    showLoader(loaderContainer);

    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search term',
      });
      hideLoader(loaderContainer);
      return;
    }

    const apiUrl = 'https://pixabay.com/api/';
    const requestData = {
      key: apiKey,
      q: searchTerm,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9,
    };

    fetch(`${apiUrl}?${new URLSearchParams(requestData)}`)
      .then(response => response.json())
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message: 'No images found for the provided search term',
          });
        } else {
          displayImages(data.hits);
        }
      })
      .catch(() => {
        iziToast.error({
          title: 'Error',
          message: 'Failed to fetch images. Please try again later.',
        });
      })
      .finally(() => {
        hideLoader(loaderContainer);
      });
  });

  function showLoader(loaderContainer) {
    if (loaderContainer) {
      loaderContainer.style.display = 'block';
    }
  }

  function hideLoader(loaderContainer) {
    if (loaderContainer) {
      loaderContainer.style.display = 'none';
    }
  }

  function displayImages(images) {
    gallery.innerHTML = '';

    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoader();
      return;
    }

    images.forEach(image => {
      const card = document.createElement('div');
      card.className = 'gallery-item';

      // Обгортаємо картку зображення в посилання для SimpleLightbox
      card.innerHTML = `
      <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}">
          <img src="${image.webformatURL}" alt="${image.tags}" data-src="${image.largeImageURL}" data-caption="Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}">
        </a>
        <div class="image-stats">
      <div class="stat-item">
        <p class="stat-label">Likes:</p>
        <p class="stat-value">${image.likes}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Views:</p>
        <p class="stat-value">${image.views}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Comments:</p>
        <p class="stat-value">${image.comments}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Downloads:</p>
        <p class="stat-value">${image.downloads}</p>
      </div>
    </div>
      `;

      gallery.appendChild(card);
    });

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.refresh();
    // Оновлення галереї
  }
});
