document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtns = document.querySelectorAll('.dropdownBtn');
    const dropdownBodies = document.querySelectorAll('.dropdownMenu');
  
    dropdownBtns.forEach((btn, index) => {
        const relatedDropdown = dropdownBodies[index];
      
        let timeout;
  
        // Відкриваємо меню при наведенні на кнопку
        btn.addEventListener('mouseover', () => {
            clearTimeout(timeout);  // Скасувати попереднє закриття меню
            relatedDropdown.classList.remove('hide');
            relatedDropdown.classList.add('show');
        });
    
        // Закриваємо меню, якщо курсор залишає як кнопку, так і меню
        const closeMenu = () => {
            timeout = setTimeout(() => {
                if (!btn.matches(':hover') && !relatedDropdown.matches(':hover')) {
                    relatedDropdown.classList.remove('show');  // Видаляємо клас для закриття
                    relatedDropdown.classList.add('hide');
                }
            }, 500);  // Затримка перед закриттям
        };
    
        // Закриття меню при виході з кнопки або меню
        btn.addEventListener('mouseout', closeMenu);
        relatedDropdown.addEventListener('mouseout', closeMenu);
        
        // Меню не закривається, коли курсор знаходиться на самому меню
        relatedDropdown.addEventListener('mouseover', () => {
            clearTimeout(timeout);  // Скасовуємо затримку, якщо курсор на меню
            relatedDropdown.classList.remove('hide');
            relatedDropdown.classList.add('show');
        });
    });


    const faqBtn = document.querySelectorAll('.faq__btn');
    const faqArrow = document.querySelectorAll('.faq__arrow');
    const faqHide = document.querySelectorAll('.faq__hide');

    faqBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            faqArrow[i].classList.toggle('rotate');

            faqHide[i].classList.toggle('active'); 

            if (faqHide[i].classList.contains('active')) {
                faqHide[i].style.maxHeight = `${faqHide[i].scrollHeight + 20}px`;
            } else {
                
                faqHide[i].style.maxHeight = `0`;
            }
        })
    })


    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-close');
        hamburger.classList.toggle('hamburger-active');

        if (!mobileMenu.classList.contains('mobile-active')) {
            mobileMenu.style.top = '60px'; 
            mobileMenu.classList.add('mobile-active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.style.top = '-100%';
            mobileMenu.classList.remove('mobile-active');
            document.body.style.overflow = '';
        }
    });
});
  