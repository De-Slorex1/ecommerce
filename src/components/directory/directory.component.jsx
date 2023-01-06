import Items from "../category-item/category-item.component";
import './directory.styles.css'

const Directory = ({categories}) => {
    return ( 
        <div>
            <div className="categories-container">
            {categories.map((category) => (
            <Items key={category.id} category={category} />
            ))};
            </div>
        </div>
     );
}
 
export default Directory;