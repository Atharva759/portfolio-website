"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

type Props = {
    images: string[];
};

export default function ImageCarousel({
    images,
}: Props) {

    const [emblaRef, embla] = useEmblaCarousel({
        loop: true,
    });

    useEffect(() => {

        if (!embla) return;

        const id = setInterval(() => {

            embla.scrollNext();

        }, 3500);

        return () => clearInterval(id);

    }, [embla]);

    return (

        <div
            ref={emblaRef}
            className="overflow-hidden rounded-3xl shadow-xl"
        >

            <div className="flex">

                {images.map((img) => (

                    <div
                        key={img}
                        className="min-w-full"
                    >

                        <Image
                            src={img}
                            width={1200}
                            height={700}
                            alt=""
                            className="w-full"
                        />

                    </div>

                ))}

            </div>

        </div>

    );

}