import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { Link } from './link'

type ArrowLinkProps = {
  href: string
  label: string
}

export default function ArrowLink({ href, label }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-x-2 text-sm font-medium"
    >
      {label}
      <div className="rounded-full bg-gray-950 p-0.5 transition duration-300 group-hover:bg-primary">
        <ArrowRightIcon className="size-3 text-white" />
      </div>
    </Link>
  )
}
