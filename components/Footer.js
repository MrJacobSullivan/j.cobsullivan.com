import { meta } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>
        {meta.name} &copy; {year}
      </p>
    </footer>
  )
}
