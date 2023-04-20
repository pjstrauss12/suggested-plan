import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class ActivityTemplate extends LitElement {
    static properties = {
    header: { type: String },
    activityList: {type: Array},
    }

    static styles = css`
    :host {
        font-family: "OpenSans-Light", Arial, sans-serif;
    }
    .wrapper{
        gap: 10rem;
        padding: 20px;
        border: 2px black solid;
        display: inline-block;
    }
    `;
    constructor() {
        super();
        this.header = 'My app';
        this.activityList = [];
    }

    render() {
    return html`
        <div class="wrapper">
            ${this.activityList}
        </div>
    `;
    }
}

customElements.define('acitivity-template', ActivityTemplate);