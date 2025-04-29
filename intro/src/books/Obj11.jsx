import data1 from "./server"
function Obj11() {

    console.log(data1)
    console.log()
    return (
        <div style={{display:"grid", gridTemplateColumns:"auto auto auto",backgroundColor:"yellow"}}>
            {data1.map((item, index) => {
                return <>
                    <div key={index} style={{display:"flex"}}>
                        <p>{item.title}</p>
                        <p><img src={item.image} width={100} ></img></p>
                    </div>
                </>
             
            })}
        </div>
    )
}
export default Obj11