import {BaseComponent} from '../../shared/components/base/base.component.js';

export class ShoppingCart extends BaseComponent{
  constructor({element}){
    super({element});
    this._cartSpace = this._element.querySelector('.cart-space');
    this._cartPhones = {};
    console.log('init ShoppingCart');
    this._render();
    this._element.addEventListener('click', (e) => {
      if (e.target.classList.contains('clear-cart')) {
        console.log('clear cart');
        this._clearCart();
      }
    });

  }

  
  _render(){
    let phoneArr = Object.entries(this._cartPhones);
    console.log(phoneArr);
    this._element.innerHTML = `
    <div class = "cart-header-wrapper">
    <div>Shopping Cart</div>
    <button class ='clear-cart'>Clear</button>
    </div>
          <ul class = 'cart-space'>
           ${phoneArr.map(([phoneName, count]) => {
            return `
            <li>
              <div class="phone-cart-unit">
                  <div class="phone-name">${phoneName} - ${count}</div>
                  <div class="minus-phone">
                    <img src="img/minus-square-regular.svg" alt="minus">
                  </div>
                  <div class="delete-phone">
                    <img src="img/dismiss-square-regular.svg" alt="delete">
                  </div>
              </div>
            </li> 
            `
           }).join('')}
          </ul>
        
    `
  }


  _clearCart(){
    this._cartPhones = {};
    this._render();
  }

  addPhone (phoneId) {
    console.log(phoneId);

    if(!this._cartPhones[phoneId]) {
      this._cartPhones[phoneId] = 1;
      console.log(this._cartPhones.phoneId);
      this._render();
      return;
    }

    this._cartPhones[phoneId] +=1;
    console.log(this._cartPhones.phoneId);
    this._render();
  }
}


