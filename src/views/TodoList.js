import React, {Component} from "react";
import { List, Input, Button, Switch, Icon, Modal } from 'antd';
import "../styles/todoList.css";
import { connect } from 'react-redux';
import {add_item, del_item, update_item, update_list_item} from "../store/actionCreators";
import {setStorage} from "../libs/localstorage";




class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.update = this.update.bind(this);
        this.del = this.del.bind(this);
        this.state = {
            value: '',
            status: 0
        }
    }
    componentDidMount() {
    }


    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    switchTab(status) {
        this.setState({
            status
        });
        this.props.update_list_item(status);
        console.log(status)
    }

    render() {

        const {value, status} = this.state;
        return (
            <div className="todoList">



            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        list: state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        add_item: (value) => {
            let data = {
                id: new Date().getTime(),
                value,
                status: 1
            };
            dispatch(add_item(data))
        },
        del_item: (id) => {
            dispatch(del_item(id))
        },
        update_item: (status, id) => {
            dispatch(update_item({status, id}))
        },
        update_list_item: (status) => {
            dispatch(update_list_item(status))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);