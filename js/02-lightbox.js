import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
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

const lightbox = new SimpleLightbox('.gallery__link',
 { captionsData: "alt", captionDelay: "250" })