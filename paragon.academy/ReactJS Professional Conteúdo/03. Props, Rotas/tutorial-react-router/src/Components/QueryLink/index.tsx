import { NavLink, NavLinkProps } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface QueryLinkProps extends NavLinkProps {
  to: string;
}

export default function QueryLink({ to, ...props }: QueryLinkProps) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
