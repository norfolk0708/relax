import ProductsEditor from './pages/ProductEditor'
import About from './pages/About'
import Error from './pages/Error'
import { Navigate } from 'react-router-dom'
import OrderList from './pages/OrderList'


const adminRoutes = [
    {path: '/productsEditor', element: <ProductsEditor />},
    {path: '/', element: <About />},
    {path: '/orderList', element: <OrderList />},
    {path: '/error', element: <Error />},
    {path: '/*', element: <Navigate to='/error' />}, 
]

const publicRoutes = [
    {path: '/', element: <About/>},
    {path: '/error', element: <Error />},
    {path: '/*', element: <Navigate to='/error' />}, 
]

const routes = true ? adminRoutes : publicRoutes 

export default routes