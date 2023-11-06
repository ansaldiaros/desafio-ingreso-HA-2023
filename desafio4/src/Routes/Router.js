import { Route, Routes, Redirect } from "react-router-dom";
import { RecursosPage } from '../pages/RecursosPage'
import { InputPage } from "../pages/InputPage";
import { TablaPage } from "../pages/TablaPage";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RecursosPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/tabla" element={<TablaPage />} />
        </Routes>
    )
}

export default Router;