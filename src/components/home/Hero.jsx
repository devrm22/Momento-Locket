import Image from 'next/image';
import React from 'react';

const Hero = () =>{
    return(
        <div className="bg-cover h-screen bg-hero flex flex-col justify-between">
            {/* <div className="bg-cover h-fit bg-locket"> */}
                <div className="pulse relative">
                    <div className="absolute">
                        <Image
                            width={556}
                            height={416}
                            src="/img/digital-locket.png"
                            alt="Momento Locket"
                        />
                    </div>
                </div>
                <div className="h-auto mx-auto">
                    <Image
                        height={480}
                        width={240}
                        src="/img/phone.png"
                        alt="Mobile Phone"
                    />
                </div>
            {/* </div> */}
        </div>
    )
}
export default Hero;