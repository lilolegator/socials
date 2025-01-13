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

const goodsParent = document.querySelector('.service__items')

class Goods {
    constructor(name, descr, img) {
        this.name = name;
        this.descr = descr;
        this.img = img;
    }

    render() {
        const element = document.createElement('div');

        if(!goodsParent) {
            document.querySelector('.service__wrapper').innerHTML = '<p style="color:red;">Error: Container not found!</p>';
            return;
        }

        element.innerHTML = `
            <article class="service__item">
                <div class="wrapper service__about">
                    <h3 class="wrapper__title service__title">${this.name}</h3>
                    <p class="wrapper__descr service__descr">${this.descr}</p>
                    <a class="wrapper__btn btn service__btn">Learn more</a>
                </div>

                <img class="service__img" src="${this.img}" alt="${this.name}">
            </article>
        `;

        goodsParent.append(element)
    }
}

if (goods.length === 0 && goodsParent) {
    goodsParent.innerHTML = `<div class="service__zero">There are no products yet</div>`;
}

goods.forEach(({name, descr, img}) => {
    new Goods(name, descr, img).render();
})