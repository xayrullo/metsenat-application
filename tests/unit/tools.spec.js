import tools from '@/utils/tools'

describe('check-to-empty', () => {
    const text = 'Lorem ipsum color'
    test('should return entered text', () => {
        expect(tools.checkToEmpty(text)).toBe(text)
    })
    test('when enter empty string or null, should return None', () => {
        expect(tools.checkToEmpty()).toBe('None')
    })
})