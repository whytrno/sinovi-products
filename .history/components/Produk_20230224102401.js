import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Produk() {
    return (
        <div className="py-20 px-10 2xl:px-60 space-y-10">
            <div className="text-center space-y-3">
                <h1 className="text-4xl text-title font-semibold">PRODUK KAMI</h1>
            </div>
            <Carousel>
                <div>
                    <img src="./images//hero.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/hero.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./images/hero.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}