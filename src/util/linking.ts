const config = {
  screens: {
    HomeScreen: {
      path: 'home',
    },
    SettingScreen: {
      path: 'setting',
    },
    ProfileScreen: {
      path: 'profile/:id/:name',
      parse: {
        id: (id: any) => `${id}`,
        name: (name: string) => `${name}`,
      },
    },
    ScreenA: {
      path: 'screena',
    },
    ScreenB: {
      path: 'screenb',
    },
    ScreenC: {
      path: 'screenc',
    },
  },
};

export const base_url = 'myapp://app/';
const linking = {
  prefixes: [base_url],
  config,
};

export default linking;
