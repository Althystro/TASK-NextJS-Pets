"use client";
import { useState } from "react";
import pets from "../data/pets";
import PetItem from "./PetItem";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const petList = pets
    .filter((pet) => {
      if (type === "") {
        return true;
      } else return pet.type === type;
    })
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  const searchPet = () => {
    setQuery(event.target.value);
  };
  const searchType = (e) => {
    setType(e.target.value);
  };

  // const filterPetName = pets.filter((pet) =>
  //   pet.name.toLowerCase().includes(query.toLowerCase())
  // );

  // const filtePetSpecies = pets.filter((pet) => {
  //   pet.type == type;
  // });
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col items-start space-y-1 flex-grow">
            <input
              onChange={searchPet}
              type="search"
              placeholder="search"
              className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
            />
          </div>
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <select
              onChange={searchType}
              defaultValue={type}
              className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
            >
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
