import React, { ComponentType } from 'react';
import { SafeAreaView, View } from 'react-native';

const withSafeView = (WrappedComponent: ComponentType) => {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const ComponentWithDashboard = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'gray' }}>
                    <WrappedComponent />
                </View>
            </SafeAreaView>
        );
    };

    ComponentWithDashboard.displayName = `withSafeView(${displayName})`;
    return ComponentWithDashboard;
}

export default withSafeView