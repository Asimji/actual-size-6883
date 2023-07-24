import { Box, Flex, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterPage = ({page,limit}) => {

    const [searchParam,setSearchParam]=useSearchParams()
    
    const initCategory=searchParam.get('category')
    const initorder=searchParam.get('order')
    const initQ=searchParam.get('q')

    
    const [category,setCategory]=useState(initCategory||"")
    const [order,setorder]=useState(initorder||"")
    const [q,setQ]=useState(initQ||"")

useEffect(()=>{
    let params={ page,limit}
    category && (params.category=category)
    order && (params.order=order)
    q && (params.q=q)

    setSearchParam(params)
},[category,q,order,page,limit])

  return (


    <Flex justify={'space-around'} m={'2vh 0 2vh 2vh'} >
      <Box>
        <Select onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Fliter By Category</option>
            <option value="Headphone">Headphone</option>
            <option value="tablet">Tablet</option>
            <option value="laptop">Laptop</option>
        </Select>
      </Box>
      <Box>
        <Input  placeholder='Search By Title' w={'60vh'} onChange={(e)=>setQ(e.target.value)}/>
      </Box>
      <Box>
        <Select onChange={(e)=>setorder(e.target.value)}>
        <option value="">Sort By Price</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
           
        </Select>
      </Box>

    </Flex>
   
  )
}

export default FilterPage
