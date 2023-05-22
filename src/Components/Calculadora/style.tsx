import styled from 'styled-components'

export const MainContainer = styled.main`
    background-color: #fff;
    border-radius: 25px 25px 0 0;
    padding: 2rem;

    @media only screen and (min-width: 950px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 57.5rem;
        gap: 3rem;
        margin-inline: auto;
        padding: 2.5rem;
        border-radius: 25px;
    }
`;

export const Label = styled.label`
    color: #5E7A7D;
    line-height: 1.5rem;
    margin-bottom: 0.375rem;
    display: block;
`;

export const InputContainer = styled.div`
    background-color: #F3F9FA;
    padding: 0.375rem 1rem;
    display: flex;
    align-items: center;

    input {
        border: 0;
        background-color: transparent;
        font-size: 1.5rem;
        text-align: right;
        width: 100%;
        outline: none;
        color: #00474B;

        &::placeholder {
            color: #9EBBBD;
        }
        
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }
    }
`;

export const ContaContainer = styled.div`
    margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
    margin-top: 0.625rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    input {
        border: 0;
        outline: none;
        font-size: 1.5rem;
        padding: 0.375rem 1rem;
        border-radius: 5px;
    }

    input[type="button"]{
        background-color: #00474B;
        color: #fff;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        
        &:hover {
            background-color: #9FE8DF;
            color: #00474B;
        }
    }

    input#custom-tip {
        width: 100%;
        background-color: #F3F9FA;
        text-align: center;
        color: #00474B;

        &::placeholder {
            color: #547878;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }
    }

    @media only screen and (min-width: 950px){
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const PorcentagemContainer = styled(ContaContainer)``;

export const PessoasContainer = styled(ContaContainer)``;

export const ResultadosContainer = styled.div`
    background-color: #00474B;
    border-radius: 15px;
    padding: 2rem 1.5rem;

    button {
        width: 100%;
        background-color: #26C2AE;
        color: #00474B;
        border: 0;
        font-size: 1.25rem;
        padding-block: 0.5rem;
        text-transform: uppercase;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: #9FE8DF;
            color: #00474B;
        }
    }

    @media only screen and (min-width: 950px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const GorjetaContainer = styled.div`
    display: flex;
    margin-bottom: 1.25rem;
    justify-content: space-between;
    align-items: center;

    p:first-child{
        color: #fff;
        line-height: 1.5rem;

        span {
            color: #7F9D9F;
            font-size: 0.75rem;
        }
    }

    p:last-child {
        color: #26c2ae;
        font-size: 2rem;
        line-height: 3rem;
    }
`;

export const TotalContainer = styled(GorjetaContainer)`
    margin-bottom: 2rem;
`;

export const GorjetaTotalContainer = styled.div``;