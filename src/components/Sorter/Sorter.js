import './Sorter.css';

function Sorter(props) {
    function selectChangeHandler(event) {
        props.setSortOption(event.target.value);
    }

    return (
        <div className='sorter-body'>
                <label className='sorter-label'>Ordenar por:</label>
                <select
                    onChange={selectChangeHandler}
                    value={props.sortOption}>
                    <option value='price'>preço</option>
                    <option value='score'>popularidade</option>
                    <option value='title'>ordem alfabética</option>
                </select>
        </div>
    );
}

export default Sorter;
