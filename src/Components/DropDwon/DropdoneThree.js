import './style.css'
import { useState} from 'react';

const data = [{id: 0, label: "shadyceo@elbonyan.com"}, {id: 1, label: "7776 7000 974 00"}, {id: 2, label: "www.elbonyan.com"}];

const DropdownThree = () => {
  const [isOpen, setOpen] = useState(false);
  const [items] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id === selectedItem).label : "اتصل بنا"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id === selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropdownThree;