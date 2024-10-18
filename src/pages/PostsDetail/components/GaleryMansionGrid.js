import React, { useState } from 'react';

export const GaleryMansionGrid = ({ images }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(newIndex);
            setSelectedImage(images[newIndex]);
    };

    const showPrevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
            setCurrentIndex(newIndex);
            setSelectedImage(images[newIndex]);
    };

    const handleImageClick = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
        document.getElementById('image_modal').showModal();
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.getElementById('image_modal').close();
    }

    const handleClickOutside = (e) => {
        const modalBox = document.querySelector('.modal-box');
            if (!modalBox.contains(e.target)) {
                closeModal();
        }
    };

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-3 grid-flow-dense py-6">
                {images.map((src, index) => (
                    <div key={index} className="grid gap-4">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center cursor-pointer"
                            src={`/${src}`}
                            alt={`gallery-photo-${index + 1}`}
                            onClick={() => handleImageClick(index)}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            <dialog id="image_modal" className="modal" onClick={handleClickOutside} >
                <div className="modal-box">
                    <form method="dialog" className="relative">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </form>

                    {selectedImage && (
                        <div className="py-4">
                            <img
                                 src={`/${selectedImage}`}
                                alt="Zoomed"
                                className="w-full h-auto rounded-lg object-cover object-center cursor-pointer"
                            />
                        </div>
                    )}

                    <div className="flex justify-between mt-4">
                        <button className="btn" onClick={showPrevImage}>Précédent</button>
                        <button className="btn" onClick={showNextImage}>Suivant</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
