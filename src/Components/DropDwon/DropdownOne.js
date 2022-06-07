import './style.css'
import { useState} from 'react';

const data = [{id: 0, label: "من نحن؟"}, {id: 1, label: "خدماتنا"}, {id: 2, label: "أعمالنا"}, {id: 3, label: "المدونة"}];

const DropdownOne = () => {
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
        {selectedItem ? items.find(item => item.id === selectedItem).label : "التنصيفات"}
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

export default DropdownOne;