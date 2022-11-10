import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Authprovider/Authprovider";
import useTitle from "../../Hooks/useTitle";

const Addservices = () => {
  const { user } = useContext(AuthContext);
  useTitle("Addservice");
  const handleAdduser = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const service_id = event.target.service_id.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const email = event.target.email.value;
    const additems = { title, service_id, img, price, description, email };

    //send data
    fetch("https://cloud-kitchen-tau.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(additems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Item Added successfully");
        event.target.reset();
      });
  };
  return (
    <div className="container w-75 bg-login py-2 rounded mt-5">
      <form onSubmit={handleAdduser}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" name="title" required />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Service Id
          </label>
          <input type="number" class="form-control" name="service_id" required />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Image
          </label>
          <input type="text" class="form-control" name="img" required />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Price
          </label>
          <input type="number" class="form-control" name="price" required />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input type="text" class="form-control" name="description" required />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            required
            defaultValue={user?.email}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Services
        </button>
      </form>
    </div>
  );
};

export default Addservices;
