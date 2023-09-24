import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../common/Colors';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

interface TileStatus {
  statusColor: string;
}

interface TileProps {
  label: string;
  value: number;
  backgroundColor: string;
  statusColor?: string;
}

const Tile = ({label, value, backgroundColor}: TileProps) => {
  return (
    <View style={[styles.tile, {backgroundColor: backgroundColor}]}>
      <View style={styles.contentWrapper}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <Text style={styles.value}>{TextUtil.formatCurrency(value, 0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    minWidth: 100,
    flex: 1,
    margin: 6,
    borderRadius: 16,
    shadowOpacity: 0.4,
  },
  contentWrapper: {
    margin: 10,
  },
  labelWrapper: {
    flexDirection: 'row',
  },
  label: {
    color: Colors.white,
  },
  value: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  tagWrapper: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    paddingTop: 8,
  },
  tagText: {
    color: Colors.white,
    marginLeft: 5,
    fontSize: 12,
  },
});

export default Tile;
