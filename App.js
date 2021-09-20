import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Cell from './Cell';

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
    recordData: [`0.9000`, `1.0000`, `1.1000`, `1.1100`, `1.2000`, `1.3000`, `1.4000`, `1.5000`,],
  };

  const data = [
    {
      data: [
        {
          type: 'C',
          firstCell: '000.1',
          secondCell: '80%',
          profit: true
        },
        {
          type: 'P',
          firstCell: '000.1',
          secondCell: '80%',
          profit: false
        },
      ]
    },
    {
      data: [
        {
          type: 'C',
          firstCell: '000.1',
          secondCell: '80%',
          profit: true
        },
        {
          type: 'P',
          firstCell: '000.1',
          secondCell: '80%',
          profit: false
        },
      ]
    },
    {
      data: [
        {
          type: 'C',
          firstCell: '000.1',
          secondCell: '80%',
          profit: true
        },
        {
          type: 'P',
          firstCell: '000.1',
          secondCell: '80%',
          profit: false
        },
      ]
    },
    {
      data: [
        {
          type: 'C',
          firstCell: '000.1',
          secondCell: '80%',
          profit: true
        },
        {
          type: 'P',
          firstCell: '000.1',
          secondCell: '80%',
          profit: false
        },
      ]
    },
    {
      data: [
        {
          type: 'C',
          firstCell: '000.1',
          secondCell: '80%',
          profit: true
        },
        {
          type: 'P',
          firstCell: '000.1',
          secondCell: '80%',
          profit: false
        },
      ]
    },
  ];

  const headerHeight = 40;
  const leftColumnWidth = 100;

  const recordData = [];
  for (let i = 0; i < 8; i += 1) {
    const rowData = [];
    rowData.push(state.recordData[i]);
    recordData.push(rowData);
  }

  const tableData = [];
  for (let i = 0; i < 8; i += 1) {
    const rowData = [];
    for (let j = 0; j < 5; j += 1) {
      rowData.push(data[j]);
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
          <View
            style={{
              height: headerHeight,
              backgroundColor: primaryColor,
              borderBottomWidth: 1,
              borderBottomColor: borderColor,
            }}
          >
            <View style={[styles.head, { width: 100, justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={{ ...styles.text, color: 'white', width: leftColumnWidth, textAlign: 'center',}}>Strike</Text>
            </View>
          </View>
          {/* Left Container : scroll synced */}
          <ScrollView
            ref={leftRef}
            style={{
              flex: 1,
              backgroundColor: 'white',
            }}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={(e) => {
              const { y } = e.nativeEvent.contentOffset;
              rightRef.current?.scrollTo({ y, animated: false });
            }}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                borderColor,
              }}
            >
              {recordData.map((rowData, index) => (
                <View style={{ flex: 1, width: leftColumnWidth, height: 100, backgroundColor, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }} key={index}>
                  <Text style={styles.text}>
                    {rowData}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        {/* Right Column */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView horizontal={true} bounces={false}>
            <View>
              <View style={{ borderWidth: 1, borderColor, flexDirection: 'row', flex: 1, maxHeight: 40, backgroundColor: primaryColor, opacity: 1, zIndex: 99999 }}>
              {
                state.tableHead.map((rowData) => (
                  <View style={[styles.head, { width: 100, justifyContent: 'center', alignItems: 'center', opacity: 1 }]}>
                    <Text style={[styles.text, { color: 'white' }]}>
                      {rowData}
                    </Text>
                  </View>
                ))
              }
              </View>
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
                <View style={{ borderColor, paddingTop: 40,  }}>
                  {tableData.map((rowData) => (
                    <View style={{ flex: 1, flexDirection: 'row', height: 100 }}>
                      {
                        rowData.map((row, ind) => {
                          // console.log("row", row);
                          // console.log("first cell", row.data[0].firstCell);
                          return (
                            <Cell row={row} index={ind} />
                          )
                        })
                      }
                    </View>
                  ))}
                </View>
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