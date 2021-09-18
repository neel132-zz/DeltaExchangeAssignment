import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import {
  Table,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

const borderColor = '#C1C0B9';
const primaryColor = 'dodgerblue';
const backgroundColor = '#F7F6E7';

export default function App() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const state = {
    tableHead: [
      'Type',
      'Bid',
      'Mark',
      'Ask',
      '24h Call',
    ],
    widthArr: [100, 100, 100, 100, 100],
  };

  const headerHeight = 40;
  const leftColumnWidth = 100;

  const recordData = [];
  for (let i = 0; i < 60; i += 1) {
    const rowData = [];
    rowData.push(`Record ${i}`);
    recordData.push(rowData);
  }

  const tableData = [];
  for (let i = 0; i < 60; i += 1) {
    const rowData = [];
    for (let j = 0; j < 9; j += 1) {
      rowData.push(`${i}${j}`);
    }
    tableData.push(rowData);
  }

  return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#eee',
        }}
      >
        {/* Left Column */}
        <View
          style={{
            width: leftColumnWidth,
            backgroundColor: 'yellow',
            borderRightWidth: 1,
            borderRightColor: borderColor,
          }}
        >
          {/* Blank Cell */}
          <View
            style={{
              height: headerHeight,
              backgroundColor: primaryColor,
              borderBottomWidth: 1,
              borderBottomColor: borderColor,
            }}
          >
            {/* <Table borderStyle={{ borderWidth: 1, borderColor }}> */}
              <Row
                data={["Strike"]}
                widthArr={state.widthArr}
                style={styles.head}
                textStyle={{ ...styles.text, color: 'white', width: leftColumnWidth, textAlign: 'center',}}
              />
            {/* </Table> */}
          </View>
          {/* Left Container : scroll synced */}
          <ScrollView
            ref={leftRef}
            style={{
              flex: 1,
              backgroundColor: 'white',
            }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          >
            <Table
              borderStyle={{
                borderWidth: 1,
                borderColor,
              }}
            >
              {recordData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={[leftColumnWidth]}
                  style={index % 2 ? styles.row : { backgroundColor }}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
        {/* Right Column */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}
        >
          <ScrollView horizontal={true} bounces={false}>
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor }}>
                <Row
                  data={state.tableHead}
                  widthArr={state.widthArr}
                  style={styles.head}
                  textStyle={{ ...styles.text, color: 'white' }}
                />
              </Table>
              <ScrollView
                ref={rightRef}
                style={styles.dataWrapper}
                scrollEventThrottle={16}
                bounces={false}
                onScroll={(e) => {
                  const { y } = e.nativeEvent.contentOffset;
                  leftRef.current?.scrollTo({ y, animated: false });
                }}
              >
                <Table borderStyle={{ borderWidth: 1, borderColor }}>
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={index % 2 ? styles.row : { backgroundColor }}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#eee' },
  head: { height: 40, backgroundColor: primaryColor },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
});