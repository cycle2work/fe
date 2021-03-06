import React, { Component } from "react";
import PropTypes from "prop-types";

import { Col, Row } from "antd";

import styled from "styled-components";
import * as colors from "../../../../../commons/colors";
import { FormattedMessage } from "react-intl";

const Container = styled.div`
    min-height: 256px;
    background-color: ${colors.white};
    border-radius: 16px;
    color: black;
    margin: 24px 0;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15), 0 1px 30px 0 rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 991px) {
        height: auto;
        padding-bottom: 30px;
    }
`;

const TeamImage = styled.div`
    width: 150px;
    height: 150px;
    margin: 50px;
    border-radius: 6px;
    border: 15px solid ${colors.lighterGrey};
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    @media screen and (max-width: 991px) {
        margin: 30px auto;
    }
`;

const TeamInfo = styled.div`
    margin: 0 35px;
    @media screen and (max-width: 991px) {
        text-align: center;
    }
`;

const Name = styled.p`
    font-size: calc(16px + 0.2vw);
    font-weight: 400;
    margin: 0;
`;

const Where = styled.span`
    color: ${colors.grey};
    font-size: calc(14px + 0.2vw);
`;

const Members = styled.div`
    color: ${colors.black};
    font-size: calc(14px + 0.2vw);
    line-height: 40px;
    font-weight: 400;
    margin-top: 30px;
`;

const MembersNumber = styled.p`
    display: inline-block;
    color: ${colors.white};
    margin-right: 4px;
    background-color: ${colors.primaryColor};
    text-align: center;
    line-height: 40px;
    font-size: calc(16px + 0.2vw);
    border-radius: 40px;
    width: 40px;
    height: 40px;
`;

export default class TeamCard extends Component {
    static propTypes = {
        team: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile: PropTypes.string.isRequired,
            member_count: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
        }),
    };

    static defaultProps = {
        team: {
            name: "Mondora srl sb",
            profile:
                "https://dgalywyr863hv.cloudfront.net/pictures/clubs/148440/4989684/2/large.jpg",
            member_count: "7",
            city: "",
            state: "Berbenno di Valtellina",
            country: "- SO",
        },
    };

    render() {
        const { team } = this.props;
        return (
            <Container>
                <Row type="flex" justify="center" align="middle" gutter={24}>
                    <Col xs={24} md={10}>
                        <TeamImage imageUrl={team.profile} />
                    </Col>
                    <Col xs={24} md={14}>
                        <TeamInfo>
                            <Name>{team.name}</Name>
                            <Where>{`${team.state} ${team.country}`}</Where>
                            <Members>
                                <MembersNumber>{team.member_count}</MembersNumber>{" "}
                                <FormattedMessage id="dashboard.stats.card.team.members.active" />
                            </Members>
                        </TeamInfo>
                    </Col>
                </Row>
            </Container>
        );
    }
}
