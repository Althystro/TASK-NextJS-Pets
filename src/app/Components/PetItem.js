"use client";
import Image from "next/image";
import { useState } from "react";

const btnStyle =
  "m-4 p-2 bg-palette-primary text-white rounded-sm font-primary font-semibold  hover:bg-palette-dark";

function PetItem({ pet }) {
  const [pic, setPic] = useState(pet.image);

  const changePic = () => {
    if (pic === pet.image) {
      setPic(pet.image2);
    } else {
      setPic(pet.image);
    }
  };

  return (
    <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
      <div className="h-72 border-b-2 border-palette-lighter relative">
        <Image
          alt={pet.name}
          src={pic}
          className="transform duration-500 ease-in-out hover:brightness-75"
          fill
          sizes="30vw"
        />
      </div>
      <div className="h-48 relative">
        <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
          {pet.name}
        </div>
        <div className="text-lg text-gray-600 p-4 font-primary font-light">
          {pet.description}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={changePic} type="button" className={btnStyle}>
            Pet
          </button>
          <button type="button" className={btnStyle}>
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
