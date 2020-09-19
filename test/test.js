import test from 'ava'
import promiseGoodies from 'promise-goodies'
import PThreshold from '../src'

promiseGoodies()

test('construction', async t => {
  const pt = new PThreshold()
  t.true(pt instanceof Promise)
  t.true(typeof pt.limit === 'number')
  t.true(typeof pt.value === 'number')
})

test('trigger over limit', async t => {
  const pt = new PThreshold()
  t.false(await pt.isResolved())

  pt.limit = 5
  pt.value = 4

  t.false(await pt.isResolved())

  pt.value += 2

  t.true(await pt.isResolved())
})

test('invalid limit', async t => {
  const pt = new PThreshold()

  const e = await t.throwsAsync(() => {
    pt.limit = 'foo'
    return pt
  })

  t.true(e instanceof TypeError)
})

test('invalid value', async t => {
  const pt = new PThreshold()

  const e = await t.throwsAsync(() => {
    pt.value = 'foo'
    return pt
  })

  t.true(e instanceof TypeError)
})
