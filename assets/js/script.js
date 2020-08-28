function loadBanner() {
    const banner = document.querySelector('#banner-container-id');
    let width = window.innerWidth;
    if (width < 800) {
        banner.style.display = 'block';
    };
};
