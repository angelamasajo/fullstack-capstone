import React, { Component } from 'react';
// import './FilterOptions.css' //add css

class FilterOptions extends Component {
  render () {
    return (
      <div className="FilterOptions">
        
        <div className="Filtering_Type">
          <form>
          <fieldset>
            <legend>Plant Type</legend>

            <label htmlFor="filter_allTypes">
              <input type="radio" value="all" id="filter_allTypes" name="filterType"/>
              All
            </label>

            <label htmlFor="filter_succulent">
              <input type="radio" value="succulent" id="filter_succulent" name="filterType"/>
              Succulent
            </label>

            <label htmlFor="filter_tropical">
              <input type="radio" value="tropical" id="filter_tropical" name="filterType"/>
              Tropical
            </label>

            <label htmlFor="filter_holiday">
              <input type="radio" value="holiday" id="filter_holiday" name="filterType"/>
              Holiday
            </label>

            <label htmlFor="filter_trailing">
              <input type="radio" value="trailing" id="filter_trailing" name="filterType"/>
              Trailing
            </label>

            <label htmlFor="filter_other">
              <input type="radio" value="other" id="filter_other" name="filterType"/>
              Other
            </label>
          </fieldset>
          </form>
        </div>

        <div className="Filtering_Toxicity">
          <form>
          <fieldset>

            <legend>Toxicity</legend>

            <label htmlFor="filter_allToxicity">
              <input type="radio" value="all" id="filter_allToxicity" name="filterToxicity"/>
              All
            </label>


            <label htmlFor="filter_toxic">
              <input type="radio" value="toxic" id="filter_toxic" name="filterToxicity"/>
              Toxic
            </label>

            <label htmlFor="filter_nontoxic">
              <input type="radio" value="nontoxic" id="filter_nontoxic" name="filterToxicity"/>
              Non-toxic
            </label>
          </fieldset>
          </form>
        </div>

      </div>
    )
  }
}

export default FilterOptions;