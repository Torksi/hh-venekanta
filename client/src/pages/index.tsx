import axios from "axios";
import useSWR from "swr";
import Title from "../components/Title";

export default function Home() {
  const { data, error } = useSWR("/boats");
  if (!data || error) return <></>;

  let boats = data;

  return (
    <>
      <Title pageName="Etusivu" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <h1>Venekanta</h1>
            <hr />
            <div className="card">
              <div className="card-body table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Nimi</th>
                      <th>Merkki ja malli</th>
                      <th>Pituus</th>
                      <th>Leveys</th>
                      <th>Hinta</th>
                      <th>Toiminnot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boats.map((boat: any) => {
                      return (
                        <tr key={`boat-${boat.id}`}>
                          <td>{boat.name}</td>
                          <td>{boat.model}</td>
                          <td>{boat.length} m</td>
                          <td>{boat.width} m</td>
                          <td>{boat.price} €</td>
                          <td>
                            <a href={`/edit/${boat.id}`}>Muokkaa</a> |{" "}
                            <a
                              href="#"
                              onClick={() => {
                                if (
                                  confirm(
                                    "Haluatko varmasti poistaa tämän veneen?"
                                  )
                                ) {
                                  axios.delete(`/boats/${boat.id}`);
                                  boats = boats.filter(
                                    (b: any) => b.id !== boat.id
                                  );
                                }
                              }}
                            >
                              Poista
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
