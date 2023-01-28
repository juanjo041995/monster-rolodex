import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';


const App = (props) => {

  const [searchField, setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, []);
  console.log(searchField);

  const handleSearchInputChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  }

  //

  useEffect(() => {
    setFilteredMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())));
  },[monsters,searchField]) 



    return (
      <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHandler = {handleSearchInputChange}
                   className = 'search-box'
                   placeholder='Search monsters...'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
}
export default App;
