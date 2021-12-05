import { Component } from "react";
import { Route, Routes  } from 'react-router-dom';

import Login from './Login';

export default class Layout extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/login" element={<Login />} />
            </Routes>
        )
    }
}