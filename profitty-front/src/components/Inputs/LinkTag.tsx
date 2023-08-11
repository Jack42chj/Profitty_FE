import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

interface LinkTagProp extends LinkProps {
    children: ReactNode;
};

const LinkTag: React.FC<LinkTagProp> = ({ children, ...props }) => {
    return(
        <Link style={{ textDecoration: "none" }} {...props} >
            {children}
        </Link>
    );
};

export default LinkTag;