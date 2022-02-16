import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { getMovies } from "../../actions/";
import "./Buscador.css";

export default function Buscador() {
  return (
    <div>
      <h2>Buscador</h2>
      <form className="form-container">
        <label className="label" htmlFor="title">
          Película
        </label>
        <div>
          <input type="text" autoComplete="off" value="ingrese valor" />
        </div>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

// export class Buscador extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//     };
//   }
//   handleChange(event) {
//     this.setState({ title: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.getMovies(this.state.title);
//   }

//   render() {
//     const { title } = this.state;
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">
//               Película:{" "}
//             </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul>
//           {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//           {this.props.peliculas?.map((pelicula) => {
//             return (
//               <div>
//                 <label>{pelicula.Title}</label>
//                 <button onClick={()=>this.props.agregarFav(pelicula)}>FAV</button>
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// function mapStateToProps(state) {
//   return {
//     peliculas: state.moviesLoaded,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     buscarPeli: (titulo) => dispatch(getMovies(titulo)),
//   };
// }

// export default connect(null, mapDispatchToProps)(Buscador);
