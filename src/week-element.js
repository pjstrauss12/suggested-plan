import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class WeekElement extends LitElement {
  static properties = {
    week: {type: String},
    timeIcon: {type: String},
    title: {type: String},
    timeToComplete: {type: Number},
    description: {type: String},
    readIcon: {type: String},
    activities: {type: Array}
  }

  static styles = css`
    :host {
      font-family: "OpenSans-Light", Arial, sans-serif;
    }
    .wrapper{
      display: flex;
      flex-direction: row;
      padding: 20px;
      gap: 10rem;
      border: 2px solid black;
    }

    .week{
      margin: auto;
    }

    .time{
      display: inline-block;
      align: left;
      padding: 10px;
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
    this.week = '1';
    this.timeIcon = 'device:access-alarm'
    this.title = 'Introduction';
    this.timeToComplete = 2;
    this.description = 'This is the intro to the course';
    this.readIcon = 'communication:import-contacts'
    this.activities = ["read", "write"];
  }

  
  render() {
    return html`
      <div class="wrapper">
        <div class="week">Week ${this.week}</div>
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
            <ul>
              <div class="activity">${this.activities}</div>
            </ul>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('week-element', WeekElement);