/*=============== SHOW MODAL ===============*/
const showModal = (modalContent) => {
    const modalContainer = document.getElementById(modalContent);

    if (modalContainer) {
        modalContainer.classList.add('show-modal');
    }
};

// showModal fonksiyonunu çağırmadan direkt modalı gösteren fonksiyon
const showDefaultModal = () => {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.add('show-modal');
};

// showModal fonksiyonunu çağırmadan direkt modalı göster
document.addEventListener('DOMContentLoaded', showDefaultModal);

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal');

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('show-modal');
}

closeBtn.forEach(c => c.addEventListener('click', closeModal));
