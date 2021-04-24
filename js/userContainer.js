let $template = document.createElement('template');

$template.innerHTML = `

`;

export default class UserContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    };

    static get observedAttributes() {
        return ['name', 'country', 'img', 'gend', 'phone', 'favourites']
    };

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'name':
                
        }
    };
};

window.customElements.define('user-container', userContainer);