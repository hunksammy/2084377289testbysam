const MODAL_WINDOW = '[data-modal-window]'
const MODAL_ACTION = '[data-modal-action]'
const OPEN_MODAL   = 'modalOpen'
const CLOSE_MODAL  = 'modalClose'

class ModalWindow {
    static attach() {
        const modal = new ModalWindow()
        modal.init()
    }

    init() {
        if (this.findModalWindow()) {
            this.applyListener()
        }
    }

    applyListener() {
        document.querySelector('*').addEventListener('click', e => {
            const element = e.target.closest(MODAL_ACTION)

            if (this.isCloseWindowButton(element)) {
                this.closeWindow()
                return
            }

            if (this.isCallModalElement(element)) {
                if (this.isOpened()) {
                    this.closeWindow()
                } else {
                    this.openWindow()
                }
            }

            if (this.isCallModalElement(element) !== true && this.modalOverlayIsClickedElement(element) !== true) {
                this.closeWindow()
            }
        })
    }

    isCallModalElement(element) {
        return element && OPEN_MODAL in element.dataset
    }

    isCloseWindowButton(element) {
        return element && CLOSE_MODAL in element.dataset
    }

    findModalWindow() {
        const modalWindow = document.querySelector(MODAL_WINDOW)
        if (modalWindow) {
            this.modal = modalWindow
            return true
        }
        return false
    }

    openWindow() {
        this.modal.classList.add('modal_open')
    }

    closeWindow() {
        this.modal.classList.remove('modal_open')
    }

    isOpened() {
        return this.modal.classList.contains('modal_open')
    }

    modalOverlayIsClickedElement(element) {
        return element && 'modalWindow' in element.dataset
    }
}

ModalWindow.attach()