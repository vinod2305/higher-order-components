import React from "react";

const withData = (Wrappedcomponent) => {
  class withData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      fetch(this.props.dataSource)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data.slice(0, 3) }));
    }
    render() {
      return this.state.data.length < 1 ? (
        <h1>Loading</h1>
      ) : (
        <Wrappedcomponent data={this.state.data} {...this.props} />
      );
    }
  }

  return withData;
};

export default withData;
