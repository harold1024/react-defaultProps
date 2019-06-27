import React from 'react';
// import Input from './../Input/Input'
import Search from './../../components/wl-search'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumb: [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "1" }, { value: "2" }, { value: "3" }],
        };
    }
    optionItem(value) {
        console.log(value)
    }
    render() {
        return (
            <div>
                <Search breadcrumb={this.state.breadcrumb} optionItem={value => this.optionItem(value)} />
            </div>
        );
    }
}

export default Home;
