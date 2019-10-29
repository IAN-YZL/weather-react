import React from 'react';

const ToolBar = (props) => {
    return(
        <nav>
            <div style={{flex:1}}>
                <input className="search-input"/>
                <button className="search-btn">
                    <i className="fa fa-search">
                        ::before
                    </i>
                </button>
                <button className="temp-switch">
                    <i className="fa fa-thermometer-empty">
                        ::before
                    </i>
                    <sup>°</sup>
                    "C"
                </button>
            </div>
        </nav>
    );
}

export default ToolBar;