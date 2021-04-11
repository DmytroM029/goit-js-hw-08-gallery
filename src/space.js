import galleryViewing from './gallery-items.js';
console.log(galleryViewing);
const includeUlEl = document.querySelector(".js-gallery");
const lightboxLink = document.querySelector('.js-lightbox');
const lightboxLinkImg = document.querySelector('.lightbox__image');


const makeTableOfGallery = ({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

};
/////////////////////////////или
    
//     function makeTableOfGallery(images) {
//         return images.map(({ preview, original, description }) => {
//             return `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;}).join(''); }
// const newEl = makeTableOfGallery(galleryViewing); 
// includeUlEl.insertAdjacentHTML('afterbegin', newEl);
// console.log(newEl);




const itemUlEl = galleryViewing.map(makeTableOfGallery).join('');
includeUlEl.insertAdjacentHTML('afterbegin', itemUlEl);
console.log(itemUlEl);

// const ImageEl = document.querySelector('.gallery__image');


//===================Делегирование

// js-gallery
includeUlEl.addEventListener('click', onClick)
function onClick(evt) {
    evt.preventDefault(); // Убираем открытие ссылки 
    const isImgHasEl = evt.target.classList.contains('gallery__image');
    if (!isImgHasEl) { return; }
    lightboxLink.classList.add('is-open');
   lightboxLinkImg.src = evt.target.dataset.source; 
};


  
//==========================Modal

const refs = {
    openModalClick: document.querySelector('.gallery__image'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
    lightbox: document.querySelector('.lightbox__content'),
      
};

refs.openModalClick.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.lightbox.addEventListener('click', onBackdropModal);

function onOpenModal() {

   
    // lightboxLinkImg.src = galleryLinkImg.dataset.source; 
 }
function onCloseModal() {
    lightboxLink.classList.remove('is-open');
}
 function onBackdropModal() {
    
 }


