import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventos } from "../atom"
import { obterId } from "../../util"

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventos)

    

    return (evento: IEvento) => {
        const hoje = new Date()
        if (evento.inicio < hoje) {
            throw new Error("Eventos não podem ser cadastrados com data menor do que a atual.")
        }

        evento.id = obterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento