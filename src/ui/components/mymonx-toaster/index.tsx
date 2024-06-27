// Toast.tsx
import React, { forwardRef, useImperativeHandle } from 'react';
import Toast, { ToastProps } from 'react-native-toast-message';

const ToastComponent = forwardRef((props: ToastProps, ref) => {
  useImperativeHandle(ref, () => ({
    show: (options:any) => Toast.show(options),
    hide: () => Toast.hide(),
  }));

  return <Toast {...props} />;
});

export default ToastComponent;