import React from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons'

import s from './dropDown.module.scss'

type PropsType = {
  categoryOption: string[]
  nameOfCategory: string
}

const DropdownMenuDemo = ({ categoryOption, nameOfCategory }: PropsType) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState('pedro')

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            New Tab <div className={s.RightSlot}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            New Window <div className={s.RightSlot}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem} disabled>
            New Private Window <div className={s.RightSlot}>⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={s.DropdownMenuSubTrigger}>
              More Tools
              <div className={s.RightSlot}>
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                alignOffset={-5}
                className={s.DropdownMenuSubContent}
                sideOffset={2}
              >
                <DropdownMenu.Item className={s.DropdownMenuItem}>
                  Save Page As… <div className={s.RightSlot}>⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className={s.DropdownMenuItem}>
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className={s.DropdownMenuItem}>Name Window…</DropdownMenu.Item>
                {/*<DropdownMenu.Separator className={s.DropdownMenu.Separator} />*/}
                <DropdownMenu.Separator className={s.DropdownMenu} />
                <DropdownMenu.Item className={s.DropdownMenuItem}>
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className={s.RightSlot}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Label className={s.DropdownMenuLabel}>{nameOfCategory}</DropdownMenu.Label>
          <DropdownMenu.RadioGroup onValueChange={setPerson} value={person}>
            {categoryOption.map(el => (
              <DropdownMenu.RadioItem className={s.DropdownMenuRadioItem} value={el}>
                <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
                  <DotFilledIcon />
                </DropdownMenu.ItemIndicator>
                {el}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
