import { Carousel } from 'primereact/carousel';

interface ProductProps {
    images: string[];
    title: string;
    description: string;  
}

export function  Project(props: ProductProps) {

    const productTemplate = (product: string) => {
        return (
            <div className="p-10">
                <div className="">
                    <img src={`${product}`} alt={props.title} width={600} />
                </div>
            </div>
        );
    };

     return(
        <div className='p-10'>
            <h1>
                {props.title}
            </h1>
            <p>{props.description}</p>
            <Carousel value={props.images} numVisible={3} numScroll={3} itemTemplate={productTemplate} />
        </div>
     );
}