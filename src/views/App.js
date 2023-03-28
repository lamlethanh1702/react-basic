import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
// Component: class component và function component
// sử dụng cú pháp JSX
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
// Lưu ý cái Switch được thay bằng Routes
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/about">
                            <MyComponent />
                        </Route>
                        <Route path="/user" exact>
                            <ListUser />
                        </Route>
                        <Route path="/user/:id">
                            <DetailUser />
                        </Route>
                    </Switch>
                </header>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
