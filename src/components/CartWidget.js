export const CartWidget = () => {
  return (

    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">

        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Carrito</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          <li><a>Contenido del carrito.</a></li>          
        </ul>
      </div>
    </div>


  );
};
export default CartWidget;
