import { Outlet ,NavLink} from "react-router-dom"

export default function Shop() {
  return (
    <div className='p-3'>
      <h1>This is Shop page...</h1>
      <NavLink to= {'/Shop/cart'} style={{padding:10}}>Cart</NavLink>
      <NavLink to={'/Shop/product/10'} style={{padding:10}}>Product</NavLink>
      <Outlet />
    </div>
  )
}
