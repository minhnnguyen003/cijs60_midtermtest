import UserContainer from './userContainer.js';

let $template = document.createElement('template');

$template.innerHTML = `
    
`;

export default class UserList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    };

    static get observedAttributes() {

    };

    attributeChangedCallback(attrName, oldValue, newValue) {

    };
};

window.customElements.define('user-list', userList);