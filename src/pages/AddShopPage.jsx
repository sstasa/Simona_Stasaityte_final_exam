import AddShopForm from '../components/addShopForm/AddShopForm';

function AddShopPage(props) {
  const { token } = useAuthCtx();
  return <AddShopForm />;
}
export default AddShopPage;
