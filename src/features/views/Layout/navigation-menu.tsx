import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Link, useLocation } from 'react-router-dom'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const menuList = [
  {
    name: '异常监控',
    href: '/errorMonitor'
  },
  {
    name: '揽收超时',
    href: '/pickerDelay'
  },
  {
    name: '派签滞留',
    href: '/dispatchDelay'
  },
  {
    name: '发运超时',
    href: '/'
  },
  {
    name: '分拨滞留',
    href: '/'
  },
  {
    name: '干线停滞',
    href: '/'
  },
  {
    name: '支线停滞',
    href: '/'
  },
  {
    name: '派件能力',
    href: '/'
  },

  {
    name: '揽签滞留',
    href: '/'
  },
  {
    name: '滞留预警',
    href: '/'
  },
  {
    name: '虚假发货',
    href: '/'
  },
  {
    name: '交件延误',
    href: '/'
  }
]

export function TopNavigationMenu() {
  const location = useLocation()
  return (
    <ScrollArea className="w-full">
      <NavigationMenu>
        <NavigationMenuList>
          {menuList.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center px-4',
                    location.pathname?.startsWith(item.href)
                      ? 'font-bold text-primary'
                      : 'font-medium text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
