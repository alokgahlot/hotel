import React from 'react'
import CommonStyles from '../../commonStyles'
import { styles } from './styles'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import { LOCAL_STRINGS } from '../../constants/strings'
import InputFIeld from '../common/InputFIeld'
const { hotelBW } = require('../../assets')

export default function Login() {
    return (
        <div style={{
            ...CommonStyles.fullBackgroundImage, ...{ backgroundImage: 'url(' + hotelBW + ')', }
        }}>
            <div style={CommonStyles.whiteContainer} >
                <div style={styles.leftContainer} >
                    <AutoTyping
                        active
                        textRef={LOCAL_STRINGS.tagLine}
                        writeSpeed={150}
                        deleteSpeed={150}
                        delayToWrite={1000}
                        delayToDelete={2000}
                    />
                    <BlinkCursor
                        active
                        blinkSpeed={500}
                    />
                </div>
                <div style={styles.formContainer} >
                    <form method='post' >
                        <InputFIeld />
                        <InputFIeld />
                        <InputFIeld />
                        <InputFIeld />

                    </form>
                </div>
            </div>

        </div >
    )
}


