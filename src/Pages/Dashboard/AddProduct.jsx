const AddProduct = () => {
  return (
    <div className="">
      <h1 className="font-semibold text-3xl text-center p-2 pb-10">
        Give Your Product Details
      </h1>
      <div className="md:flex items-start">
        <div className="hero">
          <div className="md:mt-2">
            <div className="card md:w-full md:max-w-md shadow-md bg-base-100 p-2">
              <form className="card-body p-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="district"
                    placeholder="eg: Dhaka"
                    className="input input-bordered input-sm"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Available Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    name="space"
                    placeholder="eg: 900"
                    className="input input-bordered input-sm"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="eg: 7000"
                    className="input input-bordered input-sm"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Details About Product
                    </span>
                  </label>
                  <textarea
                    placeholder="Type house details"
                    name="details"
                    className="textarea textarea-bordered textarea-md w-full "
                    required
                  ></textarea>
                </div>
                <div className="form-control">
                  <fieldset className="w-full space-y-1 text-gray-800">
                    <label
                      htmlFor="files"
                      className="block text-sm font-medium"
                    >
                      Photos{" "}
                      <span className="text-red-400">(Max 3 Photos)</span>
                    </label>
                    <div className="">
                      <input
                        type="file"
                        name="files"
                        multiple="multiple"
                        accept="image/jpeg, image/png, image/jpg"
                        className="md:px-6 px-1 py-6 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100"
                        required
                      />
                    </div>
                  </fieldset>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-outline">
                    <p>ADD</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
