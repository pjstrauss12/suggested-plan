import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class WeekElement extends LitElement {
  static properties = {
    header: { type: String },
    week: {type: String},
    title: {type: String},
    timeToComplete: {type: Number},
    description: {type: String},
    activities: {type: Array},
    opened: {type: Boolean, reflect: true}
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--suggested-plan-background-color);
    }
    .wrapper{
      display: flex;
      flex-direction: row;
      gap: 10rem;
      padding: 20px;
      border: 2px black solid;
    }
    
    .week{
      text-align: center;
    }

    .details{
      padding: 8px 8px;
      color: blue;
      background-color: orange;
      display: inline-block;
      margin: 8px;
    }
    .time{
      font-family: "OpenSans-Light", Arial, sans-serif;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.week = 'Week 1';
    this.title = 'Introduction';
    this.timeToComplete = 2;
    this.description = 'This is the intro to the course';
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
        <div class="title">${this.title}</div>
        <div class="time">This should take ${this.timeToComplete} hours</div>
        <div class="desc">${this.description}</div>
        <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
          <summary>Click to see more</summary>
        </details>
      </div>
    `;
  }
}

customElements.define('week-element', WeekElement);