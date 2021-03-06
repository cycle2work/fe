import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { primaryColor } from "../../../../commons/colors";

const StyledHeader = styled.h2`
    color: ${primaryColor};
    font-weight: 700;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        text-align: center;
    }
`;

export default class SubHeader extends Component {
    static propTypes = {
        label: PropTypes.node.isRequired
    };

    render() {
        return <StyledHeader>{this.props.label}</StyledHeader>;
    }
}
