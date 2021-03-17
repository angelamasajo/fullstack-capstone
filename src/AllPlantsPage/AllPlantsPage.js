// import React, { Component } from "react";
// import PlantList from "../PlantList/PlantList";
// import SearchFilter from "../SearchFilter/SearchFilter";
// import PlantContext from "../PlantContext";
// import config from "../config";
// class AllPlantsPage extends Component {
//   static contextType = PlantContext;

//   state = {
//     searchTerm: "",
//     searchName: "",
//     filterOption: "All",
//     filterOptionTox: "all",
//     plantType: "all",
//     plantToxicity: "all",
//     // allPlants: [],
//     plantData: [],
//     filteredData: []
//   };

//   componentDidMount() {
//     fetch(`${config.API_ENDPOINT}/plants`)
//       .then((plantsRes) => {
//         if (!plantsRes.ok) {
//           return plantsRes.json().then((e) => Promise.reject(e));
//         }
//         return plantsRes.json();
//       })
//       .then((plantData) => {
//         this.setState({ plantData, filteredData: plantData });
//         console.log(plantData);
//       })
//       .catch((error) => {
//         console.error({ error }); // eslint-disable-line
//       });
//   }

//   fetchPlants = () => {
//     fetch(`${config.API_ENDPOINT}/plants`)
//       .then((data) => {
//         if (!data.ok) {
//           throw new Error("Something went wrong.");
//         }
//         return data.json();
//       })
//       .then((data) => {
//         this.setState({ plantData: data });
//         console.log(data, "plant data");
//       });
//   };

//   updateSearchTerm(term) {
//     this.setState(
//       {
//         searchTerm: term,
//         searchName: term.toLowerCase()
//       },
//       () => {
//         this.filterPlants();
//       }
//     )
//     // const data = this.state.plantData.filter((file) =>
//     //   file.name.toLowerCase().includes(term.toLowerCase())
//     // );
//     // console.log(data, "search term");
//     // this.setState({
//     //   plantData: data,
//     //   searchTerm: term,
//     // });
//   }

//   //fix filter on the back end
//   updateFilterOption(option) {
//     this.setState(
//       {
//         plantType: option.toLowerCase(),
//         filterOption: option,
//       },
//       () => {
//         this.filterPlants();
//       }
//     );

//     // console.log(option)
//     // const data = option === 'All'
//     //   ? this.state.plantData
//     //   : this.state.plantData
//     //     .filter(file => file.plant_type.toLowerCase().includes(option.toLowerCase()))
//     // console.log(data, 'data')
//     // this.setState({
//     //   plantData: data,
//     //   filterOption: option,

//     // })
//   }

//   updateFilterOptionTox(tox) {
//     // console.log(tox)
//     // const data = tox === 'all'
//     //   ? this.state.plantData
//     //   : this.state.plantData
//     //     .filter(file => file.toxicity.toLowerCase().includes(tox.toLowerCase()))
//     // this.setState({
//     //   plantData: data,
//     //   filterOptionTox: tox
//     // })
  
//     this.setState(
//       {
//         plantToxicity: tox.toLowerCase(),
//         filterOptionTox: tox,
//       },
//       () => {
//         this.filterPlants();
//       }
//     );
//   }

//   filterPlants = () => {
//     const { searchName, plantType, plantToxicity, plantData } = this.state;
//     // console.log(plantType, 'plant type?')
//     console.log(plantData, 'data')
//     const filter = plantData.filter((plant) => {
//       // return plant['id'] === 4


//          // const list = this.props.files
//     //   .filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase())
//     //     && (filterOption === 'All' || file.plantType === filterOption)
//     //     && (filterOptionTox === 'All' || file.toxicity === filterOptionTox))
//     //   .map((file, key) => <PlantListItem {...file} key={key} />)
//       return (
//         (plant["plant_type"].toLowerCase() === plantType) &&
//         (plant["toxicity"].toLowerCase() === plantToxicity) &&
//         (plant["name"].toLowerCase() === searchName )
//       )
      
//     });
//     // console.log(plantData[1].name)
//     console.log(filter, "filter");
//     this.setState({ filteredData: filter });
//   };

//   render() {
//     return (
//       <div className="AllPlantsPage">
//         <SearchFilter
//           searchTerm={this.state.searchTerm}
//           handleUpdate={(term) => this.updateSearchTerm(term)}
//           filterOption={this.state.filterOption}
//           handleFilterChange={(option) => this.updateFilterOption(option)}
//           filterOptionTox={this.state.filterOptionTox}
//           handleFilterToxChange={(tox) => this.updateFilterOptionTox(tox)}
//         />
//         <PlantList
//           // allPlants={this.context.plantData}
//           allPlants={this.state.filteredData}
//           searchTerm={this.state.searchTerm}
//           filterOption={this.state.filterOption}
//           filterOptionTox={this.state.filterOptionTox}
//           history={this.props.history}
//         />
//       </div>
//     );
//   }
// }

// export default AllPlantsPage;



import React, { Component } from "react";
import PlantList from "../PlantList/PlantList";
import SearchFilter from "../SearchFilter/SearchFilter";
import PlantContext from "../PlantContext";
import config from "../config";
class AllPlantsPage extends Component {
  static contextType = PlantContext;

  state = {
    searchTerm: "",
    filterOption: "All",
    filterOptionTox: "all",
    plantData: [],
    filteredData: []
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/plants`)
      .then((plantsRes) => {
        if (!plantsRes.ok) {
          return plantsRes.json().then((e) => Promise.reject(e));
        }
        return plantsRes.json();
      })
      .then((plantData) => {
        this.setState({ plantData, filteredData: plantData });
      })
      .catch((error) => {
        console.error({ error }); // eslint-disable-line
      });
  }

  updateSearchTerm(term) {
    const data = this.state.plantData.filter((file) =>
      file.name.toLowerCase().includes(term.toLowerCase())
    );
    console.log(data, "search term");
    this.setState({
      // plantData: data,
      filteredData: data,
      searchTerm: term,
      // console.log(allPlants)
    });
    // console.log(this.state.allPlants, 'all plants updated')
  }

  updateFilterOption(option) {
    this.setState({
      // filteredData: this.state.plantData
      filteredData: this.state.filteredData
    }, () => {
      const data = option === 'All'
        // ? this.state.plantData
        ? this.state.filteredData
        : this.state.filteredData
          .filter(file => file.plant_type.toLowerCase().includes(option.toLowerCase()))
      this.setState({
        filteredData: data,
        filterOption: option,
      })
    })
  }

  updateFilterOptionTox(tox) {
    this.setState({
      // filteredData: this.state.plantData
      filteredData: this.state.filteredData
    }, () => {
      const data = tox === 'all'
        ? this.state.plantData
        : this.state.filteredData
          .filter(file => file.toxicity.toLowerCase().includes(tox.toLowerCase()))
      this.setState({
        filteredData: data,
        filterOptionTox: tox
      })
    })

  }

  render() {
    return (
      <div className="AllPlantsPage">
        <SearchFilter
          searchTerm={this.state.searchTerm}
          handleUpdate={(term) => this.updateSearchTerm(term)}
          filterOption={this.state.filterOption}
          handleFilterChange={(option) => this.updateFilterOption(option)}
          filterOptionTox={this.state.filterOptionTox}
          handleFilterToxChange={(tox) => this.updateFilterOptionTox(tox)}
        />
        <PlantList
          allPlants={this.state.filteredData}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          filterOptionTox={this.state.filterOptionTox}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default AllPlantsPage;