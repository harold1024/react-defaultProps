import React from 'react';
import './wl-search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
        };
        this.subForm = this.subForm.bind(this);
        this.showPanel = this.showPanel.bind(this);
        this.onClick = this.onClick.bind(this);
    };
    componentWillMount() {
    };
    showPanel() {
        console.log(132)
        console.log(this.state.showPanel)
        this.setState({
            showPanel: !this.state.showPanel,
        });
    };
    // 搜索功能
    subForm() {

    };
    onClick(index) {
        this.props.optionItem(index);
        this.setState({
            showPanel: false,
        });
    };
    render() {
        return (
            <div>
                <form className="wl-select" action="">
                    <div className="wl-select-main">
                        <div className="select-head" id="wl-select-head" onClick={this.showPanel}>
                            <span className="select-head-cont" id="wl-select-head-cont">{this.props.breadcrumb[0].value}</span>
                            {/* <span className="select-icon iconfont iconfanhui-copy"></span> */}
                        </div>
                        {
                            this.state.showPanel ?
                                <div className="option" id="wl-option">
                                    <ul>
                                        {
                                            this.props.breadcrumb.map((item, i) => (
                                                <li key={i} value={item.value} className="option-item" onClick={this.onClick}>{item.value}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                : ""
                        }
                    </div>
                    <div className="wl-input">
                        <input className="wl-input-main" type="text" placeholder="请输入您要搜索的内容" />
                        <span className="iconfont iconfangdajing" onClick={this.subForm}>搜索</span>
                    </div>
                </form>
            </div>
        )
    };
}


Search.defaultProps = {
    // breadcrumb: [{link:"1"},{link:"2"},{link:"3"}],
    breadcrumb: [],
    optionItem: () => {},
};

Search.propTypes = {
    // attr: PropTypes.string,
    // data: PropTypes.arrayOf(PropTypes.any),
};


export default Search;
