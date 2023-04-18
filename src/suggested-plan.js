import { LitElement, html, css } from 'lit';
import './week-element.js'
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class SuggestedPlan extends LitElement {
  static properties = {
    header: { type: String },
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
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
     <week-element></week-element>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);