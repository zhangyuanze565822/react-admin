import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Link, useLocation } from 'react-router-dom'

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollItems: Array<object>
}

export default function ScrollContent({
  className,
  scrollItems,
  ...props
}: NavProps) {
  const location = useLocation()
  return (
    <ScrollArea className="w-full">
      <div className={cn('flex h-14 items-center', className)} {...props}>
        {scrollItems.map((item: any) => (
          <Link
            to={item.href}
            key={item.href}
            className={cn(
              'flex items-center px-4',
              location.pathname?.startsWith(item.href)
                ? 'font-bold text-primary'
                : 'font-medium text-muted-foreground'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  )
}
