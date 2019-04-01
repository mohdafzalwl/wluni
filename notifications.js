import { withToastManager } from 'react-toast-notifications';

const Demo = ({ content, toastManager }) => (
  <Button onClick={() => toastManager.add(content, {
    appearance: 'warning',
    autoDismiss: true,
  })}>
    Add Toast
  </Button>
);

export const ToastDemo = withToastManager(Demo);
