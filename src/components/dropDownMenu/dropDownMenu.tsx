import './dropDownMenu.css'

function DropDownMenu({openDropDown, dropDownMenuData}: {openDropDown: boolean, dropDownMenuData: any}) {
     return <div><ul
     className="menu"
     style={{
       visibility: openDropDown ? "visible" : "hidden",
       left: dropDownMenuData.x -120,
       top: dropDownMenuData.y +20,
     }}
   >
     <li className="menu-item">
       <button>Block User</button>
     </li>
   </ul></div>
}

export default DropDownMenu;