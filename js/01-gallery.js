import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description})=>
        `<li class="gallery__item">
            <a class="gallery__link js-target" href="${original}">
                <img data-image-description="${description}"
                class="gallery__image js-target"
                src="${preview}"
                data-source="${original}"
                alt="${description}" widht=100%
                />
            </a>
        </li>`
    );

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    if (!target.classList.contains("gallery__image")) {
      return;
    }
    
const instance = basicLightbox.create(
    `<img src="${target.dataset.source}" width="800" height="600">`
   );
   instance.show();
};





