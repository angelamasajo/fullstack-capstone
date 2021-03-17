import React, { Component } from 'react'
import PlantContext from '../PlantContext'
import config from '../config'

class AddPlant extends Component {
  static contextType = PlantContext;

  state = {
    title: '',
    summary: '',
    plant_type: '',
    toxType: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const postBody = {
      name: this.state.title,
      care_details: this.state.summary,
      plant_type: this.state.plantType,
      toxicity: this.state.toxType
    }

    fetch(`${config.API_ENDPOINT}/plants`, {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((error) => {
            throw error
          })
        }
        return res.json()
      })
      .then((data) => {
        this.props.history.push('/all-plants')
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render () {
    return (
      <div className="AddPlant">

        <header>
          <h1>Add New Plant</h1>
        </header>
        
        <form id="record-plant" onSubmit={this.handleSubmit}>
          <section className="form-section overview-section">
            <label htmlFor="title">Plant name</label>

            <br />

            <input 
              type="text" 
              id='title'
              value={this.state.title}
              name="title" 
              placeholder="i.e., Monstera deliciosa" 
              onChange={this.handleChange}
              required 
            />
          </section>
          <section className="form-section overview-section">
            <label htmlFor="summary">Plant care details</label>

            <br />

            <textarea 
              name="summary" 
              rows="15" 
              value={this.state.summary}
              placeholder="i.e., Thrives in bright to medium indirect light. Not suited for intense, direct sun but can be acclimated to withstand it. Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Monsteras can benefit from filtered water or leaving water out overnight before using. "
              required
              onChange={this.handleChange}

            />
          </section>

          <section className="form-section plant-type-section">
            
            <h2>Plant type</h2>
              
            <input 
              type="radio" 
              name="plantType" 
              id="plant-type-succulent" 
              value="Succulent" 
              className="plant-type-radio" 
              onChange={this.handleChange}

            />
              <label htmlFor="plant-type-succulent">
                <span>Succulent</span>
              </label>
              
              <br />

              <input 
                type="radio" 
                name="plantType" 
                id="plant-type-tropical" 
                value="Tropical" 
                className="plant-type-radio" 
                onChange={this.handleChange}

              />
              <label htmlFor="plant-type-tropical">
                <span>Tropical</span>
              </label>
                
              <br />

              <input 
                type="radio" 
                name="plantType" 
                id="plant-type-holiday" 
                value="Holiday" 
                className="plant-type-radio"
                onChange={this.handleChange}
 
              />
              <label htmlFor="plant-type-holiday">
                <span>Holiday</span>
              </label>

              <br />
              
              <input 
                type="radio" 
                name="plantType"  
                id="plant-type-trailing" 
                value="Trailing" 
                className="plant-type-radio"
                onChange={this.handleChange}

              />
              <label htmlFor="plant-type-trailing">  
                <span>Trailing/Climbing</span>
              </label>            


              <br />
              
              <input 
                type="radio" 
                name="plantType" 
                id="plant-type-other" 
                value="Other" 
                className="plant-type-radio" 
                onChange={this.handleChange}

              />
              <label htmlFor="plant-type-other">  
                <span>Other</span>
              </label>


          </section>

          <section className="form-section plant-toxicity-section">
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
          </section>

          <section className="button-section">
            <button type="submit">Submit</button>
            {/* <button type="reset">Reset</button> */}
          </section>
        </form>
      </div>
    )
  }
}

export default AddPlant;