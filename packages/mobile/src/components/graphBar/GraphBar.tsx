import React from 'react';
import { Text, View } from 'react-native';

interface GraphBarProps {
   percentage: number;
   categoryName: string;
   barHeight?: number;
}

const GraphBarComponent = (props: GraphBarProps) => {
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
               backgroundColor: '#AAAAAA',
               borderRadius: 20,
               overflow: "hidden",
            }}>
               <View style={{
                  borderRadius: 20,
                  backgroundColor: '#a01432',
                  height: getHeight() * (percentage / 100)
               }}>
               </View>
            </View>
         </View>
         <Text style={{ color: 'white', fontSize: 14 }}> {categoryName} </Text>
      </View>
   )
}

export default GraphBarComponent;