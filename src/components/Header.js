import '../styles/Header.sass'
import { formattedDate } from '../utils/dates'
import { tabAvailable } from '../utils/constants'
import { useTranslation } from 'react-i18next'

export const Header = ({ activeTab, handleActiveTab }) => {
  const { t } = useTranslation('tabs')

  return (
    <div className="header">
      <div className="date">{formattedDate}</div>
      <div className="buttons">
        {Object.keys(tabAvailable).map((tab, index) => (
          <button
            className={activeTab === tab ? '-active' : ''}
            onClick={() => handleActiveTab(tab)}
            key={index}
          >
            {t(`${tab}`)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header
