
export const NavBar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">MercaFacil Supermercado</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Lacteos</a></li>
      <li><a>Frutas</a></li>
      <li><a>Despensa</a></li>
      <li><a>Congelados</a></li>
    </ul>
  </div>
</div>
    
    
  );
};
export default NavBar;