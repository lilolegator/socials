const faq = [
    {
        title: 'The set time has passed, but the invoice has not yet arrived, what should I do?',
        descr: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.'
    },
    {
        title: 'Can I change my Netflix account email and password after purchase?',
        descr: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.'
    },
    {
        title: 'Can I add a phone number for password recovery?',
        descr: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.'
    },
    {
        title: 'How soon will I receive the account information I ordered?',
        descr: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.'
    },
    {
        title: 'How to pay?',
        descr: 'Payment options we currently have: PayPal, Bitcoin.'
    }
]

const faqParent = document.querySelector('.faq__wrapper')

class Faq {
    constructor(title, descr) {
        this.title = title;
        this.descr = descr;
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('faq__item')

        if(!faqParent) {
            document.querySelector('.service__wrapper').innerHTML = '<p style="color:red;">Error: Container not found!</p>';
            return;
        }

        element.innerHTML = `
            <div class="faq__main">
                <h3>${this.title}</h3>
                <button class="faq__btn"><img class="faq__arrow" src="./icons/arrow.svg" alt="arrow"></button>
            </div>

            <div class="faq__hide">${this.descr}</div>
        `;

        faqParent.append(element)
    }
}

if (faq.length === 0 && faqParent) {
    faqParent.innerHTML = `<div class="service__zero">There are no item yet</div>`;
}

faq.forEach(({title, descr}) => {
    new Faq(title, descr).render();
})