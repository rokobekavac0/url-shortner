import {
  Title,
  Toast as T,
  ToastProvider,
  ToastViewport,
} from '@radix-ui/react-toast';

import type {
  ToastProps,
  ToastProviderProps,
  ToastTitleProps,
} from '@radix-ui/react-toast';

export const Toast = ({ onOpenChange, open, ...props }: ToastProps) => {
  return (
    <T
      {...props}
      className={`flex h-16 w-full items-center rounded-xl border border-[#404040] bg-[#171717] bg-opacity-70 px-6 text-white text-opacity-80 backdrop-blur data-swipe-closed:animate-[toastFadeIn_100ms_ease-in-out] data-swipe-move:translate-x-[var(--radix-toast-swipe-move-x)] data-swipe-cancel:translate-x-0 data-swipe-cancel:duration-200 data-swipe-end:animate-[toastSwipeOut_100ms_ease-out] md:w-96`}
      open={open}
      duration={3000}
      onOpenChange={onOpenChange}
    ></T>
  );
};

export const ToastTitle = ({ ...props }: ToastTitleProps) => {
  return <Title {...props} className={`text-sm font-normal`}></Title>;
};

export const ToastContainer = ({ children, ...p }: ToastProviderProps) => {
  return (
    <ToastProvider {...p} swipeDirection='right'>
      <ToastViewport
        className={`fixed right-0 bottom-0 z-[9999] flex w-full flex-col items-end justify-end gap-4 p-6 md:p-8`}
      />
      {children}
    </ToastProvider>
  );
};

Toast.Title = ToastTitle;
Toast.Container = ToastContainer;
