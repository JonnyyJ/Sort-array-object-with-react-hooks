import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
const arrObject =[{
    id: '1',
    name: 'ebcde'
},
{
    id: '2',
    name: 'bcde'
},
{
    id: '3',
    name: 'decba'
},
{
    id: '4',
    name: 'cdeav'
},
{
    id: '5',
    name: 'adfss'
}]

const sortArrayByFieldName = ({ array, ascValue, field }) =>{
    const collator = new Intl.Collator('en', {
        numeric: true,
        sensitivity: 'base'
    })
    if (ascValue){
        return array.sort((a, b) => collator.compare(a[field], b[field]))
    } else{
        return array.sort((a, b) => collator.compare(b[field], a[field]))
    }
};

function App(){
    const [sortAscendingValue, setSortAscendingValue] = useState(true)
    const [testArr, setTestArr] = useState(arrObject)

    const sortArr = useCallback(()=>{
        setSortAscendingValue(!sortAscendingValue)
        const sorted = sortArrayByFieldName({
            array: testArr,
            ascValue: sortAscendingValue,
            field: 'name'
        })
        setTestArr(sorted)
    },[testArr, sortAscendingValue, setTestArr])

    return(
        <div className="App">
            <button onClick={sortArr}>
                {sortAscendingValue.toString()}
            </button>
            {testArr.map(i=>{
                return <p key = {i.id}>
                    {i.name}
                </p>
            })}
        </div>
    )

}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);