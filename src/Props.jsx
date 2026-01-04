import Propschild from "./Propschild"

let Props = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', border:"1px solid black",marginTop:"100px"}}>
        <Propschild img="/eye.jpg" price="999" dress="T-shirt"/>
        <Propschild img="/eye.jpg" price="999" dress="T-shirt"/>
        <Propschild img="/eye.jpg" price="999" dress="T-shirt"/>
    </div>
  )
}

export default Props

