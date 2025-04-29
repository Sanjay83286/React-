function Map1() {
    console.log()
    const okay1 = ["sanjay", "vijay", "sam", "vivo", "keyys"]
    return (
        <div>
            {okay1.map((list1, index, p) => {
                console.log(list1)
            return <>
                    <div key={index}>
                     <h1>{list1}</h1>
                     <h2>{index}</h2>
                    </div>
                   </>

            })}

        </div>
    )
}
export default Map1