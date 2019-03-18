import requireContext from 'require-context.macro'
import {configure} from '@storybook/react'

const req = requireContext('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
