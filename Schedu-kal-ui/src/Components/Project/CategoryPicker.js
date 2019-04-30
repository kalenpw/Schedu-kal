import React from 'react';
import styled from 'styled-components';
import iconToCategoryMap from "Utils/icon-category-map.js";

const AbsoluteDiv = styled.div`
    position: absolute;
`;

class CategoryPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeIcon = (event, key) => {
        this.props.handleIconChange(event, key);
    }

    generateIconDisplays(){
        const iconToggler = [];
        for (let [icon, category] of iconToCategoryMap.entries()) {
            iconToggler.push(<i onClick={(event) => this.handleChangeIcon(event, category)} key={icon} className={"fa " + icon}></i>)
        }
        return iconToggler;
    }

    render() {
        return (
            <AbsoluteDiv>
                {this.generateIconDisplays()}
            </AbsoluteDiv>
        )
    }
}

export default CategoryPicker;