import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {

  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('Can add 1 to 4', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('Can subtract 4 from 7', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('Can multiply 3 by 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('Can divide 21 by 7', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('Can concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(45)
  })

  it('Can chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(45)
  })

  it('Can clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('5');
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('9');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(18)
  })
})
