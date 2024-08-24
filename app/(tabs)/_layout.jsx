import { Tabs } from "expo-router";

import { collections, colors } from "../../constants";
import { TabIcon } from "./_components/tab-icon";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.accentColor,
          tabBarStyle: {
            borderTopWidth: 0.5,
          },
        }}
      >
        {collections.BottomTabs.map((t, i) => (
          <Tabs.Screen
            key={`${t.name}-${i}`}
            name={t.name}
            options={{
              title: t.title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={t.icon}
                  activeIcon={t.activeIcon}
                  color={color}
                  name={t.title}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
