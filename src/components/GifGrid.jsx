import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {    

    const { images, isLoading } = useFetchGifs(category);
    console.log({images, isLoading}) 

    return ( 
        <>
            <h3>{ category }</h3>
            {
                isLoading && <p>Loading...</p>
            }
            

            <div className="card-grid">
                {
                    images.map( (image) => (
                       <GifItem 
                            key={image.id}
                            title={image.title}
                            url={image.url}
                       />
                    ))
                }
                
            </div>
            
        </>
        
     );
}
 