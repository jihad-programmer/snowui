
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'

export const SelectComponent2 = () => {
  return (
    <Select>
      <SelectAction className="w-[6rem]">
        <SelectValue placeholder="Today" />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Team</SelectLabel>
          <SelectItem value="gd">Graphic Designer</SelectItem>
          <SelectItem value="ud">UX Designer </SelectItem>
          <SelectItem value="pm">Product Manager</SelectItem>
          <SelectItem value="wde">Web Designer</SelectItem>
          <SelectItem value="swe">Software Engineer</SelectItem>
          <SelectItem value="mm">Marketing Manager</SelectItem>
          <SelectItem value="wd">Web Developer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

