import {StyleSheet, TouchableOpacity} from 'react-native';
import Toast, {ErrorToast, SuccessToast} from 'react-native-toast-message';
import {XCircleIcon} from 'react-native-heroicons/outline';
import {PropsWithChildren, useEffect} from 'react';
import {useConnectivityListener} from '../hooks/useConnectivityListener';

const offlineToastConfig = {
  success: (props: any) => (
    <SuccessToast
      {...props}
      renderTrailingIcon={() => (
        <TouchableOpacity onPress={props.hide} style={styles.btn}>
          <XCircleIcon size={30} style={styles.closeIcon} />
        </TouchableOpacity>
      )}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      renderTrailingIcon={() => (
        <TouchableOpacity onPress={props.hide} style={styles.btn}>
          <XCircleIcon size={30} style={styles.closeIcon} />
        </TouchableOpacity>
      )}
    />
  ),
};

export const OfflineToastWrapper = ({children}: PropsWithChildren) => {
  const connected = useConnectivityListener();

  useEffect(() => {
    if (connected === true) {
      Toast.show({
        type: 'success',
        text1: 'You are back online',
        autoHide: false,
      });
    } else if (connected === false) {
      Toast.show({
        type: 'error',
        text1: 'Your network is unavailable',
        autoHide: false,
      });
    }
  }, [connected]);

  return (
    <>
      {children}
      <Toast config={offlineToastConfig} />
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  closeIcon: {
    marginRight: 5,
    color: '#eb5234',
    pointer: 'cursor',
  },
});
