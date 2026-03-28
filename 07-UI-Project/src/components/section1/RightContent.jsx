import RightCard from "./RightCard"



const RightContent = (props) => {
  return (
    <div id="right" className='h-full flex flex-nowrap rounded-3xl overflow-x-auto gap-10  p-6 w-2/3 '>
       {props.users.map(function(elem,idx){
         return <RightCard key= {idx} color={elem.color}
         id={idx} img={elem.img} tag={elem.tag}/>
       })}
     
    </div>
  )
}

export default RightContent
