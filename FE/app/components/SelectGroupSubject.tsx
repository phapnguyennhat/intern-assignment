'use client' 
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const groups = [
  {
    label: 'A',
    value: 'a',
  
  },
  {
    label: 'A1',
    value: 'a01',
  
  },
  {
    label: 'B',
    value: 'b',
  
  },
  {
    label: 'D07',
    value: 'd07',
  
  }
]

export default function SelectGroupSubject() {
  const searchParams = useSearchParams()
  const groupType = searchParams.get('groupType')
  const router = useRouter()
  
  const [value, setValue] = useState(groupType ?? 'a')

  const handleChange = (value: string) => {
    setValue(value)
    router.push(`?groupType=${value}`)
  }

    return (
        <Select  value = {value} onValueChange={handleChange}>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder="Select a Group Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {groups.map((group) => (
              <SelectItem key={group.value} value={group.value}>
                {group.label}
              </SelectItem>
            ))}
            
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}
