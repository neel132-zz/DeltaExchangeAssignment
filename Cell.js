import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Cell = (props) => {
    const { row, index } = props;
    if(!index) {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
                <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: 100 }]} key={index}>
                    <Text style={styles.text , { color: row.data[0].profit ? 'green' : 'red' }}>{row.data[0].type}</Text>
                </View>
                <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: 100 }]} key={index}>
                    <Text style={styles.text, { color: row.data[1].profit ? 'green' : 'red' }}>{row.data[1].type}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
            <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: 100 }]} key={index}>
                <Text style={[styles.text, { paddingVertical: 10, color: row.data[0].profit ? 'green' : 'red' }]}>{row.data[0].firstCell}</Text>
                <Text style={styles.text}>{row.data[0].secondCell}</Text>
            </View>
            <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: 100 }]} key={index}>
                <Text style={[styles.text, { paddingVertical: 10, color: row.data[1].profit ? 'green' : 'red' }]}>{row.data[1].firstCell}</Text>
                <Text style={styles.text}>{row.data[1].secondCell}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: { height: 28 },
    text: { textAlign: 'center' },
})

export default Cell;