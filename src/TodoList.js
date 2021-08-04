import React, { Component, Fragment } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange} />
          <input
            type="button"
            value="提交"
            onClick={this.handleBtnClick} />
        </div>
        <ul>
          {
            this.state.list.map((t, i) => {
              return (
                <li
                  key={i}
                  onClick={this.handleItemDelete(i)}>{t}
                </li>
              )

            })
          }
        </ul>
      </Fragment>

    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(i) {
    const list =[...this.state.list];
    list.splice(i,1);
    this.setState({
      list:list
    })
  }
}
export default TodoList;