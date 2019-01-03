import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Particles from "react-particles-js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChanged = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div>
        <div className="particles">
          <Particles
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 5
                  }
                },
                number: {
                  value:30,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
              }
            }}
          />
        </div>
        <div className="tc" id="zxc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChanged} />
          <CardList robots={filteredRobots} />
        </div>
      </div>
    );
  }
}
export default App;
