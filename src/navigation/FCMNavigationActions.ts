import NavigationActions from '@react-navigation/native';

let _navigator: string | Function;

function setTopLevelNavigator(navigationRef: string) {
  _navigator = navigationRef;
}

function navigate(routeName: string, params: object) {
  _navigator.navigate(routeName, params);
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
};
