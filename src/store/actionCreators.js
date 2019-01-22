import {ADD_TODO, DEL_TODO, UPDATE_LIST_TODO, UPDATE_TODO, TOGGLE_TODO} from "./types"
function initAction(type, value) {
    return {
        type,
        value
    }
}
// 添加
export const add_item = value => initAction(ADD_TODO, value);
// 删除
export const del_item = value => initAction(DEL_TODO, value);
// 更新
export const update_item = value => initAction(TOGGLE_TODO, value);
// 更新
export const update_list_item = value => initAction(UPDATE_LIST_TODO, value);

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};