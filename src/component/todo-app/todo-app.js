import Title from "../app-header";
import Input from "../app-search-input";
import Button from "../item-status-button";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import React from "react";
import "./todo-app.css";


export default class TodoApp extends React.Component  {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink juice'),
            this.createTodoItem('Study React'),
            this.createTodoItem('Make an awesome todo-app')
        ],
        term: ""
    }

    createTodoItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    onSearchChange = (term) => {
        this.setState({term})
    }


    checkDoneItem = () => {
        const a = this.state.todoData.filter(el => el.done);
        this.setState(({todoData}) => {
            return {
                todoData: a
            }
        })
    }

    deleteItem = (id)=> {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el)=> el.id === id );

            const newArr = [ // масив старый изменять нельзя по этому мы создаем новый ммасив и вырыезаем значение до нашего и после нашего и добавляем в новый масв
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ];
            return {
                todoData: newArr
            }

        })

    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

            // добавление нового элемента в список, id генерируем
        this.setState(({todoData}) => {
             const newArr = [...todoData, newItem];

            return  {
                todoData: newArr
            }
        })
    }

    toggleProperty (arr, id, propName) {
            const idx = arr.findIndex((el)=> el.id === id ); // масив старый изменять нельзя по этому мы создаем новый ммасив и вырыезаем значение до нашего и после нашего и добавляем в новый масв

            const oldItem = arr[idx];
            const newItem = {...oldItem,
                [propName]: !oldItem[propName] };



            return [
                ...arr.slice(0,idx),
                newItem,
                ...arr.slice(idx+1)
            ];
    }

    onToggleDone = (id) => {
        this.setState(({todoData})=> {
            return {
                todoData: this.toggleProperty(todoData,id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData})=> {
            return {
                todoData: this.toggleProperty(todoData,id, 'important')
            }
        });
    }

    search(items,term) {
        if (term.length === 0) {
            return (
                items
            )
        }

       return  items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }

        )
    }

    render() {
    const {todoData, term} = this.state;
    const visibleItems = this.search(todoData, term);
    const doneItemCount = todoData.filter((el) => el.done).length; //почему проходимся по tododata а не по ofDoneItem.newarray
    const todoItemCount = todoData.length - doneItemCount;

        return (
            <div className="todo-app">
                <Title toDo={todoItemCount} done={doneItemCount}/>
                <div className="top-panel d-flex">
                    <Input onSearchChange={this.onSearchChange}/>
                    <Button checkDoneItem={this.checkDoneItem}/>
                </div>
                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}
                />

                 <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }

} ;



