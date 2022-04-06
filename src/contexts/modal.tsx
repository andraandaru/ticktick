import { createContext, ReactNode, useContext, useState } from "react"

const ModalContextDefault = {
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
}

const ModalContext = createContext(ModalContextDefault)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  const onOpen = () => {
    setIsOpen(true)
  }

  return (
    <ModalContext.Provider value={{ isOpen, onClose, onOpen }}>{children}</ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
