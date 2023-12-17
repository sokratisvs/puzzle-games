import React, { useState, useEffect } from 'react'
import './SearchPuzzle.css'

const SearchPuzzle = () => {
    let [puzzle, setPuzzle] = useState([])

    const createWordsArray = (data) => {
        const rows = data.length > 0 && data.map((item, i) => {
            let entry = item.length> 0 && item.map((element, j) => 
                    <tr className="withprewrap" key={j}>{element}</tr>);
            return (
                <td key={i}>{entry}</td>
             );
        })
        rows && setPuzzle(rows);
    }

    useEffect(() => {
        fetch("http://127.0.0.1:5000/search-puzzle/")
        .then(response => response.json())
        .then(data => {
            console.log('data-----', data)
            createWordsArray(data.puzzleArray)
        })
      },[])

  return (
    <div>
        <table>
            <tbody>
                {puzzle}
            </tbody>
        </table>
    </div>
  )
}

export default SearchPuzzle