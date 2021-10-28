import Link from 'next/link'

export default function MDXLink({ as, href, ...rest }) {
  return (
    <Link as={as} href={href}>
      <a {...rest} />
    </Link>
  )
}
