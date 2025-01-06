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

            faqHide[i].classList.toggle('active'); // Додаємо або прибираємо клас

            if (faqHide[i].classList.contains('active')) {
                faqHide[i].style.maxHeight = `${faqHide[i].scrollHeight + 20}px`;
            } else {
                
                faqHide[i].style.maxHeight = `0`;
            }
        })
    })
});
  