const goods = [
    {
        name: 'Netflix subscription rates',
        descr: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
        img: './img/netflix.png'
    },
    {
        name: 'Spotify Premium',
        descr: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
        img: './img/spotify.png'
    },
    {
        name: 'YouTube Premium',
        descr: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
        img: './img/youtube.png'
    }
]

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







class BaseRender {
    
    constructor(arr, parentSelector) {
        this.arr = arr;
        this.parent = document.querySelector(parentSelector);
    }

    validateContainer() {
        if (!this.parent) {
            console.error(`Error: Container not found for selector "${parentSelector}"`);
            return false;
        }
        return true;
    }

    renderEmptyMessage(message) {
        if (this.arr.length === 0 && this.parent) {
            this.parent.innerHTML = `<div class="service__zero">${message}</div>`;
        }
    }


    renderList(i, wrapper, claz) {
        if (!this.validateContainer()) return;

        this.arr.forEach(item => {
            const element = document.createElement(wrapper);
            element.classList.add(claz);
            element.innerHTML = i(item);
            this.parent.append(element);
        })
    }
}





class Goods extends BaseRender {
    constructor(arr, parentSelector) {
        super(arr, parentSelector)
    }

    renderItem({name, descr, img}) {
        return `
            <div class="wrapper service__about">
                <h3 class="wrapper__title service__title">${name}</h3>
                <p class="wrapper__descr service__descr">${descr}</p>
                <a class="wrapper__btn btn service__btn">Learn more</a>
            </div>

            <img class="service__img" src="${img}" alt="${name}">
        `;
    }

    render() {
        this.renderEmptyMessage('There are no products yet');
        this.renderList(this.renderItem.bind(this), 'article', 'service__item');
    }
}
new Goods(goods, '.service__items').render();






class Faq extends BaseRender {
    constructor(arr, parentSelector) {
        super(arr, parentSelector)
    }

    renderItem({title, descr}) {
        return `
            <div class="faq__main">
                <h3>${title}</h3>
                <button class="faq__btn"><img class="faq__arrow" src="./icons/arrow.svg" alt="arrow"></button>
            </div>

            <div class="faq__hide">${descr}</div>
        `;
    }

    render() {
        this.renderEmptyMessage('There are no products yet');
        this.renderList(this.renderItem.bind(this), 'div', 'faq__item');
    }
}
new Faq(faq, '.faq__wrapper').render();