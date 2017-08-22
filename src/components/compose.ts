const compose = (...fns: Function[]) => fns.reduce((f, g) => (...args: Function[]) => f(g(...args)))

export default compose
