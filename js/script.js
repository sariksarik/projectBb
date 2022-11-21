
  
   const langEn = document.querySelector('#lang-en');
   const langRu = document.querySelector('#lang-ru');
  
   langEn.addEventListener('click', setLang.bind(null, 'en'));
   langRu.addEventListener('click', setLang.bind(null, 'ru'));
  
   function setLang(lang) {
     if (!langArr.hasOwnProperty(lang)) return;
     if (window.hasOwnProperty('localStorage'))
     window.localStorage.setItem('lang', lang);
     for (let key in langArr[lang]) {
       let elem = document.querySelector('.lng-' + key);
       if (elem) {
       elem.innerHTML = langArr[lang][key];
     }
   }
   }
   let lang = window.hasOwnProperty('localStorage') || 'en';
   setLang(lang);
  function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
         change.target.classList.add('element-show');
        }
      });
    }
    
    let options = {
      threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    
    for (let elm of elements) {
      observer.observe(elm);
    }
    let menuToggle = document.querySelector('.navigation-menuToggle'); let navigation = document.querySelector('.navigation'); menuToggle.onclick = function() { navigation.classList.toggle('active')}   