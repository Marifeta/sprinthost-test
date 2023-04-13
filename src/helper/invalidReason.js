export const InvalidReason = Object.freeze({
    Empty: Symbol('Поле не может быть пустым'),
    Miss: Symbol('Пароли должны совпадать'),
    Length: Symbol('Минимальная длина пароля - 8 символов'),
    Reg: Symbol('Кириллические символы запрещены')
})


