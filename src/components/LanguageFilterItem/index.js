// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageId} = props
  const {id, language} = languageFilterDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'
  const onClickLanguageFilter = () => {
    setActiveLanguageId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
