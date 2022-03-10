import ItemCount from "./ItemCount";

const ItemListContainer = (prop) => {
  console.log(prop.proximamente)
  return (
    <>
    <h2>Próximamente: {prop.proximamente}!</h2>
    <ItemCount/>
    </>
  )
}

export default ItemListContainer;