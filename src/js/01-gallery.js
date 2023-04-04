import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const createGalleryList = galleryItems
    .map(
        ({ preview, original, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
            </li>`
        ).join("");

gallery.innerHTML = createGalleryList;
new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
