import React, { Component } from "react";
import PlantContext from "../PlantContext";
import config from "../config";
import "./AddEntry.css";

class AddEntry extends Component {
  static contextType = PlantContext;

  state = {
    title: "",
    description: "",
    mood: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const postBody = {
      name: this.state.title,
      description: this.state.description,
      mood: this.state.mood,
    };

    fetch(`${config.API_ENDPOINT}/entries`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        this.props.history.push("/all-entries");
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="AddEntry">
        <header>
          <h1>Add New Moodly Entry</h1>
        </header>

        <form id="record-entry" onSubmit={this.handleSubmit}>
          <section className="form-section overview-section">
            <label htmlFor="title">Title</label>

            <br />

            <input
              type="text"
              id="title"
              value={this.state.title}
              name="title"
              placeholder="i.e., I passed my interview"
              onChange={this.handleChange}
              required
            />
          </section>
          <section className="form-section overview-section">
            <label htmlFor="description">Moodly entry description</label>

            <br />

            <textarea
              name="description"
              id="description"
              rows="15"
              value={this.state.description}
              placeholder="i.e., Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat. Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis."
              required
              onChange={this.handleChange}
            />
          </section>

          <section className="form-section mood-section">
            <h2>Mood</h2>

            <input
              type="radio"
              name="happy"
              id="mood-happy"
              value="happy"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-happy">
              <span>happy</span>
            </label>

            <br />

            <input
              type="radio"
              name="sad"
              id="mood-sad"
              value="sad"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-sad">
              <span>sad</span>
            </label>

            <br />

            <input
              type="radio"
              name="content"
              id="mood-content"
              value="content"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-content">
              <span>content</span>
            </label>

            <br />

            <input
              type="radio"
              name="angry"
              id="mood-angry"
              value="angry"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-angry">
              <span>angry</span>
            </label>

            <br />

            <input
              type="radio"
              name="frustrated"
              id="mood-frustrated"
              value="frustrated"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-frustrated">
              <span>frustrated</span>
            </label>

            <br />
            <input
              type="radio"
              name="anxious"
              id="mood-anxious"
              value="anxious"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-anxious">
              <span>anxious</span>
            </label>

            <br />

            <input
              type="radio"
              name="excited"
              id="mood-excited"
              value="excited"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-excited">
              <span>excited</span>
            </label>

            <br />

            <input
              type="radio"
              name="plantType"
              id="mood-other"
              value="other"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="plant-type-other">
              <span>other</span>
            </label>
          </section>

          {/* <section className="form-section plant-toxicity-section">
            <h2>Toxicity</h2>
            <input
              type="radio"
              name="toxType"
              value="Toxic"
              id="plant-type-toxic"
              className="plant-type-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="plant-type-toxic">
              <span>Toxic</span>
            </label>

            <br />

            <input
              type="radio"
              name="toxType"
              value="Pet-safe"
              id="plant-type-petsafe"
              className="plant-type-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="plant-type-petsafe">
              <span>Pet-safe</span>
            </label>
          </section> */}

          <section className="button-section">
            <button className="add-plant-button" type="submit">
              Submit
            </button>
          </section>
        </form>
      </div>
    );
  }
}

export default AddEntry;
