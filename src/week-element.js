import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class WeekElement extends LitElement {
  static properties = {
    header: { type: String },
    week: {type: String},
    timeIcon: {type: String},
    title: {type: String},
    timeToComplete: {type: Number},
    description: {type: String},
    readIcon: {type: String},
    activities: {type: Array},
    opened: {type: Boolean, reflect: true}
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

    .time{
      display: inline-block;
      align: left;
      padding: 10px;
    }
    
    .week{
      padding: 0px 1000px 0px 0px;
      margin: left;
    }

    .details{
      padding: 8px 8px;
      color: blue;
      display: inline-block;
      margin: 8px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.week = 'Week 1';
    this.timeIcon = 'device:access-alarm'
    this.title = 'Introduction';
    this.timeToComplete = 2;
    this.description = 'This is the intro to the course';
    this.readIcon = 'communication:import-contacts'
    this.activities = [];
    this.opened = false;
  }

  toggleEvent(e){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    this.opened = state;

  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened') {
        this.dispatchEvent(new CustomEvent('opened-changed',
        {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail: {
            value: this[propName]
          }
        }));
      }
    });
  };

  render() {
    return html`
      <div class="wrapper">
        <div class="week">${this.week}</div>
        <div class="others">
          <simple-icon accent-color="lime" icon="${this.timeIcon}">
          </simple-icon>
          <div class="time">This should take ${this.timeToComplete} hours</div>
          <div class="title">${this.title}</div>
          <div class="desc">${this.description}</div>
          <simple-icon accent-color="lime" icon="${this.readIcon}">
          </simple-icon>
          <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
            <summary>See all</summary>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('week-element', WeekElement);