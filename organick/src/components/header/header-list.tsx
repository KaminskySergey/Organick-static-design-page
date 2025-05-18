import { useState } from "react";
import { navLinks } from "../../const/navigation";
import { List } from "../utils/list";
import { cn } from "../utils/utils";


export function HeaderList() {
    const [isActive, setIsActive] = useState<string>('');

    const handleClick = (href: string) => {
        setIsActive(`${href}`);

    };

    return (
        <List className="flex items-center gap-[40px]">
            {navLinks.map((el) => (
                <li key={el.title}>
                    <a
                        href={`#${el.href}`}
                        onClick={() => handleClick(el.href)}
                        className={cn(
                            "font-roboto text-[20px] font-normal leading-8 hover:text-black cursor-not-allowed",
                            isActive === `${el.href}` && "text-[#7EB693] font-normal"
                        )}
                    >
                        {el.title}
                    </a>
                </li>
            ))}
        </List>
    );
}
