import Items from "./Items";
import { CATEGORIES, RESOURCES, COMPANY, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 
    lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16"
    >
      <Items Links={CATEGORIES} title="CATEGORIES" />

      <Items Links={RESOURCES} title="RESOURCES" />

      <Items Links={COMPANY} title="COMPANY" />

      <Items Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
