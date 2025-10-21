
export default defineEventHandler((event) => {
    deleteCookie(event, 'token')
    sendRedirect(event, '/')
})