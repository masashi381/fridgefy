import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function RecipesAutoSearch({list, setSearchedItem}) {


    const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log("string", string)
    // console.log("results", results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item) => {
    setSearchedItem(item)
    console.log(item)
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const handleOnClear = () => {
    setSearchedItem([])
    console.log("clear")
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }


    return (
        <ReactSearchAutocomplete
            items={list}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            onClear={handleOnClear}
        />
    );
}

export default RecipesAutoSearch;