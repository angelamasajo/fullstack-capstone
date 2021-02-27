import React, { Component } from 'react';
// import './FilterOptions.css' //add css

class FilterOptions extends Component {
  render () {
    return (
      <div className="FilterOptions">
        
        <div className="Filtering_Type">
          <div className="FilterOption__type">
            <label htmlFor="filter_all">
              <input type="radio" value="all" id="filter_all" name="filter"/>
              All
            </label>
          </div>

          <div className="FilterOption__type">
            <label htmlFor="filter_succulent">
              <input type="radio" value="succulent" id="filter_succulent" name="filter"/>
              Succulent
            </label>
          </div>

          <div className="FilterOption__type">
            <label htmlFor="filter_tropical">
              <input type="radio" value="tropical" id="filter_tropical" name="filter"/>
              Tropical
            </label>
          </div>

          <div className="FilterOption__type">
            <label htmlFor="filter_holiday">
              <input type="radio" value="holiday" id="filter_holiday" name="filter"/>
              Holiday
            </label>
          </div>

          <div className="FilterOption__type">
            <label htmlFor="filter_trailing">
              <input type="radio" value="trailing" id="filter_trailing" name="filter"/>
              Trailing
            </label>
          </div>

          <div className="FilterOption__type">
            <label htmlFor="filter_other">
              <input type="radio" value="other" id="filter_other" name="filter"/>
              Other
            </label>
          </div>
        </div>

        <div className="Filtering_Toxicity">
          <div className="FilterOption__toxicity">
            <label htmlFor="filter_all">
              <input type="radio" value="all" id="filter_all" name="filter"/>
              All
            </label>
          </div>   

          <div className="FilterOption__toxicity">
            <label htmlFor="filter_toxic">
              <input type="radio" value="toxic" id="filter_toxic" name="filter"/>
              Toxic
            </label>
          </div>          

          <div className="FilterOption__toxicity">
            <label htmlFor="filter_nontoxic">
              <input type="radio" value="nontoxic" id="filter_nontoxic" name="filter"/>
              Non-toxic
            </label>
          </div>   
        </div>

      </div>
    )
  }
}

export default FilterOptions;