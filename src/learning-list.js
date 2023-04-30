import { LitElement, html, css } from 'lit';
import './week-element.js'
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class LearningList extends LitElement {
  static properties = {
    videos: { type: Array },
    readings: { type: Array },
    quizzes: { type: Array },
    numVids: { type: Number },
    numReading: { type: Number },
    numQuizzes: { type: Number }
  }

  static styles = css`
    
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
     
    `;
  }
}

customElements.define('learning-list', LearningList);