import React from 'react'
import PropTypes from 'prop-types'
import {Icon, List, Modal, Switch} from "antd";
import { connect } from 'react-redux';
import {add_item, del_item, update_item, update_list_item} from "../store/actionCreators";

const confirm = Modal.confirm;
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.del = this.del.bind(this);
    }
    del(id) {
        confirm({
            title: '你确定要删除该条数据吗?',
            content: '删除之后无法恢复，请三思~',
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
                this.props.del_item(id)
            }
        });
    }
    update(id) {
        this.props.update_item(id);
    }

    render() {
        const {todos} = this.props;
        return (
            <List
                bordered
                dataSource={todos}
                renderItem={item => {
                    return (
                        <List.Item>
                            <div className="flex">
                                <span>{item.text}</span>
                                <span>
                                        <Switch onChange={() => this.update(item.id)}
                                                checkedChildren={<Icon type="check" />}
                                                unCheckedChildren={<Icon type="close" />}
                                                checked={item.completed}
                                        />
                                        <Icon onClick={() => this.del(item.id)} className="del" type="delete" />
                                    </span>
                            </div>
                        </List.Item>
                    )
                }}
            />
        )
    }
}

// TodoList.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
// }
const mapDispatchToProps = (dispatch) => {
    return {
        del_item: (id) => {
            dispatch(del_item(id))
        },
        update_item: (id) => {
            dispatch(update_item(id))
        }
    }
};
export default connect(null,mapDispatchToProps)(TodoList);
