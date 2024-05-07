    import {Routes,Route} from 'react-router-dom'
    import Home from '../home/Home';
    import { ROUTES } from '../../utils/routes';
    import SingleProduct from '../Products/SingleProduct';
    import Profile from '../profile/Profile';

    const AppRoutes = ()=>{
        return(
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
                <Route path={ROUTES.PROFILE} element={<Profile/>}/>   
            </Routes>
            )
    }

    export default AppRoutes;