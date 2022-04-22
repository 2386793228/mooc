import 'antd/dist/antd.css'

import { Button, Input, List } from 'antd';
import React, { Component } from 'react'

import store from './store/index'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleIInputChange = this.handleIInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
    console.log(store.getState());
  }

  render() {
    return (
      <div style={{ margin: '10px 0 0 10px' }}>
        <div>
          <Input 
            value={this.state.inputValue} 
            placeholder='todo info' 
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.handleIInputChange}
          />
          <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>

    )
  }
  handleIInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
  handleItemDelete(index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
}

export default TodoList