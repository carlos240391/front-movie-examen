export interface IMovie {
  movieName: string;
  clasificacion: string;
  duracion: string;
  poster: string;
  banner: string;
  sinopsis: string;
  genero: string;
  idiomas: string[];
  subtitulos: string[];
  trailer: string;
  demand: number;
  _id?: string;
}
