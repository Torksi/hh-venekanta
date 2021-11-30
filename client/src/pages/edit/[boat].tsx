import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
// eslint-disable-next-line no-use-before-define
import React, { FormEvent, useState } from "react";
import useSWR from "swr";
import InputGroup from "../../components/InputGroup";
import Title from "../../components/Title";
import { Boat } from "../../types";

export default function EndDrivingLogEntry({ boat }: { boat: Boat }) {
  console.log(boat);

  const router = useRouter();
  const boatId = router.query.boat;

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [length, setLength] = useState("0");
  const [width, setWidth] = useState("0");
  const [price, setPrice] = useState("0");
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    setName(boat.name);
    setModel(boat.model);
    setLength(boat.length.toString());
    setWidth(boat.width.toString());
    setPrice(boat.price.toString());
    setDataLoaded(true);
  }

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await axios.post(`/boats/`, {
        id: boat.id,
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
      <Title pageName="Muokkaa venettä" />
      <div className="row">
        <div className="col-md-12">
          <h2>Muokkaa venettä</h2>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await axios({
    url: `/boats/${ctx.query.boat}`,
  });

  return {
    props: {
      boat: data.data,
    },
  };
};
