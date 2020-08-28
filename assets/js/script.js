function loadBanner() {
    var banner = document.querySelector('#banner-container-id');
    var width = window.innerWidth;
    if (width < 800) {
      banner.style.display = 'block';
    };
  };