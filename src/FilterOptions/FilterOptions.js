import React, { Component } from 'react';
// import './FilterOptions.css' //add css

class FilterOptions extends Component {
  render () {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        
        <div className="Filtering_Type">
          <form>
          <fieldset>
            <legend>Plant Type</legend>

            <label htmlFor="filter_allTypes">
              <input 
                type="radio" 
                value="All" 
                id="filter_allTypes" 
                name="filterType"
                checked={filterOption === "All"}
                onChange={e => this.props.handleFilterChange(e.target.value)}
              />
              All
            </label>

            <label htmlFor="filter_succulent">
              <input 
                type="radio" 
                value="Succulent" 
                id="filter_succulent" 
                name="filterType"
                checked={filterOption === "Succulent"}
                onChange={e => this.props.handleFilterChange(e.target.value)}              
              />
              Succulent
            </label>

            <label htmlFor="filter_tropical">
              <input 
                type="radio" 
                value="Tropical" 
                id="filter_tropical" 
                name="filterType"
                checked={filterOption === "Tropical"}
                onChange={e => this.props.handleFilterChange(e.target.value)}
              />
              Tropical
            </label>

            <label htmlFor="filter_holiday">
              <input 
                type="radio" 
                value="Holiday" 
                id="filter_holiday" 
                name="filterType"
                checked={filterOption === "Holiday"}
                onChange={e => this.props.handleFilterChange(e.target.value)}
              />
              Holiday
            </label>

            <label htmlFor="filter_trailing">
              <input 
                type="radio" 
                value="Trailing" 
                id="filter_trailing" 
                name="filterType"
                checked={filterOption === "Trailing"}
                onChange={e => this.props.handleFilterChange(e.target.value)}
              />
              Trailing
            </label>

            <label htmlFor="filter_other">
              <input 
                type="radio" 
                value="Other" 
                id="filter_other" 
                name="filterType"
                checked={filterOption === "Other"}
                onChange={e => this.props.handleFilterChange(e.target.value)}
              />
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