import React, {useState} from 'react';

import PropTypes from 'prop-types';

import {useTranslation} from 'react-i18next';

import {StyleSheet, View} from 'react-native';

import {RadioButton, Text, TouchableRipple} from 'react-native-paper';

import StepContainer from './StepContainer';

import {AUTO_NEXT_ENABLED} from '../../constants/Configuration';

const styles = StyleSheet.create({
    radioButtonItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default function CovidContactStep(props) {
    const {t} = useTranslation();

    const selectionOptions = [
        {key: 'true', value: t('basics.yes')},
        {key: 'false', value: t('basics.no')},
    ];

    const [selection, setSelection] = useState(props.caseReport.covidContact !== undefined && props.caseReport.covidContact !== null ? String(props.caseReport.covidContact) : undefined);

    const onSelect = item => {
        var covidContact = item === 'true';
        setSelection(covidContact);
        if (AUTO_NEXT_ENABLED) {
            // onNext is triggers faster then the state change?
            props.onNext(getStateToBeSaved(covidContact));
        }
    };

    const getStateToBeSaved = (status = null) => {
        const caseReport = {...props.caseReport};
        if (status != null) {
            // set status from parameter (optional)
            caseReport.covidContact = status;
        } else {
            caseReport.covidContact = selection;
        }
        return caseReport;
    };

    return (
        <StepContainer
            title={t('report.covidContact.title')}
            helpText={t('report.help.defaultText')}
            onNext={() => props.onNext(getStateToBeSaved())}
            onBack={() => props.onBack(getStateToBeSaved())}
            hideNextButton={props.hideNextButton}
            hideBackButton={props.hideBackButton}>
            <RadioButton.Group onValueChange={onSelect} value={selection}>
                {selectionOptions.map((item, index) => {
                    return (
                        <TouchableRipple key={index} onPress={() => onSelect(item.key)}>
                            <View style={styles.radioButtonItem}>
                                <RadioButton.Android value={item.key} />
                                <Text>{item.value}</Text>
                            </View>
                        </TouchableRipple>
                    );
                })}
            </RadioButton.Group>
        </StepContainer>
    );
}

CovidContactStep.propTypes = {
    caseReport: PropTypes.object.isRequired,
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    hideBackButton: PropTypes.bool,
    hideNextButton: PropTypes.bool,
};
