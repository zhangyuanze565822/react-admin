import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import MsgContent from './MsgContent'
import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'

export default function Msg() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <MessageSquare className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border-0 p-0">
        <MsgContent />
      </PopoverContent>
    </Popover>
  )
}
