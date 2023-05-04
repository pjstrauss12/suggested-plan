import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./learning-list";

class WeekElement extends LitElement {
  static properties = {
    week: {type: String},
    timeIcon: {type: String},
    title: {type: String},
    timeToComplete: {type: Number},
    description: {type: String},
    content: {type: Object},
    videos: {type: Array},
    reading: {type: Array},
    quizzes: {type: Array}
  }

  static styles = css`
    :host {
      font-family: "OpenSans-Light", Arial, sans-serif;
      font-size: 12px;
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
      font-size: 12px;
    }

  `;

  constructor() {
    super();
    this.week = '1';
    this.timeIcon = 'device:access-time'
    this.title = 'Introduction';
    this.timeToComplete = 2;
    this.description = 'This is the intro to the course';
    this.videos = [];
    this.reading = [];
    this.quizzes = [];
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
          <details class="details">
            <summary>See all</summary>
            <ul>
              <learning-list .videos=${this.content.videos} .readings=${this.content.reading} .quizzes=${this.content.quizzes}></learning-list>
            </ul>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('week-element', WeekElement);