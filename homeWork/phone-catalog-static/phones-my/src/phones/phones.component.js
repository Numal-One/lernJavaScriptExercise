import {PhonesCatalogComponent} from './phones-catalog/phones-catalog.component.js';
import {PhonesService} from './phones.service.js';
import {PhonesDetailsComponent} from './phones-details/phones-details.component.js';
import {BaseComponent} from '../shared/components/base/base.component.js';
import {ShoppingCart} from './shopping-cart/shopping-cart.component.js';

export class PhonesComponent extends BaseComponent {
  constructor ({element}) {
    super({element});
    this._render();
    this._phoneDetailsInit();
    this._cartInit();
    this._phoneCatalogInit();
    
  }

  _cartInit(){
    this._cart = new ShoppingCart({
      element: this._element.querySelector('.shopping-cart')
    });
  }

  _phoneCatalogInit(){
    this._catalog = new PhonesCatalogComponent({
      element: this._element.querySelector('.phones-catalog'),
      phones: PhonesService.getAll(),
      onPhoneSelected: (phoneId) => {
        const phone = PhonesService.getOneById(phoneId);
        this._catalog.hide();
        this._details.show(phone, phoneId);
      },
      onPhoneAdd: (phoneId) => {
        this._cart.addPhone(phoneId);
        console.log('in catalog');
        console.log(phoneId);
      }
    });
  }

  _phoneDetailsInit(){
    this._details = new PhonesDetailsComponent({
      element: this._element.querySelector('.phones-details'),
      onDetailBack: () => {
        this._catalog.show();
        this._details.hide();
      },

      onPhoneAdd: (phoneId) => {
        this._cart.addPhone(phoneId);
        console.log('in detail');
        console.log(phoneId);
      }
    });
  }



  _render(){
    this._element.innerHTML = `
    <div class="row">

      <!--Sidebar-->
      <div class="col-md-2">
        <section>
          <p>
            Search:
            <input>
          </p>

          <p>
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </p>
        </section>

        <section class = 'shopping-cart'>
        </section>
      </div>

      <!--Main content-->
      <div class="col-md-10">
        <div class="phones-details"></div>  
        <div class="phones-catalog"></div>

      </div>
    </div>
    `;
  }
}