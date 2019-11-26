import {BaseComponent} from '../../shared/components/base/base.component.js';

export class PhonesDetailsComponent extends BaseComponent {
  constructor({element, onDetailBack, onPhoneAdd}) {
    super({element});
    console.log('init PhonesDetailComponent');
    this._onDetailBack = onDetailBack;
    this._onPhoneAdd = onPhoneAdd;
  }

  show(phone, phoneId){
    this._phone = phone;
    this._phoneId = phoneId;
    this._render(this._phone);
    super.show();
    this._element.addEventListener('click',({target})=>{
      let classList = target.classList;
      let isBack = classList.contains('back-btn');
      let isBasket = classList.contains('basket-add-btn');
      let isImg = classList.contains('small-img');
      if (isBack){
        this._onDetailBack();
      }

      if (isBasket) {
       this._onPhoneAdd(this._phoneId);
      }

      if(isImg) {
        console.log('isImg');
        this._element.querySelector('.main-img').src = target.src;
      }

    });
  }

  _render(){
    let images = this._phone['images'];
    let phone = this._phone;

    this._element.innerHTML = `

    <img class="phone main-img" src="${images[0]}">

    <button class = 'back-btn'>Back</button>
    <button  class = 'basket-add-btn'>Add to basket</button>
    <h1>${phone['name']}</h1>
    <p>${phone["description"]}</p>
    <ul class="phone-thumbs">
    ${images.map((img)=>{
      return `
      <li>
        <img class = 'small-img' src="${img}">
      </li>
      `;
    }).join('')}
    </ul>
    `
  }
}