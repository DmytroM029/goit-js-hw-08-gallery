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
    window.addEventListener('keydown', onEscapeClose); 
    window.addEventListener('keydown', onArrow); 
};


  
//==========================Modal

const refs = {
    openModalClick: document.querySelector('.gallery__image'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
    lightbox: document.querySelector('.lightbox__overlay'),
      
};

refs.openModalClick.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.lightbox.addEventListener('click', onBackdropModal);


function onOpenModal() {
 //для Escape
   
    // lightboxLinkImg.src = galleryLinkImg.dataset.source; 
 }
function onCloseModal() {
    window.removeEventListener('keydown', onEscapeClose); //для Escape
    lightboxLink.classList.remove('is-open');
    lightboxLinkImg.src = '';


}
 function onBackdropModal(evt) {
     if (evt.currentTarget === evt.target) { onCloseModal(); }
 }

function onEscapeClose(evt) {
    if (evt.code === 'Escape') { onCloseModal(); }
    
    ////////или
    //  const ESC_KEY_CODE = 'Escape';
    // const isEscKey = evt.code === ESC_KEY_CODE;
    // if (isEscKey) { onCloseModal();}
    
}

// function onArrow(evt) {
//     let currentIndex = 0;
//     if (currentIndex === galleryViewing.length - 1) { return currentIndex = -1; }; 
//     if (evt.code === 'ArrowLeft') { currentIndex -= 1; } else if  (evt.code === 'ArrowRight')  { currentIndex += 1;  }
}