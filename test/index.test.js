import 'intersection-observer'
import slothy from '../src'

function createImg() {
  const img = document.createElement('img')
  img.setAttribute('data-slothy', 'test')
  return img
}

test('should be defined', () => {
  expect(slothy).toBeDefined()
})


test('should lazy load images with selector', () => {
  document.body.appendChild(createImg())
  document.body.appendChild(createImg())
  expect(slothy().length).toBe(2)
  document.body.innerHTML = ''
})