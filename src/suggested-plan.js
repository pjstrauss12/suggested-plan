import { LitElement, html, css } from 'lit';
import './week-element.js'
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class SuggestedPlan extends LitElement {
  static properties = {
    header: { type: String },
    weeks: {type: Array}
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
    .item {
      display: inline-flex;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.weeks = [];
    this.updateWeeks();
  }

  updateWeeks(){
    const address = '../api/weeks';
    fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
    })
    .then((data) => {
        this.weeks = data;
    });
}

  render() {
    return html`
     <week-element></week-element>
     <div class="wrapper">
            ${this.weeks.map(week => html`
            <div class="item">
                <week-element 
                week="${week.week}" 
                timeIcon="${week.timeIcon}" 
                title="${week.title}" 
                timeToComplete="${week.timeToComplete}"
                description="${week.description}"
                readIcon="${week.readIcon}"
                activities="${week.activities}">
              </week-element>
            </div>
            `)}
        </div>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);