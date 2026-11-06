import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);

  return (
    <h2>
      👋 Welcome,{" "}
      {customer ? customer.charAt(0).toUpperCase() + customer.slice(1) : "User"}
    </h2>
  );
}

export default Customer;
