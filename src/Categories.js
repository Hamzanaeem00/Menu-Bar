import React from 'react'

const Categories = ({categories,filterItems}) => {
    return (
        <div className="btn-container" style={{marginTop:'3rem'}}>
      {
        categories.map((category,index)=>{
            return (
              <button className="filter-btn" key={index} onClick={()=>filterItems(category)}>
              {category}    
            </button>
            )
        })
      }
    </div>
      )
}

export default Categories
