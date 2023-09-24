import { Bird } from 'lucide-react'

import { Link } from 'react-router-dom'
export default function Logo() {
  return (
    <Link to="/">
      <div className="mr-6 flex items-center space-x-2">
        <Bird className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">全链路</span>
      </div>
    </Link>
  )
}
