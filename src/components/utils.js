const keys = new Map([
 [68, 'D'],
 [82, 'R'],
 [70, 'F'],
 [84, 'T'],
 [71, 'G'],
 [72, 'H'],
 [85, 'U'],
 [74, 'J'],
 [73, 'I'],
 [75, 'K'],
 [79, 'O'],
 [76, 'L'],
])

export const convertKeyCode = keyCode => { return keys.get(keyCode) }
