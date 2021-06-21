let $template = document.createElement('template');

$template.innerHTML = `
    <div class="user-container">
    <div class="user-img"></div>
    <div class="name">Minh</div>
    <div class="info">
        <div class="gender"></div>
        <div class="country"></div>
        <div class="phone"></div>
    </div>
    <div class="favourites">

    </div>
    </div>
`;

export default class UserContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.name');
        this.$gender = this.querySelector('.gender');
        this.$country = this.querySelector('.country');
        this.$phone = this.querySelector('.phone');
        this.$img = this.querySelector('.user-img');
    };

    static get observedAttributes() {
        return ['name', 'country', 'img', 'gender', 'phone', 'favourites']
    };

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'name':
                this.$name.innerHTML = newValue;
                break;
            case 'country':
                this.$country.innerHTML = newValue;
                break;
            case 'phone':
                this.$phone.innerHTML = newValue;
                break;
            case 'gender':
                this.$gender.innerHTML = newValue;
                break;
            case 'img':
                this.$img.style.backgroundImage = `url('${newValue}')`;
                break;
            case 'favourites':
                
        }
    };
};

window.customElements.define('user-container', userContainer);