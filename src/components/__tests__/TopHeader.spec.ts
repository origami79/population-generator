import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TopHeader from '../TopHeader.vue'

describe('TopHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(TopHeader, { props: { msg: 'Population Generator' } })
    expect(wrapper.text()).toContain('Population Generator')
  })
})
