export const INCREMENT_BUTTON = 'INCREMENT_BUTTON'
export const DECREMENT_BUTTON = 'DECREMENT_BUTTON'
export const MENU_VISIBLE = 'MENU_VISIBLE'

export function setMenuVisible(menuVisible: boolean) {
    return {
        type: 'MENU_VISIBLE',
        payload: menuVisible
    }
}
