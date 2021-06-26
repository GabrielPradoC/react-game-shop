import './Filter.css';

function Filter(props) {
    function selectChangeHandler(ev) {
        props.onSelectChange(ev.target.value);
    }

    return (
        <div className='filter-body'>
            <div>
                <label className='filter-label'>Filtrar por:</label>
                <select
                    onChange={selectChangeHandler}
                    value={props.defaultValue}>
                    <option value='price'>preço</option>
                    <option value='score'>popularidade</option>
                    <option value='title'>ordem alfabética</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
