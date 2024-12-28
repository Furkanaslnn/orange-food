import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal"; // Shadcn modal bileşeni

const RecipeDetails = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button variant="outline" className="w-full" onClick={openModal}>
        Tarif Detayları
      </Button>

      <Modal open={isOpen} onOpenChange={closeModal}>
        <Modal.Header>
          <Modal.Title>{recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-4">Malzemeler</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mt-4">Yapılışı</h2>
          <p>{recipe.instructions}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={closeModal}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecipeDetails;
