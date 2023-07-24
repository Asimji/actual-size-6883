import { Button, Flex } from "@chakra-ui/react"


const Pagination = ({count=3,handlePage}) => {
  return  <Flex gap={'2vh'} float={'right'} mr={'8vh'}>
  {new Array(count).fill(-1).map((item,i)=>{
      return <Button key={i}
      onClick={()=>handlePage(i+1)}
      >
        {i+1}
    </Button>
  })}
  </Flex>
}

export default Pagination
