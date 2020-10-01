import React, { Component } from 'react';

import AddItemButton from '../../components/AddItem/AddItemButton/AddItemButton';
import InputItem from '../../components/AddItem/InputItem/InputItem';
import ItemList from '../../components/ItemList/ItemList';

class toDoList extends Component {
    state = {
        newItem: "",
        list: []
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    };

    addItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const updatedList = [...this.state.list];

        updatedList.push(newItem);

        this.setState({
            list: updatedList,
            newItem: ""
        });
    };

    deleteItem = (id) => {
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    };

    render() {
        return (
            <div className="App">
                <div>
                    Add an Item...
                    <br/>
                    <br/>
                    <InputItem 
                        value = {this.state.newItem}
                        updateInput = {e => this.updateInput("newItem", e.target.value)}
                    />
                    <br/>
                    <br/>
                    <AddItemButton clicked = {() => this.addItem()}/>

                    <ItemList 
                        items = {this.state.list}
                        itemDelete = {this.deleteItem}/>
                </div>
            </div>
        );
    };
};

export default toDoList;