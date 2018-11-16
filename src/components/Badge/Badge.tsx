import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  count: number;
}

const Badge = ({ count }: BadgeProps) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Badge;
