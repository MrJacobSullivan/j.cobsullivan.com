import Link from 'next/link'

export default function MDXLink({ as, href, ...otherProps }) {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} />
    </Link>
  )
}
