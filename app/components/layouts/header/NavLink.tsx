import Link from 'next/link';

type NavLinkProps = {
  pageName: string
  href?: string
  handleClose: () => void
}

export const NavLink = ({pageName, href, handleClose}: NavLinkProps) => {
  return (
    <Link href={`/${href ?? pageName}`} onClick={handleClose}>
      {pageName}
    </Link>
  );
}