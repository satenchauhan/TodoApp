import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

let offLineShown: null | boolean = null;

export const useConnectivityListener = () => {
  const [connected, setConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      if (!state.isConnected) {
        offLineShown = true;
      }
      if (offLineShown !== null) {
        setConnected(state.isConnected ? true : false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return connected;
};
