import { Link, useLocation } from "react-router-dom";
import { Pages } from "../../configs/navigations";
import styles from "./Header.module.scss";
import IconCatalog from "../../assets/icon-catalog.svg?react";
import IconCard from "../../assets/icon-card.svg?react";
import { PageId } from "../../configs/types";
import cn from "classnames";
import { CartModal } from "../CartModal";
import { useEffect, useRef, useState } from "react";

const renderIconByPageId = (id: PageId) => {
    const icons = {
        [PageId.Catalog]: <IconCatalog className={styles.icon} />,
        [PageId.Card]: <IconCard className={styles.icon} />,
    };

    return icons[id] ?? null;
};

export const Header = () => {
    const location = useLocation();
    const ref = useRef<HTMLLIElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);

            return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, []);

    return (
        <header className={styles.root}>
            <h1 className={styles.title}>Интерьер.</h1>
            <nav className={styles.navigationContainer}>
                <ul className={styles.navigation}>
                    {Pages.map((page) => {
                        const isActive = location.pathname === page.to;
                        return (
                            <li
                                className={styles.item}
                                key={page.id}
                                ref={page.id === PageId.Card ? ref : null}
                            >
                                {page.id === PageId.Card &&
                                    isHovered &&
                                    location.pathname === "/" && (
                                        <div className={styles.modalContainer}>
                                            <CartModal />
                                        </div>
                                    )}
                                <Link
                                    className={cn(styles.link, {
                                        [styles.activeLink]: isActive,
                                    })}
                                    aria-label={page.title}
                                    to={page.to}
                                >
                                    {renderIconByPageId(page.id)}
                                    <span className={styles.linkText}>
                                        {page.title}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};
