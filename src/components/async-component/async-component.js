import React from 'react';
import LoadingSpiner from '../loading-spinner/loading-spinner';

class Async extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Component: void 0
        }
    }

    async componentDidMount() {
        const props = await this.props.provider();
        this.setState({ Component: props.default });
    }

    render() {
        const { Component } = this.state;
        return(
            <React.Fragment>
                { Component ? <Component/> : <LoadingSpiner/> }
            </React.Fragment>
        )
    }
}

export default Async;