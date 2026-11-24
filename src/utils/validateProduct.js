export const validateProduct = ({ name, price, category, description, file }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Ingresá el nombre.";
  if (price === "" || !Number.isFinite(Number(price)) || Number(price) <= 0) errors.price = "Ingresá un precio mayor a cero.";
  if (!category.trim()) errors.category = "Ingresá la categoría.";
  if (!description.trim()) errors.description = "Ingresá la descripción.";
  if (!file || !file.type.startsWith("image/")) errors.file = "Seleccioná una imagen.";
  return errors;
};
