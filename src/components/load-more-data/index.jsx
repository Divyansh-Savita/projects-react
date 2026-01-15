import { useEffect, useState } from "react";

export default function LoadMoreData(){
    const [Loading,setLoading]=useState(false);
    const [products,setproducts]=useState([]);
    const [count,setcount]=useState(0);
    const [disable,setdisable]=useState(false)
    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0:count}`)
            const result = await response.json();
            
            if(result && result.products && result.products.length){
                setproducts((prevData)=>[...prevData,...result.products]);
                setLoading(false)
            }
            
        } catch (error) {
            console.log(error);
            setLoading(false)            
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[count]);
    useEffect(()=>{
        if(products && products.length===100)setdisable(true);
    })
    if(Loading){
        return <div>Loading data ! Please wait.</div>
    }
return <div className="container">
    <div>
        {
            products && products.length ? products.map(item =>(
            <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title}/> </div>))
            :null 
                
        }
    </div>
    <button disabled={disable} onClick={()=>setcount(count+1)}>Load More Products</button>
    {
        disable ? <p>You have reached to 100 products</p>:null
    }
</div>
}