import { Route, Routes } from 'react-router-dom'
import { Login } from '../Login'

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default RouterApp