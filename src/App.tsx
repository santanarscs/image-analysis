import React, { useState, FormEvent } from "react";
import axios from "axios";
import "./styles.css";
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://6nd7uqdatf.execute-api.us-east-1.amazonaws.com/dev/analyse?imageUrl=${imageUrl}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(true);
    }
  }
  return (
    <div id="page-home-container">
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            value={imageUrl}
            placeholder="Digite a url de uma imagem"
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit">Analizar</button>
        </form>
        {data && !loading && <p id="information-analysis">{data}</p>}
      </main>
    </div>
  );
}

export default App;
// https://6nd7uqdatf.execute-api.us-east-1.amazonaws.com/dev/analyse?imageUrl=
