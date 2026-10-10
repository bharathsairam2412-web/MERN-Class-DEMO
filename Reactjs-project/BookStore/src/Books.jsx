import './App.css'
function Products(){
    const imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5ryeX0Ukhl8oCN50OeHwdnfzLkVlW5aVlRP2OsDXiA&s=10";
    const imagesize=90;
    const productName="Bread Lorem Ipsum";

    return(
        <>
            <div>
                <img className='imgcls' src={imageurl} width={imagesize} height={imagesize} alt={'An image of '+productName} />
                <h2>{productName}</h2>
                <button>To click more details</button>
            </div>
            
        </>
    )
}


export default Products