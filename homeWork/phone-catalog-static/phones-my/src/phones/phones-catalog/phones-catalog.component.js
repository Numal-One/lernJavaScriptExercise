import {BaseComponent} from '../../shared/components/base/base.component.js';

export class PhonesCatalogComponent extends BaseComponent {
  constructor({element, phones, onPhoneSelected,onPhoneAdd}) {
    super({element});
    console.log('init PhonesCatalogComponent');
    this._phones = phones;
    this._onPhoneSelected = onPhoneSelected;
    this._onPhoneAdd = onPhoneAdd;
    this._render();
    this._element.addEventListener('click',(e)=>{
      let element = e.target.closest('.thumb');
      let btnAdd = e.target.classList.contains('btn-success');
      if (element) {
        this._onPhoneSelected(element.dataset.phoneId);
      }
      if (btnAdd) {
        this._onPhoneAdd( e.target.closest('.thumbnail').querySelector('.thumb').dataset.phoneId);
        console.log(e.target.closest('.thumbnail').querySelector('.thumb').dataset.phoneId);
      }
      
      return;
    });
  }

  _render(){
    
    this._element.innerHTML = `
    <ul class="phones">
    ${this._phones.map((phone)=>
      `
      <li class="thumbnail">
      <a href="#!/phones/${phone.id}" class="thumb" data-phone-id = '${phone.id}'>
        <img alt="${phone.name}" src="${phone.imageUrl}">
      </a>

      <div class="phones__btn-buy-wrapper">
        <a class="btn btn-success">
          Add
        </a>
      </div>

      <a href="#!/phones/${phone.id}">${phone.name}</a>
      <p>${phone.id}</p>
    </li>
      `
    ).join('')}
        </ul>
    `;

  }
}