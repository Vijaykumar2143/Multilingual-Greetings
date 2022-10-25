/* eslint-disable react/no-unknown-property */
import './index.css'

const Language = props => {
  const {isActive, onClickChangeLanguage, LanguageItemDetails} = props
  const {buttonText, id} = LanguageItemDetails

  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const activeTabBtnClassName = isActive ? 'highlighted' : 'not-highlighted'

  return (
    <li className="button-container">
      <button
        type="button"
        active={isActive}
        className={`buttons ${activeTabBtnClassName}`}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Language
