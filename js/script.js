const btnBar = document.querySelector('.btn__menu')
      const btnBarIcon = document.querySelector('.btn__menu i')
      const menuMobile = document.querySelector('.nav__mobile')

        btnBar.onclick = function () {
        menuMobile.classList.toggle('open')
        const isOpen = menuMobile.classList.contains('open')

        btnBarIcon.classList = isOpen
        ? 'fa-solid fa-xmark '
        : 'fa-solid fa-bars'
      }