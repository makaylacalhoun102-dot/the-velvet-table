/* The Velvet Table — editorial menu enhancement. The original menu remains the data source. */
(() => {
  const details = {
    starters: { kicker: 'THE FIRST IMPRESSION · COURSE 01', title: 'A beautiful <em>beginning.</em>', description: 'Every memorable evening starts with a little anticipation. Begin with plates designed to be shared, savored, and remembered.', label: 'TO BEGIN / 01', tab: 'To Begin', image: 'assets/menu/starters.jpg' },
    mains: { kicker: 'THE CENTERPIECE · COURSE 02', title: 'The main <em>event.</em>', description: 'A celebration of seasonal ingredients, layered flavors, and thoughtful craft. Stay a little longer; this is the heart of the evening.', label: 'THE MAIN EVENT / 02', tab: 'The Main Event', image: 'assets/menu/mains.jpg' },
    desserts: { kicker: 'THE LASTING IMPRESSION · COURSE 03', title: 'A sweet <em>ending.</em>', description: 'Because the most beautiful evenings deserve one more moment. Something delicate, something decadent, something worth lingering over.', label: 'A SWEET ENDING / 03', tab: 'A Sweet Ending', image: 'assets/menu/desserts.jpg' },
    drinks: { kicker: 'THE PERFECT PAIRING · THE POUR', title: 'Raise a <em>glass.</em>', description: 'Thoughtful zero-proof creations and timeless refreshments, poured for conversation and every kind of celebration.', label: 'THE POUR / 04', tab: 'The Pour', image: 'assets/menu/drinks.jpg' }
  };
  const items = document.getElementById('menu-items');
  const tabs = Array.from(document.querySelectorAll('.menu-tabs .tab'));
  const picture = document.getElementById('menu-editorial-image');
  const kicker = document.getElementById('menu-editorial-kicker');
  const title = document.getElementById('menu-editorial-heading');
  const description = document.getElementById('menu-editorial-description');
  const count = document.getElementById('menu-editorial-count');
  const label = document.getElementById('menu-course-label');
  if (!items || !tabs.length || !picture) return;

  tabs.forEach((tab, index) => {
    tab.id = 'menu-tab-' + tab.dataset.category;
    tab.setAttribute('aria-controls', 'menu-items');
    tab.tabIndex = tab.classList.contains('active') ? 0 : -1;
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[next].focus();
      tabs[next].click();
    });
    tab.addEventListener('click', () => {
      const info = details[tab.dataset.category];
      if (!info) return;
      kicker.textContent = info.kicker;
      title.innerHTML = info.title;
      description.textContent = info.description;
      label.textContent = info.label;
      count.textContent = '04 CURATED SELECTIONS';
      picture.style.backgroundImage = `linear-gradient(0deg, rgba(24,15,15,.55), rgba(24,15,15,.05) 58%), url("${info.image}")`;
      picture.setAttribute('aria-label', info.tab + ' — editorial food and drink imagery');
      items.setAttribute('aria-label', info.tab + ' menu');
      items.setAttribute('aria-labelledby', tab.id);
      tabs.forEach(t => { t.tabIndex = t === tab ? 0 : -1; });
      items.classList.remove('menu-enter');
      void items.offsetWidth;
      items.classList.add('menu-enter');
      picture.classList.remove('image-enter');
      void picture.offsetWidth;
      picture.classList.add('image-enter');
    });
  });
  const first = tabs.find(t => t.classList.contains('active')) || tabs[0];
  items.setAttribute('aria-labelledby', first.id);
})();
