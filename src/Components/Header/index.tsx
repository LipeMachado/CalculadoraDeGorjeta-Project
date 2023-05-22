import Logo from '../../Assets/Logo.png'
import {
    HeaderContainer,

} from './style'

export function Header() {
    return (
        <>
            <HeaderContainer className="mt-[3.125rem] mb-[2.5rem] flex justify-center align-center">
                <img src={Logo} alt='Logo' />
            </HeaderContainer>
        </>
    )
}