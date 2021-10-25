import Head from 'next/head'
import Link from 'next/link'

function MDXLink({ as, href, ...rest }) {
  return (
    <Link as={as} href={href}>
      <a {...rest} />
    </Link>
  )
}

const components = {
  a: MDXLink,
  Head,
}

export { components, MDXLink }
