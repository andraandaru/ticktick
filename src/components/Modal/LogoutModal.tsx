import classNames from "classnames"
import { primaryBtnClasses, secondaryBtnClasses } from "../../classes/common"
import { useAuth } from "../../hooks/useAuth"
import BaseModal from "./BaseModal"

type LogoutModalProps = {
  isOpen: boolean
  handleClose: () => void
}

const LogoutModal = ({ isOpen, handleClose }: LogoutModalProps) => {
  const { logout } = useAuth()

  const onLogout = () => {
    logout()
    handleClose()
  }

  return (
    <BaseModal title="Are you sure you want to log out?" titleCenter isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2 flex justify-center space-x-2">
        <button
          className={classNames(secondaryBtnClasses, {
            "w-32": true,
          })}
          onClick={handleClose}
        >
          Cancel
        </button>
        <button className={classNames(primaryBtnClasses, { "w-32": true })} onClick={onLogout}>
          Yes
        </button>
      </div>
    </BaseModal>
  )
}

export default LogoutModal
