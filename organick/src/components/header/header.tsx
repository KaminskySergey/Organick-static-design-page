import { Logo } from "../icons/logo";
import { Container } from "../utils/container";
import { HeaderList } from "./header-list";


export function Header() {
    return <header className="">
        <Container className="my-[40px] px-[30px] flex ">
            <div className=""><Logo /></div>
            <div className="flex items-center pl-[120px] pr-[20px] px-[20px]">
                <nav>

                <HeaderList />
                </nav>
            </div>
        </Container>
    </header>
}
