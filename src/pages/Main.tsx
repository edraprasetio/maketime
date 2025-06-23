import { Routes, Route } from 'react-router-dom'
import { Practice } from './Practice'

const Main = () => (
    <Routes>
        <Route
            path='/'
            element={
                <>
                    <Practice />
                </>
            }
        ></Route>
    </Routes>
)

export default Main
