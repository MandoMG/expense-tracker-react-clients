import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../common/Colors';

interface GraphBarProps {
   percentage: number;
   categoryName: string;
   barHeight?: number;
}

const VerticalGraphBarComponent = (props: GraphBarProps) => {
   const { percentage, categoryName, barHeight } = props;
   const DEFAULT_BAR_HEIGHT = 100;

   const getHeight = () => {
      return barHeight || DEFAULT_BAR_HEIGHT;
   }

   return (
      <View>
         <View style={{
            overflow: "hidden",
            justifyContent: "flex-end",
            height: getHeight()
         }}>
            <View style={{
               height: getHeight(),
               width: 20,
               flexDirection: 'column-reverse',
               alignSelf: "center",
               backgroundColor: Colors.backgroundGray,
               borderRadius: 20,
               overflow: "hidden",
            }}>
               <View style={{
                  borderRadius: 20,
                  backgroundColor: Colors.expenseOrange,
                  height: getHeight() * (percentage / 100)
               }}>
               </View>
            </View>
         </View>
         <Text style={{ color: 'black', fontSize: 14 }}> {categoryName} </Text>
      </View>
   )
}

export default VerticalGraphBarComponent;