import React, { Component } from 'react'

class AddPlant extends Component {
  render () {
    return (
      <div className="AddPlant">

        <header>
          <h1>Add New Plant</h1>
        </header>
        
        <form id="record-plant">
          <section className="form-section overview-section">
            <label htmlFor="plant-title">Plant name</label>

            <br />

            <input type="text" name="plant-title" placeholder="i.e., Monstera deliciosa" required />
          </section>
          <section className="form-section overview-section">
            <label htmlFor="plant-summary">Plant care details</label>

            <br />

            <textarea name="plant-summary" rows="15" placeholder="i.e., Thrives in bright to medium indirect light. Not suited for intense, direct sun but can be acclimated to withstand it. Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Monsteras can benefit from filtered water or leaving water out overnight before using. "required></textarea>
          </section>

          <section className="form-section plant-type-section">
            
            <h2>Plant type</h2>
              
            <input type="radio" name="plant-type" id="plant-type-succulent" value="0" className="plant-type-radio" />
              <label htmlFor="plant-type-succulent">
                <span>Succulent</span>
              </label>
              
              <br />

              <input type="radio" name="plant-type" id="plant-type-tropical" value="1" className="plant-type-radio" />
              <label htmlFor="plant-type-tropical">
                <span>Tropical</span>
              </label>
                
              <br />

              <input type="radio" name="plant-type" id="plant-type-holiday" value="1" className="plant-type-radio" />
              <label htmlFor="plant-type-holiday">
                <span>Holiday</span>
              </label>

              <br />
              
              <input type="radio" name="plant-type"  id="plant-type-trailing" value="1" className="plant-type-radio"/>
              <label htmlFor="plant-type-trailing">  
                <span>Trailing/Climbing</span>
              </label>            


              <br />
              
              <input type="radio" name="plant-type" id="plant-type-other" value="1" className="plant-type-radio" />
              <label htmlFor="plant-type-other">  
                <span>Other</span>
              </label>


          </section>

          <section className="form-section plant-toxicity-section">
            <h2>Toxicity</h2>
            <input type="radio" name="plant-type" id="plant-type-toxic" className="plant-type-radio" />
            <label htmlFor="plant-type-toxic">
              <span>Toxic</span>
            </label>

            <br />

            <input type="radio" name="plant-type" id="plant-type-nontoxic" className="plant-type-radio" />
            <label htmlFor="plant-type-nontoxic">
              <span>Non-toxic</span>
            </label>
          </section>

          <section className="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </div>
    )
  }
}

export default AddPlant;