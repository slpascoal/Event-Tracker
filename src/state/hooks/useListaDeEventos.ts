import { useRecoilValue } from "recoil";
import { listaDeEventos } from "../atom";

const useListaDeEventos = () => {
  return useRecoilValue(listaDeEventos)
}

export default useListaDeEventos