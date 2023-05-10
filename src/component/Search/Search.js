import search from './search.gif';
import './Search.css'


const Search = ({handleChange, handleClick,}) => {
    return(
        <div className="search__wrapper">
            <input
                size="lg"
                type="text"
                placeholder="Введите город"
                className="input"
                onChange={(e) => handleChange(e.target.value)}
            />
            <img
                src={search}
                alt=""
                className="search__button"
                onClick={handleClick}
            />
        </div>
    )
};

export default Search