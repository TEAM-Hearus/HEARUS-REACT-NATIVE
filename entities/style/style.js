// 나중에 화면 스크린 얻는 방법 구하게 하기
const width = 2732
const height = 2048

const screen = {
    fullWidth: width,
    halfWidth: parseInt(width / 2),
    fullHeight: height,
    halfHeight: parseInt(height / 2)
}

const font = {
    regular: "Regular",
    bold: "Bold"
}

const color = {
    defaultOrange: '#FF6B3D',
    defaultBlue: '#415BFF'
}

export { screen, font, color }