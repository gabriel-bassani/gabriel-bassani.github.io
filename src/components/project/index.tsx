import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { useLanguage } from '../../contexts/language-context';
import { translations, TranslationData } from '../../translations';
import { useEffect, useState } from 'react';

interface ProductProps {
    name: keyof TranslationData['projects'];
    images: {
        path: string;
        width: number;
    }[];
    title: string;
}

export function  Project(props: ProductProps) {
    const { language } = useLanguage();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const productTemplate = (product: { path: string; width: number }) => {

        let imageWidth;
        // Definindo a largura com base no tamanho da tela
        if (windowWidth < 640) {
            imageWidth = Math.min(product.width, 300);; // Ou outro valor para dispositivos móveis
        } else if (windowWidth < 768) {
            imageWidth = Math.min(product.width, 400); // Para telas médias
        } else if (windowWidth < 1024) {
            imageWidth = Math.min(product.width, 600); // Para telas maiores
        } else {
            imageWidth = Math.min(product.width, 800); // Para telas grandes
        }

        console.log('image width and windowWidth:', imageWidth, windowWidth);
        
        return (
            <div className="flex items-center justify-center w-full min-h-[300px]">
            <img
                src={product.path}
                alt={props.title}
                className="w-auto"
                style={{
                    maxWidth: `${product.width}px`,  // Garantindo que a largura máxima seja o valor do produto
                    width: `${imageWidth}px`,         // Largura dinâmica de acordo com o tamanho da tela
                }}
            />
            </div>
        );
    };

     return(
        <div className='p-4 sm:p-6 lg:p-10'>
            <h1>
                {props.title}
            </h1>
            <p className='my-5'>
                {translations[language].projects[props.name]}
            </p><Carousel 
                    value={props.images} 
                    numVisible={2} 
                    numScroll={1} 
                    responsiveOptions={responsiveOptions} 
                    itemTemplate={productTemplate} 
                />
        </div>
     );
}