import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventos } from "../atom";

const useDeletarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventos);
  return (evento: IEvento) => {

    setListaEventos((listaAntiga) => [
      ...listaAntiga.filter(evt => evento.id !== evt.id)
    ])
  }
}

export default useDeletarEvento