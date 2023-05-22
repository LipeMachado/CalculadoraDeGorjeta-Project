import { CurrencyDollar, PersonSimple } from "phosphor-react";

import {
    MainContainer,
    Label,
    InputContainer,
    ContaContainer,
    ButtonsContainer,
    PorcentagemContainer,
    PessoasContainer,
    ResultadosContainer,
    GorjetaContainer,
    TotalContainer,
    GorjetaTotalContainer
} from './style'

export function Calculadora() {
    return (
        <>
            <MainContainer>
                <form action="">
                    <ContaContainer>
                        <Label htmlFor="bill">Conta</Label>
                        <InputContainer>
                            <CurrencyDollar size={20} />
                            <input id="bill" type="number" placeholder="0" />
                        </InputContainer>
                    </ContaContainer>

                    <PorcentagemContainer>
                        <Label htmlFor="custom-tip">Selecione a Porcentagem %</Label>
                        <ButtonsContainer>
                            <input type="button" value="5%" />
                            <input type="button" value="10%" />
                            <input type="button" value="15%" />
                            <input type="button" value="25%" />
                            <input type="button" value="50%" />
                            <input type="text" id="custom-tip" placeholder="Outro" />
                        </ButtonsContainer>
                    </PorcentagemContainer>

                    <PessoasContainer>
                        <Label htmlFor="people">Número de Pessoas</Label>
                        <InputContainer>
                            <PersonSimple />
                            <input type="number" id="people" placeholder="0" />
                        </InputContainer>
                    </PessoasContainer>
                </form>

                <ResultadosContainer>
                    <GorjetaTotalContainer>
                        <GorjetaContainer>
                            <p>
                                Gorjeta <br />
                                <span>/ pessoa</span>
                            </p>
                            <p>R$ 0.00</p>
                        </GorjetaContainer>

                        <TotalContainer>
                            <p>
                                Total <br />
                                <span>/ pessoa</span>
                            </p>
                            <p>R$ 0.00</p>
                        </TotalContainer>
                    </GorjetaTotalContainer>

                    <button>Limpar</button>
                </ResultadosContainer>
            </MainContainer>
        </>
    )
}