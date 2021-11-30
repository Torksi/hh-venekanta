import axios from "axios";
import { useRouter } from "next/router";
// eslint-disable-next-line no-use-before-define
import React, { FormEvent, useState } from "react";
import InputGroup from "../components/InputGroup";
import Title from "../components/Title";

export default function EndDrivingLogEntry() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [length, setLength] = useState("0");
  const [width, setWidth] = useState("0");
  const [price, setPrice] = useState("0");

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await axios.post(`/boats/`, {
        name,
        model,
        length,
        width,
        price,
      });

      router.push(`/`);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-3">
      <Title pageName="Lisää vene" />
      <div className="row">
        <div className="col-md-12">
          <h2>Lisää vene</h2>
          <hr />
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitForm}>
                <div className="row">
                  <InputGroup
                    value={name}
                    setValue={setName}
                    name="name"
                    type="text"
                    className="form-group col-md-6"
                    labelText="Nimi"
                    error={undefined}
                    required
                  />
                  <InputGroup
                    value={model}
                    setValue={setModel}
                    name="model"
                    type="text"
                    className="form-group col-md-6"
                    labelText="Merkki ja malli"
                    error={undefined}
                    required
                  />
                </div>
                <div className="row mt-2">
                  <InputGroup
                    value={length}
                    setValue={setLength}
                    name="length"
                    step
                    type="number"
                    className="form-group col-md-3"
                    labelText="Pituus"
                    error={undefined}
                    required
                  />
                  <InputGroup
                    value={width}
                    setValue={setWidth}
                    name="width"
                    type="number"
                    step
                    className="form-group col-md-4"
                    labelText="Leveys"
                    error={undefined}
                    required
                  />
                  <InputGroup
                    value={price}
                    setValue={setPrice}
                    name="price"
                    type="number"
                    className="form-group col-md-4"
                    labelText="Hinta"
                    error={undefined}
                    required
                  />
                </div>
                <div className="row mt-2">
                  <div className="col-md-2">
                    <button type="submit" className="btn btn-success">
                      Tallenna
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
