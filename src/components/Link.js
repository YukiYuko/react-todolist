import React from 'react'
import PropTypes from 'prop-types'
import {Button} from "antd";
import {VisibilityFilters} from "../store/actionCreators"

const ButtonGroup = Button.Group;

const Link = ({ active, onClick }) => (
    <ButtonGroup style={{marginBottom: '20px'}} size="large" shape="circle">
        <Button onClick={() => onClick(VisibilityFilters.SHOW_ALL)} type={active === VisibilityFilters.SHOW_ALL ? "primary" : "default"}>全部</Button>
        <Button onClick={() => onClick(VisibilityFilters.SHOW_ACTIVE)} type={active === VisibilityFilters.SHOW_ACTIVE ? "primary" : "default"}>未完成</Button>
        <Button onClick={() => onClick(VisibilityFilters.SHOW_COMPLETED)} type={active === VisibilityFilters.SHOW_COMPLETED ? "primary" : "default"}>已完成</Button>
    </ButtonGroup>
);

Link.propTypes = {
    active: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link
