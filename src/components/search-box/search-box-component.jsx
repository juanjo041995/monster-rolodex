import './search-box.styles.css';
const SearchBox = (props) => {
        return (
            <input onChange={props.onChangeHandler} 
                   className={`search-box ${props.className}`} 
                   type='search' 
                   placeholder={props.placeholder}/>
        )
}
export default SearchBox;