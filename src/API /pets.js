import instance from "./index";

const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};
const getOnePetId = async (id) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};

export { getAllPets, getOnePetId };

const addPet = async (petData) => {
    const response = await instance.post(`/pets`,petData);
   return response.data;
}
export {addPet};

const deletePet = async (id) => {
   const response = await
   instance.delete(`/pets/${id}`);
   return response.data;
};
export {deletePet};
