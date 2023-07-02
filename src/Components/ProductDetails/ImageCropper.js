import React, { useEffect, useRef } from 'react';

const ImageCropper = ({ src, cropWidth, cropHeight }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const image = new Image();
        image.src = src;

        image.onload = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            // Set the canvas dimensions to the desired cropped size
            canvas.width = cropWidth;
            canvas.height = cropHeight;

            // Draw the cropped portion of the image on the canvas
            ctx.drawImage(image, 50, 50, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
        };
    }, [src, cropWidth, cropHeight]);

    return <canvas ref={canvasRef} />;
};

export default ImageCropper;