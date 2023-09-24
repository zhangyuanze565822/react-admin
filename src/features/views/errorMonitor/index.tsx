import ScrollContent from '@/components/scroll-content'
import { Sidebar } from './sidebar'
import { playlists } from './data/playlists'

const examples = [
  {
    name: 'Dashboard',
    href: '/examples/dashboard',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard'
  },
  {
    name: 'Cards',
    href: '/examples/cards',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards'
  },
  {
    name: 'Tasks',
    href: '/examples/tasks',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks'
  },
  {
    name: 'Playground',
    href: '/examples/playground',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground'
  },
  {
    name: 'Forms',
    href: '/examples/forms',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms'
  },
  {
    name: 'Music',
    href: '/examples/music',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music'
  },
  {
    name: 'Authentication',
    href: '/examples/authentication',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/authentication'
  }
]

export default function ErrorMonitor() {
  return (
    <div className="h-full overflow-scroll">
      <ScrollContent scrollItems={examples} />
      <div className="m-2 p-2 outline">
        <Sidebar playlists={playlists} />
      </div>
    </div>
  )
}
