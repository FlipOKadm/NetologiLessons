
import { NavLink } from 'react-router-dom';
export function CustomLink({ to, children }: { to: string, children: React.ReactNode }) {
  return <NavLink to={to} className={"nav-link"}>{children}</NavLink>
}