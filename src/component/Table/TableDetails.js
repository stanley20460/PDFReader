import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component';

const ww = 130;

export default class ExampleOne extends Component {
constructor(props) {
super(props);
this.state = {
    
};
this.headerIsScrolling = false;
this.rowsIsScrolling = false;




}

// header头 10个
genHeaderData = () => {
    const tableData = [];
    for (let i = 2; i <= 10; i += 1) {
        tableData.push(`header~(${i})`);
    }
    return [tableData];
}

// 左边的固定列 30个
genColData = () => {
    const tableData = [];
    for (let i = 1; i <= 30; i += 1) {
        tableData.push(`Col~(${i})`);
    }
    return tableData;
}

// 生成列表右边数据项
genRowsData = () => {
    const arr1 = [];
    const arr2 = [];
    for (let i = 2; i <= 10; i += 1) {
        arr1.push(`数据～(${i})`);
    }
    for (let j = 1; j <= 30; j += 1) {
        arr2.push(arr1);
    }
    return arr2;
}

render() {
    const state = this.state;
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <Table
                        borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}
                    >
                        <TableWrapper style={{ width: 130 }}>
                            <Col
                                data={['header~(1)']}
                                textStyle={styles.text}
                                style={{ backgroundColor: '#537791' }}
                                widthArr={[ww]}
                                heightArr={[60]}
                            />
                        </TableWrapper>
                    </Table>
                    <ScrollView
                        horizontal
                        ref={(view) => { this.headerScrollView = view; }}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={(event, x) => {
                            {
                                console.log('rows水平滚动距离======>', event.nativeEvent);//水平滚动距离
                                const offsetX = event.nativeEvent.contentOffset.x;
                                if (!this.headerIsScrolling) {
                                    this.rowsIsScrolling = true;
                                    this.rowsScrollView.scrollTo({ x: offsetX,animated: false, });
                               
                                }
                                this.headerIsScrolling = false;
                                
                            }
                        }}
                        
                    >
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                            <Rows
                                data={this.genHeaderData()}
                                textStyle={styles.text}
                                style={{ height: 60, backgroundColor: '#537791' }}
                                widthArr={[ww, ww, ww, ww, ww, ww, ww, ww, ww]}
                            />
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                        <TableWrapper style={{ width: 130 }}>
                            <Col
                                data={this.genColData()}
                                textStyle={styles.text}
                                heightArr={[40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]}
                            />
                        </TableWrapper>
                    </Table>
                    <ScrollView
                        horizontal={true}
                        ref={(view) => { this.rowsScrollView = view; }}
                        scrollEventThrottle={16}
                        onScroll={(event) => {
                            {
                                console.log('rows水平滚动距离======>', event.nativeEvent);//水平滚动距离
                                const offsetX = event.nativeEvent.contentOffset.x;
                                if (!this.rigthIsScrolling) {
                                    this.headerIsScrolling = true;
                                    this.headerScrollView.scrollTo({ x: offsetX,animated: false, });
                                }
                                this.rigthIsScrolling = false;
                            }
                        }}
                    >
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                            <Rows
                                data={this.genRowsData()}
                                textStyle={styles.text}
                                style={{ height: 40 }}
                                widthArr={[ww, ww, ww, ww, ww, ww, ww, ww, ww]}
                            />
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}
}

const styles = StyleSheet.create({
container: { flex: 1, paddingTop: 130, backgroundColor: '#fff' },
text: { margin: 6 },
});