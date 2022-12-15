import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'

function CategoriesNav() {
    return (
        <div className="container" id="categories">
            <Link to="/categories/all">
                <Button className='rounded-btns' variant="dark" id="all" >All</Button>{' '}
            </Link>
            <Link to="/categories/Food">
                <Button className='rounded-btns' variant="dark" id="Food">Food</Button>{' '}
            </Link>
            <Link to="/categories/Beverages">
                <Button className='rounded-btns' variant="dark" id="Beverages">Beverages</Button>{' '}
            </Link>
            <Link to="/categories/Others">
                <Button className='rounded-btns' variant="dark" id="Others">Others</Button>{' '}
            </Link>
        </div>
    )
}

export default CategoriesNav;