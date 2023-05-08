import React from 'react'
import { AutoComplete } from '../Components/AutoComplete';
import { StockList } from '../Components/StockList';
// import Trading from './Trading.jpg'

export const StockOverviewPage = () => {
  return (
    <div>
    {/* <img src ={Trading} alt='' className='image'/> */}
    <AutoComplete/>
    <StockList />
    </div>
  )
}
