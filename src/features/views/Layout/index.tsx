import ModeToggle from '@/components/mode-toggle'
import { TopNavigationMenu } from './navigation-menu'
import Logo from './Logo'
import MsgTips from './MsgTips'
import { Outlet } from 'react-router-dom'
import { UserNav } from './user-nav'

export default function DashBoard() {
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-between px-4">
          <Logo />

          <div className="flex-1 overflow-hidden">
            <TopNavigationMenu />
          </div>

          <div className="flex items-center">
            <div className="w-6"></div>
            <MsgTips />
            <div className="w-2"></div>
            <ModeToggle />
            <div className="w-2"></div>
            <UserNav />
          </div>
        </div>
      </header>
      <div style={{ height: 'calc(100vh - 57px)' }}>
        <Outlet />
      </div>
    </>
  )
}
