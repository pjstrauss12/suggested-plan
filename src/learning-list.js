import { LitElement, html, css } from 'lit';
import './week-element.js'
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class LearningList extends LitElement {
  static properties = {
    videos: { type: Array },
    readings: { type: Array },
    quizzes: { type: Array }
  }

  static styles = css`
    .divider{
      border-top: 1px solid black;
    }
    .wrapper{
      display: flex;
      flex-direction: column;
      border-top: 1px solid black;
    }
    .title .time{
      flex: 1;
      color: black;
      font-size: 12px;
    }
    .icon{
      display: inline-block;
    }
    
  `;

  constructor() {
    super();
    this.videos = [];
    this.readings = [];
    this.quizzes = [];
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
     <div class="wrapper">
      <div class="divider">
        ${this.videos.map((vid) => html`
        <simple-icon class="icon" style="--simple-icon-color: orange" icon="av:play-circle-outline"></simple-icon>
          <div class="title">${vid.title}</div>
          <div class="time">${vid.time} minutes</div>
        `)}
      </div>
      <div class="divider">
        ${this.readings.map((read) => html`
        <simple-icon class="icon" style="--simple-icon-color: green" icon="communication:import-contacts"></simple-icon>
          <div class="title">${read.title}</div>
          <div class="time">${read.time} minutes</div>
        `)}
      </div>
      <div class="divider">
        ${this.quizzes.map((quiz) => html`
        <simple-icon class="icon" style="--simple-icon-color: red" icon="av:library-books"></simple-icon>
          <div class="title">${quiz.title}</div>
          <div class="time">${quiz.time} minutes</div>
        `)}
      </div>
     </div>
    `;
  }
}

customElements.define('learning-list', LearningList);