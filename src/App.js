import { gql, useQuery } from "@apollo/client";
import "./App.css";
import Card from "./Card";

function App() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        photo
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log({ loading });
  console.log({ error });
  console.log({ data });

  return (
    <div className="App container">
      <h1>Apollo Client</h1>
      <div className="row">
        {!loading &&
          data.locations.map(({ id, name, description, photo }) => (
            <div key={id} className="col-md-6">
              <Card img={photo} title={name} desc={description} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
