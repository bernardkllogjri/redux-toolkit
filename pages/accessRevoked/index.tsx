import * as React from 'react'
import { BlueTemplate } from 'components'
import { t } from 'utils'

const AccessRevoked = props => {
  return (
    <div className='ta-access-revoked'>
      <BlueTemplate logoUrl='/'>
        <div className='ta-access-revoked__box'>
          {t('global.accessRevoked')}
        </div>
      </BlueTemplate>
    </div>
  )
}

export default AccessRevoked
