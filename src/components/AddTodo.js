import React from 'react'
import { connect } from 'react-redux'
import {add_item} from '../store/actionCreators'
import {Button, Input, Modal} from "antd";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value:""
        }
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit() {
        // console.log(store.getState())
        if (!this.state.value){
            Modal.error({
                title: '提示',
                content: '请输入点什么吧...',
            });
            return
        }
        this.props.add_item(this.state.value);
        this.setState({
            value: ""
        })
    }
    render() {
        const {value} = this.state;
        return (
            <div className="todoListInput" style={{marginBottom: "20px"}}>
                <Input onChange={this.handleChange} value={value} style={{width: '300px'}} size="large" placeholder="想要做点儿什么？" />
                <Button onClick={this.handleSubmit} style={{marginLeft: '20px'}} type="primary" size="large">添加</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        add_item: (text) => {
            let data = {
                id: new Date().getTime(),
                text
            };
            dispatch(add_item(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
