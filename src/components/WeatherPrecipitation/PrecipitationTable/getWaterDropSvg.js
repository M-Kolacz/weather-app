import React from 'react';

export const getWaterDropSvg = (rain = null) => {
    let rainValue;
    if (rain) {
        rainValue = 100;
    }
    rainValue = 100 - rain * 10;

    return (
        <>
            <defs>
                <linearGradient id='myGradient' gradientTransform='rotate(90)'>
                    <stop offset={`${rainValue}%`} stopColor='white' />
                    <stop offset='0%' stopColor='blue' />
                </linearGradient>
            </defs>

            <path
                d='M256.452,512c81.62-0.242,148.809-68.446,148.189-150.069
	C403.776,247.941,298.85,126.992,263.324,5.509c-1.076-3.68-4.2-5.514-7.323-5.509c-3.124-0.005-6.248,1.829-7.324,5.509
	C213.152,126.992,108.225,247.941,107.36,361.931C106.74,443.554,173.929,511.758,255.549,512'
                fill="url('#myGradient')"
                stroke='black'
                strokeWidth='5'
            />
        </>
    );
};

export default getWaterDropSvg;
