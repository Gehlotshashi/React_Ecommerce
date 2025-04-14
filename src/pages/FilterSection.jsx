import React from 'react'
import { useFilterContext } from '../context/filter_context';
import "../component/Style/Filtersection.css";
import { FaCheck } from "react-icons/fa";
import FormatePrice from "../component/Layout/FormatePrice";
const FilterSection = () => {
  const { filters: {text,category,company,colors , price , maxPrice , minPrice },
  all_products,
  clearFilters,
  updateFilterValue } = useFilterContext();
 
 const getUniqueData=(data, property)=>{
let newVal = data.map((curElem)=>{
 return curElem[property];
});
if(property ==="colors"){
  // return [...new Set([].concat(...newVal))];
  newVal = newVal.flat();
  // console.log(newVal);
}
return ( newVal = ["all" , ...new Set(newVal)]);
 } 

  // we need unique data 
  const categoryData = getUniqueData(all_products,"category");
  const companyData = getUniqueData(all_products,"company");
  const colorData = getUniqueData(all_products,"colors");
  console.log(colorData);
  return (
    <>
      <div className='filter-search'> 
       <form onSubmit={(e)=>e.preventDefault()}>
        <input type ="text" 
        name ="text" 
        value={text} 
        placeholder='Search'
        onChange={updateFilterValue}/>
        
      </form>    
      </div> 
     <div className='filter-category'>
      <h3> Category </h3>
      <div>{
          categoryData.map((curElem,index)=>{
            return <button 
            key={index}
             type ="button"
             name='category'
             value={curElem}
             onClick={updateFilterValue}> 
             {curElem}
            </button>
          })

         } </div>
     </div> 

    <div className='filter-company'> 
      <h3>Company</h3>
      <form action ="#"> 
       <select name ="company"
       id='company'
       className='filter-company--select' 
       onClick={updateFilterValue}> 
       {
        companyData.map((curElem,index)=>{
         return (
          <option
          key={index}
          value={curElem} 
          // name="comapny"
          >{curElem} </option>
         )
        })
       }
       </select>
      </form>
    </div>

    <div  className='filter-colors colors'> 
     <h3> Colors </h3> 
       <div className='filter-color-style'> 
      {
       colorData.map((curColor ,index)=>{
        if(curColor==="all")
        {
          return ( <button
      key ={index} 
      type='button'
      value={curColor}
      name='colors'
      // style ={{ backgroundColor:curColor}}
      className='color-all--style'
      onClick={updateFilterValue}
      > All </button>
       )}
      return <button
      key ={index} 
      type='button'
      value={curColor}
      name='colors'
      style ={{ backgroundColor:curColor}}
      className={colors===curColor ? "btnStyle active" :"btnStyle"}
      onClick={updateFilterValue}
      > {colors ===curColor ? <FaCheck  className="checkStyle"/> : null } </button>
       })

      }
       </div>
    </div> 

    <div className='filter_price'>
     <h3>Price </h3>
     <p> 
      <FormatePrice price={price}/>
     </p>
     <input 
     type='range'
     name='price'
     min={minPrice}
     max={maxPrice}
     value={price}
     onChange={updateFilterValue}
     />
   </div>

  <div className='filter-clear'>
  <button className="clear-btn" onClick={clearFilters}>
    Clear Filters
  </button>

    </div>  
    </>
  )
}

export default FilterSection;
